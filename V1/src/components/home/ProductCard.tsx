import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { useAppDispatch } from "../../hooks/redux";
import { addToCart } from "../../redux/cart/cartSlice";

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
  isFavorite?: boolean;
}

interface Props {
  product: Product;
  onWishlist?: () => void;
}

export default function ProductCard({
  product,
  onWishlist,
}: Props) {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
        quantity: 1,
      })
    );

    console.log("Added to Cart");
  };

  const handleProductClick = () => {
    router.push({
      pathname: "/product/[id]",
      params: {
        id: product.id,
      },
    });
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={handleProductClick}
    >
      {/* Wishlist */}

      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={onWishlist}
      >
        <Ionicons
          name={
            product.isFavorite
              ? "heart"
              : "heart-outline"
          }
          size={22}
          color="#E53935"
        />
      </TouchableOpacity>

      {/* Product Image */}

      <Image
        source={product.image}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Discount */}

      <View style={styles.discountBadge}>
        <Text style={styles.discountText}>
          {product.discount}% OFF
        </Text>
      </View>

      {/* Name */}

      <Text
        style={styles.name}
        numberOfLines={2}
      >
        {product.name}
      </Text>

      {/* Rating */}

      <Text style={styles.rating}>
        ⭐ {product.rating} ({product.reviews} Reviews)
      </Text>

      {/* Price */}

      <View style={styles.priceRow}>
        <Text style={styles.price}>
          ₹{product.price}
        </Text>

        <Text style={styles.originalPrice}>
          ₹{product.originalPrice}
        </Text>
      </View>

      {/* Add To Cart */}

      <TouchableOpacity
        style={styles.cartButton}
        onPress={handleAddToCart}
      >
        <Ionicons
          name="cart-outline"
          size={18}
          color="#FFFFFF"
        />

        <Text style={styles.cartText}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 200,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 10,
    marginRight: 16,
    marginBottom: 10,
    elevation: 3,
  },

  favoriteButton: {
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 6,
    elevation: 2,
  },

  image: {
    width: "100%",
    height: 130,
    borderRadius: 12,
  },

  discountBadge: {
    marginTop: 8,
    alignSelf: "flex-start",
    backgroundColor: "#E8F5E9",
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },

  discountText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2E7D32",
  },

  name: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "700",
    color: "#1F2937",
  },

  rating: {
    marginTop: 4,
    fontSize: 13,
    color: "#6B7280",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#8B5E3C",
  },

  originalPrice: {
    marginLeft: 8,
    fontSize: 14,
    color: "#9CA3AF",
    textDecorationLine: "line-through",
  },

  cartButton: {
    marginTop: 12,
    backgroundColor: "#8B5E3C",
    borderRadius: 10,
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    marginLeft: 6,
    color: "#fff",
    fontWeight: "600",
  },
});