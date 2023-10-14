import React, { useEffect, useState } from "react";

const ProductList = ({ selectedCategory }: { selectedCategory: String }) => {
  const [products, setProducts] = useState<string[]>([]);

  useEffect(() => {
    console.log("Connecting to DB");
    console.log("Fetching products from DB where Category= ", selectedCategory);
    setProducts(["Clothing", "Household"]);
    return console.log("Disconnecting DB connection");
  }, [selectedCategory]);

  return <div>ProductList</div>;
};

export default ProductList;
