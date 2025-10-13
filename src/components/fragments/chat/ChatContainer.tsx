/**
 * Author: Nguyen Dinh Lam
 * Email: kiminonawa1305@gmail.com
 * Phone number: +84 855354919
 * Create at: 3:53 PM - 13/10/2025
 *  User: kimin
 **/

// @flow
import * as React from 'react';
import {EpArrowLeft} from "@/assets/icons/EpArrowLeft";
import Image from "next/image";
import zaloIcon from "@/app/icon.png";
import {MynauiTag} from "@/assets/icons/MynauiTag";

type Props = {
    onShowMenu: () => void;
};
export const ChatContainer = ({onShowMenu}: Props) => {
    return (
        <div className={"grid grid-rows-[auto_1fr]"}>
            <div
                className={
                    "flex items-center gap-2 border-b-1 border-gray-200 px-5 py-3"
                }
            >
                <div
                    className={
                        "block cursor-pointer rounded-full p-1 hover:bg-gray-200 lg:hidden"
                    }
                    onClick={onShowMenu}
                >
                    <EpArrowLeft width={22} height={22} />
                </div>
                <Image
                    className={"size-12 rounded-full border-1 border-gray-300"}
                    src={zaloIcon.src}
                    alt={""}
                    width={48}
                    height={48}
                />
                <div className={"ms-1"}>
                    <h3 className={"text-lg font-semibold"}>Gia Đình Thân Yêu</h3>
                    <MynauiTag />
                </div>
            </div>
            <div className={"bg-blue-50"}></div>
        </div>
    );
};
