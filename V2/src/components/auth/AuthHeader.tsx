import { Text, View } from "react-native";

export default function AuthHeader() {
  return (
    <View style={{ marginBottom: 30 }}>
      <Text
        style={{
          fontSize: 34,
          fontWeight: "700",
        }}
      >
        Furnish
      </Text>

      <Text
        style={{
          marginTop: 10,
          color: "#777",
        }}
      >
        Beautiful Furniture For Every Home
      </Text>
    </View>
  );
}