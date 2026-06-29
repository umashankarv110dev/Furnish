import { ActivityIndicator, View } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

import { getToken } from "../src/services/authStorage";

export default function SplashScreen() {
  useEffect(() => {
    checkLogin();
  }, []);

  const checkLogin = async () => {
    const token = await getToken();

    setTimeout(() => {
      if (token) {
        router.replace("/(tabs)/home");
      } else {
        router.replace("/onboarding");
      }
    }, 1500);
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