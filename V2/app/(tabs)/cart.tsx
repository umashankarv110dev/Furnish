import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";

import { Ionicons } from "@expo/vector-icons";

import {
  useAppDispatch,
  useAppSelector,
} from "../../src/hooks/redux";

import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../../src/redux/cart/cartSlice";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector(
    state => state.cart.items
  );

  const subtotal = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  const delivery = subtotal > 0 ? 499 : 0;

  const gst = Math.round(subtotal * 0.05);

  const total =
    subtotal + delivery + gst;

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons
          name="cart-outline"
          size={90}
          color="#ccc"
        />

        <Text style={styles.emptyTitle}>
          Your Cart is Empty
        </Text>

        <Text style={styles.emptySubtitle}>
          Add products to continue shopping
        </Text>
      </View>
    );
  }

  return (
  <SafeAreaView
    style={{ flex: 1 }}
    edges={["top"]}
  >
    {/* Header */}
    <View style={styles.headerContainer}>
      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => router.back()}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color="#1F2937"
        />
      </TouchableOpacity>

      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>
          My Cart
        </Text>

        <Text style={styles.headerSubtitle}>
          {cartItems.length} Item
          {cartItems.length !== 1 ? "s" : ""}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.headerIcon}
        onPress={() => router.push("/wishlist")}
      >
        <Ionicons
          name="heart-outline"
          size={22}
          color="#1F2937"
        />
      </TouchableOpacity>
    </View>

    {/* Body */}
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 220, // Space for fixed summary
        }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
            />

            <View style={styles.details}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                ₹{item.price}
              </Text>

              <View style={styles.qtyRow}>
                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={styles.qtyButton}
                  onPress={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            <TouchableOpacity
              onPress={() =>
                dispatch(removeFromCart(item.id))
              }
            >
              <Ionicons
                name="trash-outline"
                size={24}
                color="red"
              />
            </TouchableOpacity>
          </View>
        )}
        
      />
      <View style={styles.summary}>
            <Text style={styles.summaryTitle}>
              Order Summary
            </Text>

            <View style={styles.row}>
              <Text>Subtotal</Text>
              <Text>₹{subtotal}</Text>
            </View>

            <View style={styles.row}>
              <Text>Delivery</Text>
              <Text>₹{delivery}</Text>
            </View>

            <View style={styles.row}>
              <Text>GST (5%)</Text>
              <Text>₹{gst}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.total}>
                Total
              </Text>

              <Text style={styles.total}>
                ₹{total}
              </Text>
            </View>

            <TouchableOpacity
              style={styles.checkoutButton}
              onPress={() =>
                router.push(
                  "/checkout/address"
                )
              }
            >
              <Text
                style={styles.checkoutText}
              >
                Proceed To Checkout
              </Text>
            </TouchableOpacity>
          </View>
    </View>
  </SafeAreaView>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
    padding: 16,
  },

headerContainer: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 20,
  paddingVertical: 15,
  backgroundColor: "#F8F6F2",
  borderBottomWidth: 1,
  borderBottomColor: "#ECECEC",
},

headerIcon: {
  width: 44,
  height: 44,
  borderRadius: 22,
  backgroundColor: "#FFF",
  justifyContent: "center",
  alignItems: "center",

  elevation: 3,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 5,
  shadowOffset: {
    width: 0,
    height: 2,
  },
},

headerCenter: {
  flex: 1,
  alignItems: "center",
},

headerTitle: {
  fontSize: 24,
  fontWeight: "700",
  color: "#1F2937",
},

headerSubtitle: {
  fontSize: 14,
  color: "#777",
  marginTop: 2,
},

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 16,
    marginBottom: 8,
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  details: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    fontSize: 18,
    color: "#8B5E3C",
    marginTop: 4,
    fontWeight: "700",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  qtyButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    marginHorizontal: 15,
    fontWeight: "700",
  },

  summary: {
  position: "absolute",
  left: 0,
  right: 0,
  bottom: 0,

  backgroundColor: "#FFFFFF",

  borderTopLeftRadius: 24,
  borderTopRightRadius: 24,

  padding: 20,

  elevation: 15,

  shadowColor: "#000",
  shadowOpacity: 0.15,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: -3,
  },
},

  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  total: {
    fontWeight: "700",
    fontSize: 18,
  },

  checkoutButton: {
    backgroundColor: "#8B5E3C",
    padding: 16,
    borderRadius: 12,
    marginTop: 15,
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyTitle: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "700",
  },

  emptySubtitle: {
    color: "#777",
    marginTop: 8,
  },
});