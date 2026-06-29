import { Image, StyleSheet, Text, View } from "react-native";
import { OnboardingItem } from "../../types/onboarding";

type Props = {
  item: OnboardingItem;
};

export default function OnboardingSlide({ item }: Props) {
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{item.title}</Text>

      <Text style={styles.description}>{item.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
  },
  description: {
    marginTop: 15,
    textAlign: "center",
    fontSize: 16,
    color: "#666",
  },
});