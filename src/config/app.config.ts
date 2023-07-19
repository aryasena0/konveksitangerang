import type { StaticImageData } from "next/image";
import type { ProductType } from "@/interfaces/product";

import bomber1 from "@/assets/images/bomber/1.JPG";
import bomber2 from "@/assets/images/bomber/2.JPG";
import bomber3 from "@/assets/images/bomber/3.JPG";
import bomber4 from "@/assets/images/bomber/4.JPG";
import bomber5 from "@/assets/images/bomber/5.JPG";

import varsity1 from "@/assets/images/varsity/1.JPG";
import varsity2 from "@/assets/images/varsity/2.JPG";
import varsity3 from "@/assets/images/varsity/3.JPG";
import varsity4 from "@/assets/images/varsity/4.JPG";
import varsity5 from "@/assets/images/varsity/5.JPEG";

import pdl_pdh1 from "@/assets/images/pdl_pdh/1.JPG";
import pdl_pdh2 from "@/assets/images/pdl_pdh/2.JPG";
import pdl_pdh3 from "@/assets/images/pdl_pdh/3.JPG";
import pdl_pdh4 from "@/assets/images/pdl_pdh/4.JPG";
import pdl_pdh5 from "@/assets/images/pdl_pdh/5.JPG";
import pdl_pdh6 from "@/assets/images/pdl_pdh/6.JPG";
import pdl_pdh7 from "@/assets/images/pdl_pdh/7.JPG";

import almamater1 from "@/assets/images/almamater/1.JPG";
import almamater2 from "@/assets/images/almamater/2.JPG";
import { openWhatsapp } from "@/utils";

export const bomberImage = {
  1: bomber1 as string | StaticImageData,
  2: bomber2 as string | StaticImageData,
  3: bomber3 as string | StaticImageData,
  4: bomber4 as string | StaticImageData,
  5: bomber5 as string | StaticImageData,
};
export const varsityImage = {
  1: varsity1 as string | StaticImageData,
  2: varsity2 as string | StaticImageData,
  3: varsity3 as string | StaticImageData,
  4: varsity4 as string | StaticImageData,
  5: varsity5 as string | StaticImageData,
};
export const pdl_pdhImage = {
  1: pdl_pdh1 as string | StaticImageData,
  2: pdl_pdh2 as string | StaticImageData,
  3: pdl_pdh3 as string | StaticImageData,
  4: pdl_pdh4 as string | StaticImageData,
  5: pdl_pdh5 as string | StaticImageData,
  6: pdl_pdh6 as string | StaticImageData,
  7: pdl_pdh7 as string | StaticImageData,
};
export const almamaterImage = {
  1: almamater1 as string | StaticImageData,
  2: almamater2 as string | StaticImageData,
};

export const adminWhatsappNumber = "6282114875129";

