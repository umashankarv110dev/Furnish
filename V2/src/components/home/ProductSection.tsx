import React from "react";
import { FlatList } from "react-native";

import SectionTitle from "./SectionTitle";
import ProductCard from "./ProductCard";

import { products } from "../../data/products";

export default function ProductSection() {
  return (
    <>
      <SectionTitle
        title="Featured Products" />

      <FlatList
        horizontal
        data={products}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ProductCard product={item} />
        )}
      />
    </>
  );
}