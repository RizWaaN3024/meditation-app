import { View, Text, ImageBackground, Pressable } from "react-native";
import React from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router } from "expo-router";
import { AntDesign } from "@expo/vector-icons";

const Meditate = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[0]}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-6 z-10"
          >
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
