import { iHiwData } from "@/public/utils/interfaces";
import Image from "next/image";
import React, { FC } from "react";

const HIWCard: FC<iHiwData> = ({ b, img, p, sm }) => {
  return (
    <div className="min-h-[300px] max-h-[850px] lg:max-h-[900px] md:max-h-[700px] rounded-[30px] grid grid-rows-8 gap-4 col-span-3 lg:col-span-1 bg-[#3b3b3b]">
      <div className="row-span-3 xl:row-span-3 flex items-center justify-center">
        <Image
          src={img!}
          width={100}
          height={100}
          unoptimized
          className="w-full h-full rounded-t-[30px] object-cover object-center "
          alt={b!}
        />
      </div>

      <div className="p-7 row-span-5 xl:row-span-5 text-center justify-between flex flex-col">
        <p className="text-[20px]">
          <b>{b}</b>
        </p>

        <p className="text-[16px]">{p}</p>

        {sm && <p>{sm}</p>}
      </div>
    </div>
  );
};

export default HIWCard;
