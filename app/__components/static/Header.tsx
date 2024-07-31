import React from "react";
import { MdPerson } from "react-icons/md";
import Button from "../re-use/Button";
import { BiMenu } from "react-icons/bi";

const Header = () => {
  return (
    <header className="h-[80px] bg-[#353535] text-white w-full flex justify-center items-center">
      <main className="w-[80%] mx-auto max-w-7xl flex lg:justify-end justify-between items-center">
        <BiMenu size={20} className="lg:hidden" />

        <div className="flex items-center gap-7  ">
          {["Find ZepaStops Nearby", "marketplace", "for businesses"].map(
            (el: string, i: number) => (
              <nav className="text-[16px] font-bold hidden lg:block" key={i}>
                {el}
              </nav>
            )
          )}

          <Button icon={<MdPerson size={20} />}>Connect Wallet</Button>
        </div>
      </main>
    </header>
  );
};

export default Header;
