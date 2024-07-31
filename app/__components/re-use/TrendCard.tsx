import Image from "next/image";
import React, { FC } from "react";
import Button from "./Button";
import { iTrend } from "@/public/utils/interfaces";

const TrendCard: FC<iTrend> = ({
  b,
  bigImg,
  mdImageOne,
  mdImageTwo,
  remain,
  sm,
  smallImg,
}) => {
  return (
    <div className="min-h-[550px] space-y-4 col-span-3 lg:col-span-1">
      <Image
        src={bigImg!}
        width={100}
        height={100}
        alt="Smart Dog NFT"
        className="h-[400px] w-full object-cover rounded-[25px]"
        unoptimized
      />

      <div className="w-full grid grid-cols-3 gap-4">
        <Image
          src={mdImageOne!}
          width={100}
          height={100}
          alt="Smart Cat NFT"
          className=" w-full rounded-[25px] object-cover "
          unoptimized
        />
        <Image
          src={mdImageTwo!}
          width={100}
          height={100}
          alt="Smart Bear NFT"
          className=" w-full rounded-[25px] object-cover "
          unoptimized
        />
        <Button className="flex items-center justify-center text-[20px]">
          {" "}
          {remain}
        </Button>
      </div>

      <p className="text-sm">
        <b>
          <big>{b}</big>
        </b>
      </p>

      <div className="flex items-center gap-3">
        <div className="p-2 bg-violet-500 rounded-[20px]">
          <Image
            src={smallImg!}
            width={100}
            height={100}
            alt="Smart Cat NFT"
            className="h-auto object-contain size-7"
            unoptimized
          />
        </div>

        <small>{sm}</small>
      </div>
    </div>
  );
};

export default TrendCard;
