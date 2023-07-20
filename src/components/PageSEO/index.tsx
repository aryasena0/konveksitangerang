import { NextSeo } from "next-seo";
import React from "react";

const PageSEO = () => {
  return (
    <NextSeo
      title="Konveksi Tangerang"
      description="Custom jaket varsity, almamater, pdl/pdh, bomber"
      // canonical="https://www.canonical.ie/"
      openGraph={{
        url: "https://konveksitangerang.vercel.app",
        title: "Konveksi Tangerang",
        description: "Custom jaket varsity, almamater, pdl/pdh, bomber",
        images: [
          {
            url: "https://instagram.fcgk27-2.fna.fbcdn.net/v/t51.2885-19/278334045_535364798172631_969471741201856955_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgk27-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HN9nTY97QU0AX-A9_0R&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB4qCOpzAbzDAE66a6_sJX9D1YvaAKmM5iK4XYU8WTSWw&oe=64BD0B6A&_nc_sid=8b3546",
            width: 800,
            height: 600,
            alt: "Konveksi tangerang",
            type: "image/jpeg",
          },
          {
            url: "https://instagram.fcgk27-2.fna.fbcdn.net/v/t51.2885-19/278334045_535364798172631_969471741201856955_n.jpg?stp=dst-jpg_s320x320&_nc_ht=instagram.fcgk27-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HN9nTY97QU0AX-A9_0R&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfB4qCOpzAbzDAE66a6_sJX9D1YvaAKmM5iK4XYU8WTSWw&oe=64BD0B6A&_nc_sid=8b3546",
            width: 900,
            height: 800,
            alt: "Konveksi tangerang",
            type: "image/jpeg",
          },
          { url: "https://www.example.ie/og-image-03.jpg" },
          { url: "https://www.example.ie/og-image-04.jpg" },
        ],
        siteName: "Konveksi tangerang",
      }}
      // twitter={{
      //   handle: "@handle",
      //   site: "@site",
      //   cardType: "summary_large_image",
      // }}
    />
  );
};

export default PageSEO;
