import { ButtonHTMLAttributes, ReactNode } from "react";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}

export interface iMarketData {
  name?: string;
  img?: string;
  price?: string;
}

export interface iHiwData {
  b?: string;
  p?: string;
  sm?: string | ReactNode;
  img?: string;
}

export interface iTrend {
  bigImg?: string;
  mdImageOne?: string;
  mdImageTwo?: string;
  smallImg?: string;
  remain?: string;
  b?: string;
  sm?: string;
}
