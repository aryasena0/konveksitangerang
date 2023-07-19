/* eslint-disable @typescript-eslint/no-explicit-any */

export type ProductType = {
  id: number | string;
  type?: string;
  name: string;
  href: string;
  description: string;
  imageSrc: any;
  imageAlt: string;
};
