/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { ProductType } from "@/interfaces/product";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }: { product: ProductType }) => {
  return (
    <Link key={product.id} href={product.href} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2">
        {Array.isArray(product.imageSrc) ? (
          product.imageSrc.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={product.imageAlt}
              className="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          ))
        ) : (
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        )}
      </div>
      <div className="mt-4 flex items-center justify-between text-base font-medium text-gray-900">
        <h3>{product.name}</h3>
      </div>
      <p className="mt-1 text-sm italic text-gray-500">{product.description}</p>
    </Link>
  );
};

export default Product;
