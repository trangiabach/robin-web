import { ReactNode } from "react";

export interface Card {
  title: string;
  description: string;
  graphic?: ReactNode;
  button?: {
    text: string;
    href?: string;
  }
}