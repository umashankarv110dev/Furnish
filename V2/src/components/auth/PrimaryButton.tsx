import { Pressable, Text } from "react-native";

export default function PrimaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#8B5E3C",
        padding: 18,
        borderRadius: 12,
        margin: 20,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontWeight: "600",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}