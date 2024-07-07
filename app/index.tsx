import { Image, StyleSheet, Platform, View, Text } from "react-native";

export default function HomeScreen() {
  <View style={styles.container}>
    <Text style={styles.title}>Hello React Native</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "white",
  },
});
