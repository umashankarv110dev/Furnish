import {
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OnboardingItem } from "../../types/onboarding";

type Props = {
  item: OnboardingItem;
};

export default function OnboardingSlide({ item }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={item.image}
        style={styles.image}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          {item.title}
        </Text>

        <Text style={styles.description}>
          {item.description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#FFF",
  },

  image: {
    width: "100%",
    height: "79%",
    resizeMode: "cover",
  },

  content: {
    flex: 1,
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    textAlign: "center",
  },

  description: {
    marginTop: 12,
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    lineHeight: 24,
  },
});