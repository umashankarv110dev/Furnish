import {
  FlatList,
  ScrollView,
  View,
} from "react-native";

import SearchBar from "../../src/components/home/SearchBar";
import ProductCard from "../../src/components/home/ProductCard";

import { products } from "../../src/data/products";
import HomeHeader from "../../src/components/home/Header";
import BannerSlider from "../../src/components/home/BannerCarousel";
import CategorySection from "@/src/components/home/CategoryList";
import ProductSection from "@/src/components/home/ProductSection";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  return (
  <SafeAreaView style={{ flex: 1, backgroundColor: "#004266"}}>
    <ScrollView
      style={{flex: 1, backgroundColor: "#F8F6F2", borderTopLeftRadius: 24, borderTopRightRadius: 24}}
      contentContainerStyle={{
        padding: 20,
      }}
    >
      {/* <HomeHeader
        userName="Umashankar"
        location="Mumbai"
        onNotificationPress={() => {
            console.log("Notification Clicked");
        }}
        onProfilePress={() => {
            console.log("Profile Clicked");
        }}
        />; */}
        

      <HomeHeader 
        onNotificationPress={() => {
          console.log("Notification Clicked");
        }}
        onProfilePress={() => {
            console.log("Profile Clicked");
        }}
        />

      <SearchBar />

      <BannerSlider />

      <CategorySection />

      <ProductSection />
    </ScrollView>  
  </SafeAreaView>
  );
}