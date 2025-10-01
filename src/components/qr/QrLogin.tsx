/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 3:44 PM - 26/09/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import icon from "@/assets/images/zlogo.png";
import useSWRMutation from "swr/mutation";
import { Spinner } from "@/components/ui/shadcn-io/spinner";
import { useRouter } from "next/navigation";

type ErrorCorrectionLevel = "L" | "M" | "Q" | "H";
type CrossOrigin = "anonymous" | "use-credentials" | "" | undefined;

type ImageSettings = {
  /**
   * The URI of the embedded image.
   */
  src: string;
  /**
   * The height, in pixels, of the image.
   */
  height: number;
  /**
   * The width, in pixels, of the image.
   */
  width: number;
  /**
   * Whether or not to "excavate" the modules around the embedded image. This
   * means that any modules the embedded image overlaps will use the background
   * color.
   */
  excavate: boolean;
  /**
   * The horiztonal offset of the embedded image, starting from the top left corner.
   * Will center if not specified.
   */
  x?: number;
  /**
   * The vertical offset of the embedded image, starting from the top left corner.
   * Will center if not specified.
   */
  y?: number;
  /**
   * The opacity of the embedded image in the range of 0-1.
   * @defaultValue 1
   */
  opacity?: number;
  /**
   * The cross-origin value to use when loading the image. This is used to
   * ensure compatibility with CORS, particularly when extracting image data
   * from QRCodeCanvas.
   * Note: `undefined` is treated differently than the seemingly equivalent
   * empty string. This is intended to align with HTML behavior where omitting
   * the attribute behaves differently than the empty string.
   */
  crossOrigin?: CrossOrigin;
};

type QRProps = {
  /**
   * The size, in pixels, to render the QR Code.
   * @defaultValue 128
   */
  size?: number;
  /**
   * The Error Correction Level to use.
   * @see https://www.qrcode.com/en/about/error_correction.html
   * @defaultValue L
   */
  level?: ErrorCorrectionLevel;
  /**
   * The background color used to render the QR Code.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   * @defaultValue #FFFFFF
   */
  bgColor?: string;
  /**
   * The foregtound color used to render the QR Code.
   * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color_value
   * @defaultValue #000000
   */
  fgColor?: string;
  /**
   * Whether or not a margin of 4 modules should be rendered as a part of the
   * QR Code.
   * @deprecated Use `marginSize` instead.
   * @defaultValue false
   */
  includeMargin?: boolean;
  /**
   * The number of _modules_ to use for margin. The QR Code specification
   * requires `4`, however you can specify any number. Values will be turned to
   * integers with `Math.floor`. Overrides `includeMargin` when both are specified.
   * @defaultValue 0
   */
  marginSize?: number;
  /**
   * The title to assign to the QR Code. Used for accessibility reasons.
   */
  title?: string;
  /**
   * The minimum version used when encoding the QR Code. Valid values are 1-40
   * with higher values resulting in more complex QR Codes. The optimal
   * (lowest) version is determined for the `value` provided, using `minVersion`
   * as the lower bound.
   * @defaultValue 1
   */
  minVersion?: number;
  /**
   * If enabled, the Error Correction Level of the result may be higher than
   * the specified Error Correction Level option if it can be done without
   * increasing the version.
   * @defaultValue true
   */
  boostLevel?: boolean;
  /**
   * The settings for the embedded image.
   */
  imageSettings?: ImageSettings;
};

const fetcher = (url: string) =>
  fetch(process.env.NEXT_PUBLIC_API_URL + url, { method: "POST" }) // "http://localhost:8001/v1/qr"  |  process.env.NEXT_PUBLIC_API_URL + url
    .then((res) => res.json())
    .catch((error) => console.log(error));

export const QrLogin = (props: QRProps) => {
  const { trigger, data, isMutating } = useSWRMutation("/auth/v1/qr", fetcher);
  const [renew, setRenew] = useState(false);
  const router = useRouter();

  useEffect(() => {
    trigger().then();
  }, [trigger]);

  const registerEventSource = useCallback(
    (token: string) => {
      const eventSource = new EventSource(
        process.env.NEXT_PUBLIC_API_URL +
          `/auth/v1/qr/subscribe?token=${token}`,
      );

      eventSource.onmessage = (event) => {
        const response = JSON.parse(event.data);
        localStorage.setItem("phone_number", response.data.phone_number);
        localStorage.setItem(
          "phone_number_code",
          response.data.phone_number_code,
        );
        localStorage.setItem("access_token", response.data.access_token);
        fetch("/api/auth/proxy-login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ cookie: response.data.refresh_token }),
          credentials: "include",
        }).then(() => {
          router.replace("/");
        });
      };

      eventSource.onerror = () => {
        eventSource.close();
        setRenew(true);
      };

      return eventSource;
    },
    [router],
  );

  useEffect(() => {
    if (!data) {
      return;
    }
    setRenew(false);
    const timeout = setTimeout(() => {
      setRenew(true);
    }, 60000);
    const eventSource = registerEventSource(data.data.token);

    return () => {
      eventSource.close();
      clearTimeout(timeout);
    };
  }, [data, registerEventSource]);

  if (isMutating)
    return (
      <div
        style={{ width: `${props.size}px`, height: `${props.size}px` }}
        className={"flex items-center justify-center"}
      >
        <Spinner variant={"infinite"} />
      </div>
    );

  return (
    <div
      style={{ width: `${props.size}px`, height: `${props.size}px` }}
      className={"relative"}
    >
      <div className={renew ? "opacity-10" : ""}>
        <QRCodeSVG
          value={
            process.env.NEXT_PUBLIC_API_URL + `/api/qr/confirm?sid=""&token=""`
          }
          {...props}
          imageSettings={
            props.imageSettings ?? {
              src: icon.src,
              x: undefined,
              y: undefined,
              height: 25,
              width: 35,
              opacity: 1,
              excavate: true,
            }
          }
        />
      </div>
      {renew && (
        <div
          className="qrcode-expired absolute top-0 left-0 flex items-center justify-center"
          style={{
            width: `${props.size}px`,
            height: `${props.size}px`,
            background: "rgba(253,253,253,0.1)",
          }}
        >
          <div className={"flex flex-col justify-center"}>
            <p className={"mb-1 text-center text-xs"}>Mã QR hết hạn</p>
            <button
              className="cursor-pointer rounded-md bg-blue-600 px-4 py-1 text-sm text-white"
              onClick={() => trigger().then()}
            >
              Lấy mã mới
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
