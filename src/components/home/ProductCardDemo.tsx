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

import {
  useAppDispatch,
  useAppSelector,
} from "../../hooks/redux";

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

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/product/[id]",
          params: {
            id: product.id,
          },
        })
      }
    >
      {/* Wishlist */}

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

      {/* Product Image */}

      <Image
        source={product.image}
        style={styles.image}
        resizeMode="cover"
      />

      {/* Rating */}

      <View style={styles.ratingBadge}>
        <Ionicons
          name="star"
          size={14}
          color="#FFC107"
        />

        <Text style={styles.ratingText}>
          {product.rating} ({product.reviews})
        </Text>
      </View>

      {/* Content */}

      <View style={styles.content}>
        <Text
          numberOfLines={1}
          style={styles.name}>
          {product.name}
        </Text>

        <Text style={styles.originalPrice}>
          ₹{product.originalPrice}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>
            ₹{product.price}
          </Text>

          <View style={styles.discountBadge}>
            <Text
              style={styles.discountText}
            >
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
            color="#FFF"
          />

          <Text style={styles.cartText}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    overflow: "hidden",
    marginBottom: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },

  image: {
    width: "100%",
    height: 150,
  },

  favoriteButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    elevation: 4,
  },

  ratingBadge: {
    position: "absolute",
    left: 6,
    top: 120,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    elevation: 4,
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    fontWeight: "600",
    color: "#333",
  },

  content: {
    padding: 12,
  },

  name: {
    fontSize: 15,
    fontWeight: "700",
    color: "#222",
    lineHeight: 22,
    minHeight: 10,
  },

  originalPrice: {
    marginTop: 2,
    fontSize: 14,
    color: "#999",
    textDecorationLine: "line-through",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  price: {
    fontSize: 20,
    fontWeight: "700",
    color: "#8B5E3C",
  },

  discountBadge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },

  discountText: {
    color: "#2E7D32",
    fontWeight: "700",
    fontSize: 11,
  },

  cartButton: {
    marginTop: 5,
    backgroundColor: "#8B5E3C",
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  cartText: {
    marginLeft: 6,
    color: "#FFF",
    fontWeight: "700",
    fontSize: 15,
  },
});