import { useLocalSearchParams, router } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { products } from "../../src/data/products";

import { useAppDispatch } from "../../src/hooks/redux";
import { addToCart } from "../../src/redux/cart/cartSlice";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductDetails() {
  const { id } = useLocalSearchParams();

  const dispatch = useAppDispatch();

  const product = products.find(
    (item) => item.id === id
  );

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product Not Found</Text>
      </View>
    );
  }

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
    <SafeAreaView style={styles.safecontainer}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => router.back()}
          >
            <Ionicons
              name="arrow-back"
              size={28}
            />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons
              name="heart-outline"
              size={28}
            />
          </TouchableOpacity>
        </View>

        {/* Product Image */}

        <Image
          source={product.image}
          style={styles.image}
          resizeMode="stretch"
        />

        {/* Details */}

        <View style={styles.details}>
          <Text style={styles.name}>
            {product.name}
          </Text>

          <Text style={styles.rating}>
            ⭐ {product.rating} ({product.reviews} Reviews)
          </Text>

          <View style={styles.priceRow}>
            <Text style={styles.price}>
              ₹{product.price}
            </Text>

            <Text
              style={styles.originalPrice}
            >
              ₹{product.originalPrice}
            </Text>
          </View>

          <View style={styles.discountBadge}>
            <Text
              style={styles.discountText}
            >
              {product.discount}% OFF
            </Text>
          </View>

          <Text style={styles.sectionTitle}>
            Description
          </Text>

          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>

        {/* Buttons */}

        <View style={styles.bottomButtons}>
          <TouchableOpacity
            style={styles.cartButton}
            onPress={handleAddToCart}
          >
            <Text style={styles.buttonText}>
              Add to Cart
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buyButton}
          >
            <Text style={styles.buttonText}>
              Buy Now
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  safecontainer: {
    flex: 1,
    backgroundColor: "#7b6436",
  },

  container: {
    flex: 1,
    backgroundColor: "#fee6b5",
  },

  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  header: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    
  },

  image: {
  width: "100%",
  height: 300,
  },

  details: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20,
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
  },

  rating: {
    marginTop: 8,
    color: "#6B7280",
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 12,
  },

  price: {
    fontSize: 28,
    fontWeight: "700",
    color: "#8B5E3C",
  },

  originalPrice: {
    marginLeft: 10,
    textDecorationLine: "line-through",
    color: "#9CA3AF",
  },

  discountBadge: {
    marginTop: 12,
    backgroundColor: "#E8F5E9",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },

  discountText: {
    color: "#2E7D32",
    fontWeight: "700",
  },

  sectionTitle: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "700",
  },

  description: {
    marginTop: 10,
    color: "#6B7280",
    lineHeight: 22,
  },

  bottomButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },

  cartButton: {
    flex: 1,
    backgroundColor: "#8B5E3C",
    padding: 15,
    borderRadius: 12,
    marginRight: 10,
    alignItems: "center",
  },

  buyButton: {
    flex: 1,
    backgroundColor: "#2E7D32",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});