import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  item: {
    id: string;
    name: string;
    icon: string;
  };

  onPress?: () => void;
}

export default function CategoryCard({
  item,
  onPress,
}: Props) {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
    >
      <Text style={styles.icon}>
        {item.icon}
      </Text>

      <Text style={styles.name}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 80,
    height: 70,
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
    elevation: 2,
    marginBottom: 12,
  },

  icon: {
    fontSize: 30,
  },

  name: {
    marginTop: 1,
    fontWeight: "500",
    color: "#1F2937",
  },
});