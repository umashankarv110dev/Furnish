import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

import { removeToken } from "../../src/services/authStorage";
import { router } from "expo-router";
import PrimaryButton from '@/src/components/auth/PrimaryButton';

export default function profile() {
  const logout = async () => {
        await removeToken();
        router.replace("/(auth)/login");
    };

  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          profile
        </Text>
        
      <PrimaryButton title="Logout" onPress={logout} />
      </View>
    </SafeAreaView>
  
  )
}

const styles = StyleSheet.create({

  safecontainer: {
    flex: 1,
    backgroundColor: "#004266",
  },
  
  container: {
    flex: 1,
    backgroundColor: "#F8F6F2",
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

});
