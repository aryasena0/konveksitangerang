import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type ProductType = {
  id: number | string;
  type?: string;
  name: string;
  href: string;
  description: string;
  imageSrc: any;
  imageAlt: string;
};
