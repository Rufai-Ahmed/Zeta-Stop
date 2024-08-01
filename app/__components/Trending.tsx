import React from "react";
import Container from "./re-use/Container";
import Image from "next/image";
import Button from "./re-use/Button";
import TrendCard from "./re-use/TrendCard";
import { trendData } from "@/public/data/data";
import { iTrend } from "@/public/utils/interfaces";

const Trending = () => {
  return (
    <Container className="space-y-10">
      <div className="flex items-start">
        <Image
          src={"/assets/search.png"}
          alt="Search 3d icon"
          width={100}
          height={100}
          className="size-16 mr-3 mt-2"
        />

        <div className="space-y-2">
          <h2 className="text-[30px] font-bold">Trending ZepaStops</h2>
          <p className="text-[15px]">
            Checkout Weekly Trending Exclusive Deals
          </p>
        </div>
      </div>

      <div className="w-full grid grid-cols-3 gap-8">
        {trendData.map((el: iTrend, i: number) => (
          <TrendCard {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default Trending;
