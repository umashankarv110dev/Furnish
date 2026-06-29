import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddressScreen() {
  return (
    <SafeAreaView style={styles.safecontainer}>
              {/* Header */}

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={28}
            />
          </TouchableOpacity>
        </View>

      <View style={styles.container}>
        <Text style={styles.title}>
          Delivery Address
        </Text>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
        />

        <TextInput
          placeholder="Mobile Number"
          style={styles.input}
        />

        <TextInput
          placeholder="Address"
          multiline
          style={[
            styles.input,
            {
              height: 100,
            },
          ]}
        />

        <TextInput
          placeholder="City"
          style={styles.input}
        />

        <TextInput
          placeholder="Pincode"
          style={styles.input}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            router.push(
              "/checkout/payment"
            )
          }
        >
          <Text style={styles.btnText}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: "#7b6436",
  },

  header: {
    marginHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

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

  input: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 15,
    marginBottom: 12,
  },

  button: {
    backgroundColor: "#8B5E3C",
    padding: 16,
    borderRadius: 12,
    marginTop: 10,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700",
  },
});