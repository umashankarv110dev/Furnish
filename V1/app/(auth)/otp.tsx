import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OtpScreen() {
  const { mobile } = useLocalSearchParams();

  const [otp, setOtp] = useState("");

  const verifyOTP = async () => {
    if (otp === "1234") {
      await AsyncStorage.setItem(
        "AUTH_TOKEN",
        "demo_token_123456"
      );

      await AsyncStorage.setItem(
        "USER_DATA",
        JSON.stringify({
          id: 1,
          name: "Demo User",
          mobile,
          email: "demo@furnish.com",
        })
      );

      router.replace("/(tabs)/home");
    } else {
      Alert.alert(
        "Invalid OTP",
        "Use demo OTP: 1234"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>OTP Verification</Text>

      <Text style={styles.subtitle}>
        Mobile: {mobile}
      </Text>

      <TextInput
        placeholder="Enter OTP"
        keyboardType="number-pad"
        maxLength={4}
        value={otp}
        onChangeText={setOtp}
        style={styles.input}
      />

      <Text style={styles.button} onPress={verifyOTP}>
        Verify OTP
      </Text>

      <Text style={{ marginTop: 25 }}>
        Demo OTP: 1234
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
  },
  subtitle: {
    marginTop: 10,
    marginBottom: 25,
    color: "#666",
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 15,
  },
  button: {
    backgroundColor: "#8B5E3C",
    color: "#fff",
    textAlign: "center",
    padding: 16,
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "600",
  },
});