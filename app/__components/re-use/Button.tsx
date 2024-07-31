import { iButton } from "@/public/utils/interfaces";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";

const Button: FC<iButton> = ({ children, className, icon, ...props }) => {
  return (
    <button
      {...props}
      className={twMerge(
        "flex items-center rounded-[40px] gap-2 px-5 py-2 bg-violet-500",
        className
      )}
    >
      {icon && icon}
      {children}
    </button>
  );
};

export default Button;
