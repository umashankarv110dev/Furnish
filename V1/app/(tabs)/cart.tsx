import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";

import { useAppSelector } from "../../src/hooks/redux";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CartScreen() {
  const cartItems = useAppSelector(
    (state) => state.cart.items
  );

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Shopping Cart
        </Text>

        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          ListEmptyComponent={
            <Text style={styles.emptyText}>
              Cart is Empty
            </Text>
          }
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image
                source={item.image}
                style={styles.image}
              />

              <View style={{ flex: 1 }}>
                <Text style={styles.name}>
                  {item.name}
                </Text>

                <Text style={styles.price}>
                  ₹ {item.price}
                </Text>

                <Text style={styles.qty}>
                  Quantity: {item.quantity}
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  safecontainer: {
    flex: 1,
    backgroundColor: "#004266",
  },
  
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

  emptyText: {
    textAlign: "center",
    marginTop: 80,
    fontSize: 18,
    color: "gray",
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },

  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    marginRight: 12,
  },

  name: {
    fontSize: 18,
    fontWeight: "600",
  },

  price: {
    marginTop: 5,
    color: "#8B5E3C",
    fontWeight: "700",
    fontSize: 16,
  },

  qty: {
    marginTop: 5,
    color: "#555",
  },
});