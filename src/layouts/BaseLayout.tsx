import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { clsxm } from "@/utils/strings";
import React from "react";

type Props = {
  children: React.ReactNode;
  childClasses?: string;
};

const BaseLayout = ({ children, childClasses }: Props) => {
  return (
    <React.Fragment>
      <Navbar />
      <main
        className={clsxm(
          "mx-auto w-full px-3 md:max-w-2xl md:px-6 lg:max-w-7xl lg:px-0",
          childClasses ? childClasses : ""
        )}
      >
        {children}
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default BaseLayout;
