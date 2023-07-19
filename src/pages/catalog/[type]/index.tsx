/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import type { ProductType } from "@/interfaces/product";
import { catalogsDetailData } from "@/config/app.config";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import BaseLayout from "@/layouts/BaseLayout";
import { CheckIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { openWhatsapp } from "@/utils";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CatalogDetailPage = () => {
  const [selectedProduct, setSelectedProduct] = React.useState<
    ProductType | undefined
  >(undefined);
  const { query } = useRouter();

  useEffect(() => {
    const selected = catalogsDetailData.find(
      (item) => item.type === query.type
    );
    setSelectedProduct(selected);
  }, [query]);

  return (
    <BaseLayout childClasses="mt-4">
      {selectedProduct ? (
        <div className="bg-white">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
            {/* Product details */}
            <div className="lg:max-w-lg lg:self-end">
              <nav aria-label="Breadcrumb">
                <ol role="list" className="flex items-center space-x-2">
                  <li key={selectedProduct.id}>
                    <div className="flex items-center text-sm">
                      <Link
                        href="/catalog"
                        className="flex items-center space-x-2 font-medium text-gray-500 hover:text-gray-900"
                      >
                        <ArrowLeftIcon
                          className="h-4 w-4 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        <span>Kembali</span>
                      </Link>
                      {/* {selectedProduct !== selectedProduct.length - 1 ? (
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                          className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                        >
                          <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                        </svg>
                      ) : null} */}
                    </div>
                  </li>
                </ol>
              </nav>

              <div className="mt-4">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {selectedProduct.name}
                </h1>
              </div>

              <section aria-labelledby="information-heading" className="mt-4">
                <h2 id="information-heading" className="sr-only">
                  Product information
                </h2>

                <div className="mt-4 space-y-6">
                  <p className="text-base text-gray-500">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">
                    Quality guaranteed
                  </p>
                </div>
              </section>
            </div>

            {/* Product image */}
            <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
              <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg">
                <Image
                  src={selectedProduct.imageSrc[0] as string}
                  alt={selectedProduct.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Product form */}
            <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
              <section aria-labelledby="options-heading">
                <h2 id="options-heading" className="sr-only">
                  Product options
                </h2>

                <form>
                  <div className="mt-10">
                    <button
                      onClick={() => openWhatsapp("", selectedProduct.name)}
                      type="submit"
                      className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                    >
                      Contact
                    </button>
                  </div>
                </form>
              </section>
            </div>
          </div>
        </div>
      ) : (
        "wait"
      )}
    </BaseLayout>
  );
};

export default CatalogDetailPage;
