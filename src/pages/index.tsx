// import { signIn, signOut, useSession } from "next-auth/react";
import PageSEO from "@/components/PageSEO";
import Head from "next/head";
import React from "react";
import {
  almamaterImage,
  bomberImage,
  mapsUrl,
  pdl_pdhImage,
  varsityImage,
} from "@/config/app.config";
import Image from "next/image";
import ProductFeature from "@/components/Product/ProductFeature";
import Link from "next/link";
import Maps from "@/components/Maps";
import BaseLayout from "@/layouts/BaseLayout";

export default function Home() {
  return (
    <React.Fragment>
      <PageSEO />
      <Head>
        <title>Konveksi Tangerang.id</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <header className="relative overflow-hidden">
          {/* Hero section */}
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
            <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
              <div className="sm:max-w-lg">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                  Konveksi Tangerang.id
                </h1>
                <p className="mt-4 text-xl text-gray-500">
                  Tim kami siap membantu komunitas atau organisasi anda tampil
                  menawan dan berbeda dari yang lain. Dapatkan pakaian custom
                  terbaik untuk gaya yang lebih bersinar, Karena di Konveksi
                  Tangerang, kualitas dan kepuasan Anda yang terdepan.
                </p>
              </div>
              <div>
                <div className="mt-10">
                  {/* Decorative image grid */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                  >
                    <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                      <div className="flex items-center space-x-6 lg:space-x-8">
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                            <Image
                              // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                              src={varsityImage[1]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src={pdl_pdhImage[2]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src={pdl_pdhImage[4]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src={bomberImage[2]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src={almamaterImage[1]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                        <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src={almamaterImage[2]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                          <div className="h-64 w-44 overflow-hidden rounded-lg">
                            <Image
                              src={varsityImage[2]}
                              alt="KONVEKSI TANGERANG - "
                              className="h-full w-full object-cover object-center"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href="/catalog"
                      className="inline-block rounded-md border border-transparent bg-black px-8 py-3 text-center font-medium text-white hover:bg-zinc-700"
                    >
                      Our Catalog
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <ProductFeature />
        <Maps url={mapsUrl} width="100%" height="400" />
      </BaseLayout>
    </React.Fragment>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
