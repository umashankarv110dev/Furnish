import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

import { banners } from "../../data/banners";

const { width } = Dimensions.get("window");

const BANNER_WIDTH = width - 32;
const BANNER_HEIGHT = 180;

export default function BannerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={BANNER_WIDTH}
        height={BANNER_HEIGHT}
        autoPlay
        autoPlayInterval={3000}
        data={banners}
        scrollAnimationDuration={800}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item }) => (
          <Pressable
            style={styles.bannerContainer}
            onPress={() => {
              console.log("Banner Pressed:", item.id);
            }}
          >
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="stretch"
            />
          </Pressable>
        )}
      />

      <View style={styles.pagination}>
        {banners.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 1,
  },

  bannerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
  },

  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D1D5DB",
    marginHorizontal: 4,
  },

  activeDot: {
    width: 24,
    backgroundColor: "#8B5E3C",
  },
});