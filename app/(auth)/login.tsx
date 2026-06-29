import { View, Text, TextInput, StyleSheet, Alert, Image } from "react-native";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  SafeAreaView,
} from "react-native-safe-area-context";

import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

const loginSchema = z.object({
  mobile: z
    .string()
    .length(10, "Mobile number must be 10 digits"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      mobile: "",
    },
  });

  const onSubmit = (data: LoginForm) => {
    if (data.mobile === "9820481464") {
      router.push({
        pathname: "/(auth)/otp",
        params: {
          mobile: data.mobile,
        },
      });
    } else {
      Alert.alert(
        "Login Failed",
        "Use demo number: 9820481464"
      );
    }
  };

  return (
  <SafeAreaView style={styles.container}>
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
    >
      <View style={styles.header}>
        {/* <Ionicons name="bed-outline" size={70} color="#8B5E3C" /> */}
        <Image source={require("../../assets/images/icon.png")}
          style={styles.icon}/>

        <Text style={styles.subtitle}>
          Welcome Back
        </Text>

        <Text style={styles.description}>
          Sign in with your mobile number
          to continue shopping.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Mobile Number
        </Text>

        <View style={styles.inputContainer}>
          <Text style={styles.country}>
            +91
          </Text>

          <Controller
            control={control}
            name="mobile"
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Enter mobile number"
                keyboardType="number-pad"
                maxLength={10}
                value={value}
                onChangeText={onChange}
              />
            )}
          />
        </View>

        {errors.mobile && (
          <Text style={styles.error}>
            {errors.mobile.message}
          </Text>
        )}

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(onSubmit)}
        >
          <Text style={styles.buttonText}>
            Continue
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
},

header: {
  alignItems: "center",
  justifyContent: "center",
  paddingTop: 30,
  paddingHorizontal: 24,
},

icon: {
  width: 180,
  height: 180,
  resizeMode: "contain",
  marginBottom: 20,
},

subtitle: {
  fontSize: 28,
  fontWeight: "700",
  color: "#222",
},

description: {
  textAlign: "center",
  color: "#666",
  fontSize: 16,
  lineHeight: 24,
  paddingHorizontal: 40,
},

card: {
  backgroundColor: "#FFF",
  margin: 25,
  marginTop: 30,
  borderRadius: 25,
  padding: 24,

  elevation: 5,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowRadius: 10,
  shadowOffset: {
    width: 0,
    height: 4,
  },
},

label: {
  fontSize: 16,
  fontWeight: "600",
  marginBottom: 10,
},

inputContainer: {
  flexDirection: "row",
  alignItems: "center",

  borderWidth: 1,
  borderColor: "#DDD",
  borderRadius: 14,

  paddingHorizontal: 15,
},

country: {
  fontSize: 16,
  fontWeight: "700",
  color: "#8B5E3C",
},

input: {
  flex: 1,
  paddingVertical: 15,
  paddingLeft: 15,
  fontSize: 16,
},

button: {
  marginTop: 25,
  backgroundColor: "#8B5E3C",
  borderRadius: 14,
  paddingVertical: 16,
  alignItems: "center",

  elevation: 4,
},

buttonText: {
  color: "#FFF",
  fontSize: 17,
  fontWeight: "700",
},

error: {
  marginTop: 6,
  color: "#E53935",
},

demoCard: {
  marginTop: 30,
  backgroundColor: "#F5EFE8",
  borderRadius: 15,
  padding: 18,
  alignItems: "center",
},

demoTitle: {
  color: "#777",
  fontSize: 14,
},

demoNumber: {
  marginTop: 6,
  fontSize: 20,
  fontWeight: "700",
  color: "#8B5E3C",
},
});