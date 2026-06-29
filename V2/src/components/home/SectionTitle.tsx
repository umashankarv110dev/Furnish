import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

interface Props {
  title: string;
  onViewAll?: () => void;
}

export default function SectionTitle({
  title,
  onViewAll,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {title}
      </Text>

      <TouchableOpacity onPress={onViewAll}>
        <Text style={styles.viewAll}>
          View All
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1F2937",
  },

  viewAll: {
    color: "#8B5E3C",
    fontWeight: "600",
  },
});