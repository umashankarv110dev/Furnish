import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import {
  useAppDispatch,
  useAppSelector,
} from "../../src/hooks/redux";

import {
  removeWishlist,
} from "../../src/redux/wishlist/wishlistSlice";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function WishlistScreen() {
  const dispatch = useAppDispatch();

  const wishlistItems =
    useAppSelector(
      state => state.wishlist.items
    );

  if (wishlistItems.length === 0) {
    return (

              <View style={styles.emptyContainer}>
                <Ionicons
                  name="heart-outline"
                  size={90}
                  color="#ccc"
                />

                <Text style={styles.emptyTitle}>
                  Wishlist Empty
                </Text>

                <Text style={styles.emptySub}>
                  Save products for later
                </Text>
              </View>


    );
  }

  return (
    <SafeAreaView style={styles.safecontainer}>
      {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons
              name="chevron-back"
              size={24}
              color="#222"
            />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text style={styles.headerTitle}>
              My Wishlist
            </Text>

            <Text style={styles.headerSubtitle}>
              {wishlistItems.length} Items Saved
            </Text>
          </View>
        </View>

        <View style={styles.container}>
          <FlatList
            data={wishlistItems}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
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
                </View>

                <TouchableOpacity
                  onPress={() =>
                    dispatch(
                      removeWishlist(
                        item.id
                      )
                    )
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
        </View>
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
    padding: 8,
    backgroundColor: "#F8F6F2",
  },

  // header: {
  //   fontSize: 24,
  //   fontWeight: "700",
  //   marginBottom: 20,
  // },

  header: {
    marginHorizontal: 20,
    flexDirection: "row",
    paddingVertical: 10,
    
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#FFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },


  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#fff",
  },

  headerSubtitle: {
    marginTop: 2,
    fontSize: 14,
    color: "#fff",
  },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: "center",
  },

  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  info: {
    flex: 1,
    marginLeft: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
  },

  price: {
    marginTop: 5,
    color: "#8B5E3C",
    fontSize: 18,
    fontWeight: "700",
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  emptyTitle: {
    marginTop: 15,
    fontSize: 24,
    fontWeight: "700",
  },

  emptySub: {
    marginTop: 8,
    color: "#777",
  },
});