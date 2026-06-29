import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";

import {
  useAppDispatch,
  useAppSelector,
} from "../../src/hooks/redux";

import {
  addAddress,
  removeAddress,
} from "../../src/redux/address/addressSlice";

export default function AddressesScreen() {
  const dispatch = useAppDispatch();

  const addresses = useAppSelector(
    state => state.address.addresses
  );

  const [address, setAddress] =
    useState("");

  const handleAddAddress = () => {
    if (!address.trim()) return;

    dispatch(
      addAddress({
        id: Date.now().toString(),
        address,
      })
    );

    setAddress("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Saved Addresses
      </Text>

      <TextInput
        placeholder="Enter Address"
        value={address}
        onChangeText={setAddress}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAddAddress}
      >
        <Text style={styles.buttonText}>
          Add Address
        </Text>
      </TouchableOpacity>

      <FlatList
        data={addresses}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text
              style={styles.addressText}
            >
              {item.address}
            </Text>

            <TouchableOpacity
              onPress={() =>
                dispatch(
                  removeAddress(
                    item.id
                  )
                )
              }
            >
              <Text
                style={
                  styles.deleteText
                }
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
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

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: "#8B5E3C",
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },

  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  addressText: {
    flex: 1,
    color: "#333",
  },

  deleteText: {
    color: "red",
    fontWeight: "600",
  },
});