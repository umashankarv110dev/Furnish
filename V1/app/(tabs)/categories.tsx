import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function categories() {
  return (
    <SafeAreaView style={styles.safecontainer}>
      <View style={styles.container}>
        <Text style={styles.title}>
          categories
        </Text>
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
    padding: 16,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },

});