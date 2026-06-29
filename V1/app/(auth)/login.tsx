import { View, Text, TextInput, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
    <View style={styles.container}>
      <Text style={styles.title}>Furnish</Text>

      <Controller
        control={control}
        name="mobile"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Enter Mobile Number"
            keyboardType="number-pad"
            maxLength={10}
            value={value}
            onChangeText={onChange}
            style={styles.input}
          />
        )}
      />

      {errors.mobile && (
        <Text style={styles.error}>
          {errors.mobile.message}
        </Text>
      )}

      <Text style={styles.button} onPress={handleSubmit(onSubmit)}>
        Send OTP
      </Text>

      <Text style={{ marginTop: 30 }}>
        Demo Number: 9820481464
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
    fontSize: 34,
    fontWeight: "700",
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#8B5E3C",
    color: "#fff",
    padding: 16,
    marginTop: 20,
    textAlign: "center",
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "600",
  },
  error: {
    color: "red",
    marginTop: 5,
  },
});