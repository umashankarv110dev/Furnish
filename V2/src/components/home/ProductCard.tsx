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

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addToCart } from "../../redux/cart/cartSlice";
import { toggleWishlist } from "../../redux/wishlist/wishlistSlice";

interface Product {
  id: string;
  name: string;
  image: any;
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  discount: number;
}

interface Props {
  product: Product;
}

export default function ProductCard({
  product,
}: Props) {
  const dispatch = useAppDispatch();

  const wishlistItems = useAppSelector(
    state => state.wishlist.items
  );

  const isFavorite = wishlistItems.some(
    item => item.id === product.id
  );

  const handleWishlist = () => {
    dispatch(
      toggleWishlist({
        id: product.id,
        name: product.name,
        image: product.image,
        price: product.price,
      })
    );
  };

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
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleWishlist}
      >
        <Ionicons
          name={
            isFavorite
              ? "heart"
              : "heart-outline"
          }
          size={22}
          color="#E53935"
        />
      </TouchableOpacity>

      <Image
        source={product.image}
        style={styles.image}
        resizeMode="contain"
      />
      
      <Text style={styles.rating}>
        ⭐ {product.rating} ({product.reviews} Reviews)
      </Text>

        <Text
          style={styles.name}
          numberOfLines={2}
        >
        {product.name}
      </Text>

      <View>
        <Text style={styles.originalPrice}>
          ₹{product.originalPrice}
        </Text>
      </View>

      <View style={styles.priceRow}>
        <Text style={styles.price}>
          ₹{product.price}
        </Text>
        
        <View style={styles.discountBadge}>
          <Text style={styles.discountText}>
            {product.discount}% OFF
          </Text>
        </View>
      </View>


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
    elevation: 3,
    marginBottom: 10,
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
    height: 180,
    borderRadius: 12,
  },

  discountBadge: {
    marginLeft: 8,
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

  // rating: {
  //   marginTop: 4,
  //   fontSize: 13,
  //   color: "#6B7280",
  // },

  
  rating: {
    position: "absolute",
    bottom: 145,
    left: 18,
    zIndex: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 2,
    elevation: 2,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: "700",
    color: "#8B5E3C",
  },

  originalPrice: {
    fontSize: 16,
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