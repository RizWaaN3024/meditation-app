import { View, Text, ImageBackground, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import MEDITATION_IMAGES from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";

const Meditate = () => {
  const { id } = useLocalSearchParams();

  const [secondsRemaining, setSecondsRemaining] = useState<number>(20);
  const [isMeditating, setIsMeditating] = useState(false);

  useEffect(() => {
    let timerId: NodeJS.Timeout;

    // Exit 
    if(secondsRemaining === 0) {
      setIsMeditating(false);
      return;
    } 
      if (isMeditating) {
        timerId = setTimeout(() => {
          setSecondsRemaining(secondsRemaining - 1);
        }, 1000);
      }

    return () => {
      clearTimeout(timerId)
    }
  }, [secondsRemaining, isMeditating])

  const formattedTimeMinutes = String(Math.floor(secondsRemaining / 60)).padStart(2, "0");
  const formattedTimeSeconds = String(secondsRemaining % 60).padStart(2, "0");
  return (
    <View className="flex-1">
      <ImageBackground
        source={MEDITATION_IMAGES[Number(id) - 1]}
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

          <View className="flex-1 justify-center">
            <View className="mx-auto bg-neutral-200 rounded-full w-44 h-44 justify-center items-center">
              <Text className="text-4xl text-blue-800 font-rmono">{formattedTimeMinutes}:{formattedTimeSeconds}</Text>
            </View>
          </View>
          <View className="mb-5">
            <CustomButton title="Start Meditation" onPress={() => setIsMeditating(true)} />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default Meditate;
