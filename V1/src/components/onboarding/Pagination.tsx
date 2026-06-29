import { View } from "react-native";

type Props = {
  currentIndex: number;
  total: number;
};

export default function Pagination({
  currentIndex,
  total,
}: Props) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {Array.from({ length: total }).map((_, index) => (
        <View
          key={index}
          style={{
            width: currentIndex === index ? 20 : 8,
            height: 8,
            borderRadius: 4,
            backgroundColor:
              currentIndex === index ? "#8B5E3C" : "#CCCCCC",
            marginHorizontal: 4,
          }}
        />
      ))}
    </View>
  );
}