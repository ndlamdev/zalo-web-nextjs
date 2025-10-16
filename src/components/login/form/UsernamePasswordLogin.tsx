/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 4:32 AM - 15/10/2025
 *  User: kimin
 **/

"use client";
import * as React from "react";
import { useEffect } from "react";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CountryCodes } from "@/assets/data/CountryCodes";
import useSWRMutation from "swr/mutation";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

type Props = { onQrLoginAction: () => void };

const login = async (
  key: string,
  {
    arg,
  }: {
    arg: {
      code: string;
      phoneNumber: string;
      password: string;
    };
  },
) =>
  fetch(key, {
    method: "POST",
    body: JSON.stringify(arg),
    credentials: "include",
  }).then(async (res) => {
    const body = await res.json();
    if (res.ok) return body;
    throw body;
  });

const messageError: Record<number, string> = {
  401: "Tên đăng nhập hoặc mật khẩu không khớp, vui lòng nhập lại",
  500: "Lỗi server",
  1003: "Số điện thoại không hợp lệ",
};

export const UsernamePasswordLogin = (props: Props) => {
  const { trigger, isMutating, data, error } = useSWRMutation(
    "/api/auth/login",
    login,
  );
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
    setValue,
  } = useForm<{ code: string; phoneNumber: string; password: string }>({
    defaultValues: { code: "+84" },
  });
  const router = useRouter();

  useEffect(() => {
    if (!data) return;
    localStorage.setItem("phone_number", data.data.phone_number);
    localStorage.setItem("phone_number_code", data.data.phone_number_code);
    localStorage.setItem("access_token", data.data.access_token);
    router.replace("/");
  }, [data, router]);

  return (
    <div className={`mt-10 px-20`}>
      <div className={"flex flex-col gap-5"}>
        <div
          className={"flex items-center gap-2 border-b-1 border-gray-200 pb-2"}
        >
          <label
            htmlFor={"username"}
            className={"flex items-center gap-2 text-gray-700"}
          >
            <Icon icon="ic:baseline-phone-iphone" width="18" height="18" />
            <Select
              defaultValue={"+84"}
              onValueChange={(code) => setValue("code", code)}
            >
              <SelectTrigger className="w-22 border-none text-black shadow-none outline-none">
                <SelectValue>{watch("code")}</SelectValue>
              </SelectTrigger>
              <SelectContent className={"max-h-72"}>
                {CountryCodes.map((countryCode) => {
                  return (
                    <SelectItem
                      value={countryCode.dial_code}
                      key={`${countryCode.code}_${countryCode.dial_code}`}
                    >
                      {countryCode.name}{" "}
                      <span className={"text-gray-500"}>
                        {countryCode.dial_code}
                      </span>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </label>
          <input
            className={"flex-1 outline-none"}
            placeholder={"Số điện thoại"}
            id="username"
            type="tel"
            {...register("phoneNumber", {
              required: "Vui lòng nhập số điện thoại",
              minLength: {
                value: 8,
                message: "Số điện thoại phải có ít nhất 8 số",
              },
            })}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(
                new RegExp(/[^0-9]/, "g"),
                "",
              );
            }}
          />
        </div>
        <div
          className={"flex items-center gap-2 border-b-1 border-gray-200 pb-2"}
        >
          <label htmlFor={"password"} className={"text-gray-700"}>
            <Icon icon="uis:lock" width="18" height="18" />
          </label>
          <input
            className={"flex-1 outline-none"}
            placeholder={"Mật khẩu"}
            id={"password"}
            type={"password"}
            {...register("password", {
              required: "Vui lòng nhập mật khẩu",
            })}
          />
        </div>
        {error && (
          <span className={"text-red-500"}>{messageError[error.code]}</span>
        )}
        <button
          className={`w-full rounded-md py-3 text-sm text-white ${isValid && !isMutating ? "cursor-pointer bg-blue-500 active:opacity-75" : "bg-blue-300"}`}
          onClick={handleSubmit((res) => trigger(res))}
        >
          Đăng nhập với mật khẩu
        </button>
      </div>
      <button className={"w-full cursor-pointer py-2 text-center text-sm"}>
        Quên mật khẩu
      </button>
      <button
        className={
          "mt-5 w-full cursor-pointer py-2 text-center font-bold text-blue-500 active:opacity-75"
        }
        onClick={props.onQrLoginAction}
      >
        Đăng nhập qua mã QR
      </button>
    </div>
  );
};
