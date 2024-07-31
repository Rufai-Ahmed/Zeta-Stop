import React, { FC, HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const Container: FC<HTMLAttributes<HTMLElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section
      className={twMerge(
        "2xl:min-h-[800px] xl:min-h-[800px] w-[80%] min-h-[800px] py-10 mx-auto text-white space-y-10 max-w-7xl",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Container;