export const navigation = {
  categories: [
    {
      id: "kategori",
      name: "Konveksitangerang.id",
      featured: [
        {
          name: "Featured",
          href: openWhatsapp("href", "Varsity"),
          imageSrc: varsity5 as string,
          imageAlt:
            "Drawstring top with elastic loop closure and textured interior padding.",
        },
        {
          name: "Featured",
          href: openWhatsapp("href", "Bomber"),
          imageSrc: bomber4 as string,
          imageAlt:
            "Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.",
        },
      ],
      sections: [
        {
          id: "products",
          name: "Products",
          items: [
            { name: "Varsity", href: "/catalog/varsity" },
            { name: "Almamater", href: "/catalog/almamater" },
            { name: "Bomber", href: "/catalog/bomber" },
            { name: "PDL / PDH", href: "/catalog/pdl_pdh" },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: "Home", href: "/" },
    { name: "Catalog", href: "/catalog" },
  ],
};
export const favorites = [
  {
    id: 1,
    name: "Black Basic Tee",
    price: "$32",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-01.jpg",
    imageAlt: "Model wearing women's black cotton crewneck tee.",
  },
  {
    id: 2,
    name: "Off-White Basic Tee",
    price: "$32",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-02.jpg",
    imageAlt: "Model wearing women's off-white cotton crewneck tee.",
  },
  {
    id: 3,
    name: "Mountains Artwork Tee",
    price: "$36",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-03-favorite-03.jpg",
    imageAlt:
      "Model wearing women's burgundy red crewneck artwork tee with small white triangle overlapping larger black triangle.",
  },
];
export const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export const products = [
  {
    id: 1,
    name: "Varsity",
    href: "/catalog/varsity",
    price: "$13",
    description: "3 sizes available",
    imageSrc: varsity1 as string,
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 2,
    name: "Almamater",
    href: "/catalog/almamater",
    price: "$64",
    description: "Walnut",
    imageSrc: almamater1 as string,
    imageAlt: "Paper card sitting upright in walnut card holder on desk.",
  },
  {
    id: 3,
    name: "PDL/PDH",
    href: "/catalog/pdl_pdh",
    price: "$32",
    description: "Heather Gray",
    imageSrc: pdl_pdh2 as string,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  {
    id: 4,
    name: "Bomber",
    href: "/catalog/bomber",
    price: "$32",
    description: "Heather Gray",
    imageSrc: bomber1 as string,
    imageAlt:
      "Textured gray felt pouch for paper cards with snap button flap and elastic pen holder loop.",
  },
  // More products...
];

export const mapsUrl =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.3704179094943!2d106.55851439911245!3d-6.1671074482174255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ffbf9c7389f9%3A0x8d8d13a4c04507d6!2sJl.%20Aster%204%20AG%20No.5%2C%20Gelam%20Jaya%2C%20Kec.%20Ps.%20Kemis%2C%20Kabupaten%20Tangerang%2C%20Banten%2015560!5e0!3m2!1sen!2sid!4v1688991129120!5m2!1sen!2sid";

export const catalogsDetailData: ProductType[] = [
  {
    id: 1,
    type: "varsity",
    name: "Varsity",
    description: `Varsitty jaket,  adalah salah satu jenis jaket yang sedang trand saat ini.
      Jenis jaket yang berbahan lembut lembut seperti fleece atau buddy terry dan dapat di kombinasikan 
      Dengan bahan leather ini  sering di sebut juga sebagai jaket baseball .
      Varsity jacket juga identik dengan variasi warna yang mencolok di tambah dengan Bordir yang ktia berikan Free 4 titik. Dengan gambar yang bebas sesuai keretifitas kalian,
      Adapun variasi lain seperti bahan dalam jaket yang di gunakan Furing`,
    imageSrc: [varsity1, varsity2, varsity3, varsity4, varsity5],
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    href: "/catalog/varsity",
  },
  {
    id: 2,
    type: "bomber",
    name: "Jaket Bomber",
    description: `Bomber jacket jenis jaket yang satu ini sering di incar oleh para pecinta fashion, 
        Jenis jaket yang identik dengan model gemuk atau bulky, dengan tambahan resleting di bagian depan 
        Yang memudahkan untuk di pakai dan di lepaskan. 
        Fakta menarik jaket bomber merupakan jaket yang di gunakan militer amerika serikat pada perang dunia pertama. Seiring perkembangan jaman jaket bomber kini sering di gunakan dan di adaptasi dengan pakaian casuak. 
        Adapun bahan yang sering digunakan adalah jenis bahan Taslan`,
    imageSrc: [bomber1, bomber2, bomber3, bomber4, bomber5],
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    href: "/catalog/bomber",
  },
  {
    id: 3,
    type: "pdl_pdh",
    name: "PDL/PDH",
    description: `PDH/PDL merupakan jenis pakaian yang sering di gunakan saat melakukan dinas/tugas 
      Sesuai lokasi, PDH( Pakaian dinas haria) sering di gunakan saat acara sehari-hari  di dalam ruangan adapun PDL(Pakaian Dinas Lapangan) di gunakan saat acara di luar/outdoor  . jenis bahan yang sering di gunakan berbahan Drill.  Adapun jenis bahan yang sering di gunakan antara lain American drill/Japan drill`,
    imageSrc: [
      pdl_pdh1,
      pdl_pdh2,
      pdl_pdh3,
      pdl_pdh4,
      pdl_pdh5,
      pdl_pdh6,
      pdl_pdh7,
    ],
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    href: "/catalog/bomber",
  },
  {
    id: 4,
    type: "almamater",
    name: "Almamater",
    description: `Almamater jaket, jenis jaket yang sering di temui di organisasi, Seragam yang satu ini merupakan jenis seragam yang sering di gunakan dalam organisasi lingkungan sekolah maupun kampus, 
       Dengan berbahan dasar Drill, adapun  jenis bahan yang sering di gunakan antara lain  American drill maupun japan drill. `,
    imageSrc: [almamater1, almamater2],
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    href: "/catalog/bomber",
  },
];
