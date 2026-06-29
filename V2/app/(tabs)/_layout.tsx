import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

import { useAppSelector } from "../../src/hooks/redux";

export default function TabLayout() {
  const cartCount = useAppSelector(
    state => state.cart.items.length
  );

  const wishlistCount = useAppSelector(
    state => state.wishlist.items.length
  );

  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#8B5E3C",

        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="grid-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",

          tabBarBadge:
            cartCount > 0
              ? cartCount
              : undefined,

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="cart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="wishlist"
        options={{
          title: "Wishlist",

          tabBarBadge:
            wishlistCount > 0
              ? wishlistCount
              : undefined,

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",

          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}