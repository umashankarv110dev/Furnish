import { Pressable, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function NextButton({
  title,
  onPress,
}: Props) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        backgroundColor: "#8B5E3C",
        paddingVertical: 16,
        borderRadius: 14,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 16,
          fontWeight: "600",
        }}
      >
        {title}
      </Text>
    </Pressable>
  );
}