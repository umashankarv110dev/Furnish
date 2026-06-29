import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SuccessScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>
        🎉
      </Text>

      <Text style={styles.title}>
        Order Placed Successfully
      </Text>

      <Text style={styles.subtitle}>
        Thank you for shopping with Furnish
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.replace(
            "/orders"
          )
        }
      >
        <Text style={styles.btnText}>
          View Orders
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  icon: {
    fontSize: 70,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 20,
  },

  subtitle: {
    color: "#777",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#8B5E3C",
    padding: 16,
    borderRadius: 12,
    marginTop: 30,
    width: "80%",
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});