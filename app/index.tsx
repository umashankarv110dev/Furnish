import React, { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";
import { router } from "expo-router";

import { getToken } from "../src/services/authStorage";

export default function Index() {
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    try {
      const token = await getToken();

      setTimeout(() => {
        if (token) {
          router.replace("/(tabs)/home");
        } else {
          router.replace("/onboarding");
        }
      }, 1500);
    } catch (error) {
      console.error("Error checking login:", error);
      router.replace("/onboarding");
    }
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#F8F6F2",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" color="#8B5E3C" />
    </View>
  );
}