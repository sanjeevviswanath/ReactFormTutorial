import React, { useEffect, useState } from "react";

const ProductList = ({ selectedCategory }: { selectedCategory: String }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Fetching products from DB....");
    setProducts(["Clothing", "Household"]);
  }, [selectedCategory]);

  return <div>ProductList</div>;
};

export default ProductList;
