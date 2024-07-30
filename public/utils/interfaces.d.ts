import { ButtonHTMLAttributes, ReactNode } from "react";

export interface iButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
}
