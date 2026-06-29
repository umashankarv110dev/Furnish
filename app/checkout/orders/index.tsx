import { useAppSelector } from "@/src/hooks/redux";
import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function OrdersScreen() {
  const orders =
    useAppSelector(
      state => state.orders.orders
    );

  if (orders.length === 0) {
    return (
      <View style={styles.empty}>
        <Text
          style={styles.emptyText}
        >
          No Orders Yet
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Orders
      </Text>

      <FlatList
        data={orders}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text
              style={
                styles.orderId
              }
            >
              Order #{item.id}
            </Text>

            <Text>
              Amount:
              {" "}
              ₹
              {item.totalAmount}
            </Text>

            <Text>
              Items:
              {" "}
              {item.totalItems}
            </Text>

            <Text>
              Date:
              {" "}
              {item.orderDate}
            </Text>

            <Text
              style={
                styles.status
              }
            >
              {item.status}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles =
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:
        "#F8F6F2",
      padding: 16,
    },

    title: {
      fontSize: 24,
      fontWeight: "700",
      marginBottom: 20,
    },

    card: {
      backgroundColor:
        "#fff",
      borderRadius: 16,
      padding: 16,
      marginBottom: 12,
    },

    orderId: {
      fontWeight: "700",
      marginBottom: 5,
    },

    status: {
      marginTop: 10,
      color: "#2E7D32",
      fontWeight: "700",
    },

    empty: {
      flex: 1,
      justifyContent:
        "center",
      alignItems: "center",
    },

    emptyText: {
      fontSize: 20,
      color: "#777",
    },
  });