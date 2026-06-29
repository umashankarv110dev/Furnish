import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

import { removeToken } from "../../src/services/authStorage";

export default function ProfileScreen() {
  const handleLogout = async () => {
    await removeToken();
    router.replace("/(auth)/login");
  };

  const MenuItem = ({
    icon,
    title,
    onPress,
  }: any) => (
    <TouchableOpacity
      style={styles.menuItem}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.menuLeft}>
        <View style={styles.iconContainer}>
          <Ionicons
            name={icon}
            size={22}
            color="#8B5E3C"
          />
        </View>

        <Text style={styles.menuText}>
          {title}
        </Text>
      </View>

      <Ionicons
        name="chevron-forward"
        size={20}
        color="#999"
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}

        <Text style={styles.header}>
          My Profile
        </Text>

        {/* Profile Card */}

        <View style={styles.profileCard}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              U
            </Text>
          </View>

          <Text style={styles.name}>
            Demo User
          </Text>

          <Text style={styles.email}>
            demo@furnish.com
          </Text>

          <View style={styles.memberBadge}>
            <Ionicons
              name="diamond"
              size={14}
              color="#FFF"
            />

            <Text
              style={styles.memberText}
            >
              Premium Member
            </Text>
          </View>
        </View>

        {/* Statistics */}

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              12
            </Text>

            <Text style={styles.statTitle}>
              Orders
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              8
            </Text>

            <Text style={styles.statTitle}>
              Wishlist
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>
              2
            </Text>

            <Text style={styles.statTitle}>
              Cart
            </Text>
          </View>
        </View>

                {/* Menu */}

        <MenuItem
          icon="cube-outline"
          title="My Orders"
          onPress={() => router.push("/orders/allorders")}
        />

        <MenuItem
          icon="location-outline"
          title="Saved Addresses"
          onPress={() =>
            router.push("/profile/addresses")
          }
        />

        <MenuItem
          icon="heart-outline"
          title="Wishlist"
          onPress={() =>
            router.push("/(tabs)/wishlist")
          }
        />

        <MenuItem
          icon="notifications-outline"
          title="Notifications"
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Notifications feature will be available soon."
            )
          }
        />

        <MenuItem
          icon="settings-outline"
          title="Settings"
          onPress={() =>
            Alert.alert(
              "Coming Soon",
              "Settings feature will be available soon."
            )
          }
        />

        <MenuItem
          icon="help-circle-outline"
          title="Help & Support"
          onPress={() =>
            Alert.alert(
              "Help",
              "Support section coming soon."
            )
          }
        />

        <MenuItem
          icon="information-circle-outline"
          title="About App"
          onPress={() =>
            Alert.alert(
              "Furnish",
              "Version 1.0.0"
            )
          }
        />

        {/* Logout */}

        <TouchableOpacity
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <Ionicons
            name="log-out-outline"
            size={22}
            color="#FFF"
          />

          <Text style={styles.logoutText}>
            Logout
          </Text>
        </TouchableOpacity>

        <View style={{ height: 30 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
    paddingHorizontal: 18,
  },

  header: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1F2937",
    marginTop: 15,
    marginBottom: 20,
  },

  profileCard: {
    backgroundColor: "#FFF",
    borderRadius: 14,
    paddingVertical: 25,
    alignItems: "center",
    marginBottom: 20,

    elevation: 5,

    shadowColor: "#000",
    shadowOpacity: 0.01,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#8B5E3C",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "700",
  },

  name: {
    marginTop: 16,
    fontSize: 24,
    fontWeight: "700",
    color: "#222",
  },

  email: {
    marginTop: 6,
    fontSize: 15,
    color: "#777",
  },

  memberBadge: {
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#8B5E3C",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
  },

  memberText: {
    color: "#FFF",
    marginLeft: 6,
    fontSize: 13,
    fontWeight: "600",
  },

  statsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  statCard: {
    flex: 1,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    borderRadius: 12,
    paddingVertical: 18,
    alignItems: "center",

    elevation: 3,

    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  statNumber: {
    fontSize: 24,
    fontWeight: "700",
    color: "#8B5E3C",
  },

  statTitle: {
    marginTop: 5,
    color: "#777",
    fontSize: 14,
  },

  menuItem: {
    backgroundColor: "#FFF",
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 15,
    marginBottom: 14,

    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    elevation: 3,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#F5EFE8",
    justifyContent: "center",
    alignItems: "center",
  },

  menuText: {
    marginLeft: 15,
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
  },

  logoutButton: {
    backgroundColor: "#E53935",
    borderRadius: 12,
    paddingVertical: 16,
    marginTop: 12,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
  },

  logoutText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
});