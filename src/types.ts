import { ReactNode } from "react";

export interface Product {
  priceFormatted: ReactNode;
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export interface Stock {
  id: number;
  amount: number;
}
