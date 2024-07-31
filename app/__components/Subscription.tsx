import React from "react";
import Container from "./re-use/Container";
import Button from "./re-use/Button";
import { CgMail } from "react-icons/cg";

const Subscription = () => {
  return (
    <Container className="min-h-[300px] xl:min-h-[300px] 2xl:min-h-[300px]">
      <div className="bg-[#3b3b3b] flex flex-col justify-between min-h-[400px] rounded-[40px] p-7 md:p-14 ">
        <h2 className="text-[40px] font-bold">Join Our Weekly</h2>

        <p className=" capitalize text-[20px]">
          Get exclusive promotions & updates <br /> straight to your inbox
        </p>

        <div className="md:w-[400px] w-full overflow-hidden bg-white flex h-[50px] rounded-[30px] pl-3">
          <input
            type="email"
            placeholder="Enter your email here"
            className="h-full w-1/2 flex-grow outline-none flex text-black"
          />

          <Button className="" icon={<CgMail size={20} />}>
            <p className="hidden md:block">Subscribe</p>
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Subscription;
