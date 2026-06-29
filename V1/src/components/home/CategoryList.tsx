import React from "react";
import { FlatList } from "react-native";

import SectionTitle from "./SectionTitle";
import CategoryCard from "./CategoryCard";

import { categories } from "../../data/categories";

export default function CategorySection() {
  return (
    <>
      <SectionTitle
        title="Categories"
      />

      <FlatList
        horizontal
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <CategoryCard
            item={item}
            onPress={() => {
              console.log(item.name);
            }}
          />
        )}
      />
    </>
  );
}