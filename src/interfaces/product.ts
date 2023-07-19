import { StaticImageData } from "next/image";

export type ProductType = {
  id: number | string;
  type?: string;
  name: string;
  href: string;
  description: string;
  imageSrc: string | string[] | StaticImageData | StaticImageData[];
  imageAlt: string;
};
