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
