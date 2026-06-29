import React, { useState } from "react";
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import ProductCard from "../../src/components/home/ProductCardDemo";
import { products } from "../../src/data/products";
import { categories } from "../../src/data/categories";

export default function CategoriesScreen() {
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (item) =>
            item.category === selectedCategory
        );

  return (
    <SafeAreaView style={styles.safeContainer}>
      {/* Header */}

      <View style={styles.header}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.back()}
        >
          <Ionicons
            name="chevron-back"
            size={22}
            color="#222"
          />
        </TouchableOpacity>

        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={styles.title}>
            Categories
          </Text>

          <Text style={styles.subtitle}>
            {filteredProducts.length} Products
          </Text>
        </View>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            router.push("/wishlist")
          }
        >
          <Ionicons
            name="heart-outline"
            size={22}
            color="#222"
          />
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <FlatList
        horizontal
        data={[{ id: "0", name: "All" }, ...categories]}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingVertical: 1,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedCategory(item.name)}
            style={[
              styles.categoryButton,
              selectedCategory === item.name &&
                styles.selectedCategory,
            ]}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.categoryText,
                selectedCategory === item.name &&
                  styles.selectedText,
              ]}
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Products */}

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingBottom: 30,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Ionicons
              name="cube-outline"
              size={70}
              color="#999"
            />

            <Text style={styles.emptyTitle}>
              No Products Found
            </Text>

            <Text style={styles.emptySubtitle}>
              Try another category.
            </Text>
          </View>
        )}
        renderItem={({ item }) => (
            <View style={{ flex: 1, marginHorizontal: 6 }}>
                <ProductCard product={item} />
            </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: "#F8F6F2",
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingVertical: 15,
  },

  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },

  title: {
    fontSize: 25,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 2,
    color: "#888",
    fontSize: 14,
  },

  categoryButton: {
    minWidth: 90,
    height: 40,
    paddingHorizontal: 18,
    marginRight: 10,
    marginBottom: 20,

    backgroundColor: "#FFFFFF",
    borderRadius: 22,

    justifyContent: "center",
    alignItems: "center",

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  selectedCategory: {
    backgroundColor: "#8B5E3C",
  },

  categoryText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#333",
    textAlign: "center",
    includeFontPadding: false, // Android
    textAlignVertical: "center", // Android
  },

  selectedText: {
    color: "#FFF",
  },

  cardWrapper: {
    width: "48%",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },

  emptyTitle: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "700",
    color: "#222",
  },

  emptySubtitle: {
    marginTop: 6,
    color: "#888",
  },
});