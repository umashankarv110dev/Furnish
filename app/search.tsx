import React, { useState } from "react";
import {
  View,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";

import ProductCard from "../src/components/home/ProductCard";
import { products } from "../src/data/products";

export default function SearchScreen() {
  const [search, setSearch] = useState("");

  const filteredProducts =
    products.filter(product =>
      product.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Furniture..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#F8F6F2",
  },

  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
});