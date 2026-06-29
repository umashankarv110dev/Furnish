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
import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";


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
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
      behavior={
        Platform.OS === "ios"
          ? "padding"
          : undefined
      }
      style={{ flex: 1 }}
    >
      {/* Back */}

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

      {/* Header */}

      <View style={styles.header}>
        <View style={styles.iconCircle}>
          <Ionicons
            name="shield-checkmark"
            size={45}
            color="#8B5E3C"
          />
        </View>

        <Text style={styles.title}>
          OTP Verification
        </Text>

        <Text style={styles.subtitle}>
          Enter the verification code sent to
        </Text>

        <View style={styles.mobileCard}>
          <Ionicons
            name="call"
            size={18}
            color="#8B5E3C"
          />

          <Text style={styles.mobile}>
            +91 {mobile}
          </Text>
        </View>
      </View>

      {/* OTP Card */}

      <View style={styles.card}>
        <Text style={styles.label}>
          Enter OTP
        </Text>

        <TextInput
          placeholder="____"
          keyboardType="number-pad"
          maxLength={4}
          value={otp}
          onChangeText={setOtp}
          style={styles.input}
          textAlign="center"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={verifyOTP}
        >
          <Text style={styles.buttonText}>
            Verify OTP
          </Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
    paddingHorizontal: 25,
  },

  backButton: {
    width: 45,
    height: 45,
    borderRadius: 22,
    backgroundColor: "#FFF",

    justifyContent: "center",
    alignItems: "center",

    marginTop: 15,

    elevation: 3,
  },

  header: {
    alignItems: "center",
    marginTop: 15,
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#F5EFE8",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    marginTop: 15,
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
  },

  subtitle: {
    marginTop: 10,
    color: "#777",
    textAlign: "center",
    fontSize: 16,
  },

  mobileCard: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#FFF",
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 30,
  },

  mobile: {
    marginLeft: 8,
    fontWeight: "700",
    color: "#8B5E3C",
    fontSize: 16,
  },

  card: {
    marginTop: 20,
    backgroundColor: "#FFF",
    borderRadius: 22,
    padding: 24,

    elevation: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 10,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DDD",
    borderRadius: 14,
    fontSize: 28,
    fontWeight: "700",
    letterSpacing: 15,
    paddingVertical: 14,
  },

  button: {
    marginTop: 25,
    backgroundColor: "#8B5E3C",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "700",
    fontSize: 17,
  },

  demoCard: {
    marginTop: 30,
    backgroundColor: "#F5EFE8",
    borderRadius: 14,
    padding: 16,
    alignItems: "center",
  },

  demoTitle: {
    color: "#777",
    fontSize: 14,
  },

  demoOtp: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: "700",
    color: "#8B5E3C",
    letterSpacing: 6,
  },
});