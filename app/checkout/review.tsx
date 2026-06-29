import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";
import { router } from "expo-router";

import {
  useAppDispatch,
  useAppSelector,
} from "../../src/hooks/redux";

import { addOrder } from "../../src/redux/orders/orderSlice";

import { clearCart } from "../../src/redux/cart/cartSlice";

export default function ReviewScreen() {
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

  const handlePlaceOrder = () => {
    dispatch(
      addOrder({
        id: Date.now().toString(),
        totalAmount: total,
        totalItems: cartItems.length,
        status: "Pending",
        orderDate:
          new Date().toLocaleDateString(),
      })
    );

    dispatch(clearCart());

    router.replace("/checkout/success");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Review Order
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        style={{ maxHeight: 350 }}
        renderItem={({ item }) => (
          <View style={styles.itemCard}>
            <Image
              source={item.image}
              style={styles.image}
            />

            <View style={styles.info}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                ₹{item.price}
              </Text>

              <Text style={styles.qty}>
                Qty: {item.quantity}
              </Text>
            </View>
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

        <View style={styles.divider} />

        <View style={styles.row}>
          <Text style={styles.total}>
            Total
          </Text>

          <Text style={styles.total}>
            ₹{total}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handlePlaceOrder}
      >
        <Text style={styles.btnText}>
          Place Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  itemCard: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
  },

  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    marginTop: 5,
    color: "#8B5E3C",
    fontWeight: "700",
  },

  qty: {
    marginTop: 5,
    color: "#777",
  },

  summary: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    marginTop: 15,
  },

  summaryTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  divider: {
    height: 1,
    backgroundColor: "#E5E7EB",
    marginVertical: 10,
  },

  total: {
    fontSize: 18,
    fontWeight: "700",
  },

  button: {
    backgroundColor: "#2E7D32",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 16,
  },
});