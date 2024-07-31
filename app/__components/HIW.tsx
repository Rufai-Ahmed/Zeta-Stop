import React from "react";
import Container from "./re-use/Container";
import HIWCard from "./re-use/HIWCard";
import { hiwData } from "@/public/data/data";
import { iHiwData } from "@/public/utils/interfaces";

const HIW = () => {
  return (
    <Container>
      <div className="space-y-2">
        <h2 className="text-[30px] font-bold">How It Works For Users</h2>
        <p className="text-[15px]">Find Out How To Get Started</p>
      </div>

      <div className="w-full grid gap-8 grid-cols-3 ">
        {hiwData.map((el: iHiwData, i: number) => (
          <HIWCard {...el} key={i} />
        ))}
      </div>
    </Container>
  );
};

export default HIW;
