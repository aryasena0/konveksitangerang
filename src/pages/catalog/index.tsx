import ProductList from "@/components/Product/ProductList";
import { products } from "@/config/app.config";
import BaseLayout from "@/layouts/BaseLayout";
import React from "react";

const CatalogPage = () => {
  return (
    <BaseLayout childClasses="mt-4">
      <ProductList products={products} />
    </BaseLayout>
  );
};

export default CatalogPage;
