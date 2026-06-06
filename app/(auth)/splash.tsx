import { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

export default function SplashScreen() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(auth)/onboarding");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/safenest-logo.png")}
        style={styles.logo}
      />
      <Text style={styles.appName}>SafeNest</Text>
      <Text style={styles.tagline}>Where Trust Builds Homes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 16,
  },
  appName: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },
  tagline: {
    fontSize: 14,
    color: Colors.grey500,
    fontStyle: "italic",
  },
});