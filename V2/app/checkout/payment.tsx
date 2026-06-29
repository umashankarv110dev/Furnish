import { router } from "expo-router";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function PaymentScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Select Payment Method
      </Text>

      <TouchableOpacity
        style={styles.option}
      >
        <Text>Cash on Delivery</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
      >
        <Text>UPI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
      >
        <Text>Credit/Debit Card</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          router.push(
            "/checkout/review"
          )
        }
      >
        <Text style={styles.btnText}>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F8F6F2",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

  option: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#8B5E3C",
    padding: 16,
    borderRadius: 12,
    marginTop: 20,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});