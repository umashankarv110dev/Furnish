import { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { router } from "expo-router";

import { onboardingData } from "../../src/data/onboardingData";
import OnboardingSlide from "../../src/components/onboarding/OnboardingSlide";
import Pagination from "../../src/components/onboarding/Pagination";
import NextButton from "../../src/components/onboarding/NextButton";

export default function OnboardingScreen() {
  const [index, setIndex] = useState(0);

  const isLast = index === onboardingData.length - 1;

  const handleNext = () => {
    if (isLast) {
      router.replace("/(auth)/login");
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff"}}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <OnboardingSlide item={onboardingData[index]} />
      </View>

      <Pagination
        currentIndex={index}
        total={onboardingData.length}
      />

      <View style={{ paddingLeft: 30, paddingRight:30,
        paddingBottom:30, paddingTop:15
      }}>
        <NextButton
          title={isLast ? "Get Started" : "Next"}
          onPress={handleNext}
        />
      </View>
    </SafeAreaView>
  );
}