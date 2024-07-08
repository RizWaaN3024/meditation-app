import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();
  return (
    <View>
      <Text>AffirmationPractice</Text>
    </View>
  );
};

export default AffirmationPractice;
