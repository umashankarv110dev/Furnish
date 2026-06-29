import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

interface HomeHeaderProps {
  userName?: string;
  location?: string;
  onNotificationPress?: () => void;
  onProfilePress?: () => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  userName = "Umashankar",
  location = "Mumbai",
  onNotificationPress,
  onProfilePress,
}) => {
  const hour = new Date().getHours();

  const greeting =
    hour < 12
      ? "Good Morning"
      : hour < 18
      ? "Good Afternoon"
      : "Good Evening";

  return (
    <View style={styles.container}>
      {/* Left Section */}
      <View style={styles.leftContainer}>
        <Text style={styles.greeting}>
          {greeting} 👋
        </Text>

        <Text style={styles.userName}>
          {userName}
        </Text>

        <View style={styles.locationRow}>
          <Ionicons
            name="location-outline"
            size={16}
            color="#8B5E3C"
          />

          <Text style={styles.locationText}>
            Deliver to {location}
          </Text>
        </View>
      </View>

      {/* Right Section */}
      <View style={styles.rightContainer}>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() => router.push("/search")}
        >
          <Ionicons
            name="search-outline"
            size={22}
            color="#333"
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.iconButton}
          onPress={onNotificationPress}
        >
          <Ionicons
            name="notifications-outline"
            size={24}
            color="#333"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onProfilePress}
        >
          {/* <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=12",
            }}
            style={styles.avatar}
          /> */}
          <Image
            source={require("../../../assets/images/avatar.png")}
            style={styles.avatar}
            />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },

  leftContainer: {
    flex: 1,
  },

  greeting: {
    fontSize: 16,
    color: "#777",
  },

  userName: {
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
    marginTop: 2,
  },

  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },

  locationText: {
    marginLeft: 5,
    fontSize: 14,
    color: "#555",
  },

  rightContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F3F4F6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  avatar: {
    width: 46,
    height: 46,
    borderRadius: 23,
  },
});