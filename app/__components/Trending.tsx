import React from "react";
import Container from "./re-use/Container";
import Image from "next/image";
import Button from "./re-use/Button";
import TrendCard from "./re-use/TrendCard";

const Trending = () => {
  return (
    <Container className="space-y-10">
      <div className="space-y-2">
        <h2 className="text-[30px] font-bold">Trending ZepaStops</h2>
        <p className="text-[15px]">Checkout Weekly Trending Exclusive Deals</p>
      </div>

      <div className="w-full grid grid-cols-3 gap-8">
        {Array.from({ length: 3 }).map((el: unknown, i: number) => (
          <TrendCard key={i} />
        ))}
      </div>
    </Container>
  );
};

export default Trending;
