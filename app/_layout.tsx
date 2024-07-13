import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

// Prevents the splash Screen from autohiding until loading all the font assets
// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  // const [fontsLoaded, error] = useFonts({
  //   "Roboto-Mono": require("../assets/fonts/SpaceMono-Regular.ttf")
  // })

  // useEffect(() => {
  //   if (error) throw error;
  //   if (fontsLoaded) SplashScreen.hideAsync();
  // }, [fontsLoaded, error])

  // if (!fontsLoaded) return null;
  // if (fontsLoaded && !error) return null;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="meditate/[id]" options={{ headerShown: false }} />
    </Stack>
  );
}
