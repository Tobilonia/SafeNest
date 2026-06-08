import { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: "1",
    title: "Rent Safely.",
    subtitle: "Move with Confidence.",
    description: "Verified listings, trusted agents, and secure payments — all in one place.",
    image: require("../../assets/images/icon.png"),
  },
  {
    id: "2",
    title: "Verified Agents",
    subtitle: "& Landlords Only.",
    description: "Every landlord and agent on SafeNest is identity verified before listing.",
    image: require("../../assets/images/icon.png"),
  },
  {
    id: "3",
    title: "Your Deposit",
    subtitle: "Is Protected.",
    description: "Funds are held securely in escrow and only released after you confirm move-in.",
    image: require("../../assets/images/icon.png"),
  },
];

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      router.replace("/(auth)/role-select");
    }
  };

  const handleSkip = () => {
    router.replace("/(auth)/role-select");
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
        <Text style={styles.skipText}>Skip</Text>
      </TouchableOpacity>

      <View style={styles.slideContainer}>
        <Image source={slides[currentIndex].image} style={styles.image} />
        <Text style={styles.title}>{slides[currentIndex].title}</Text>
        <Text style={styles.subtitle}>{slides[currentIndex].subtitle}</Text>
        <Text style={styles.description}>{slides[currentIndex].description}</Text>
      </View>

      <View style={styles.dotsContainer}>
        {slides.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              index === currentIndex ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNext}>
        <Text style={styles.buttonText}>
          {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 60,
    paddingHorizontal: 24,
  },
  skipButton: {
    alignSelf: "flex-end",
  },
  skipText: {
    fontSize: 14,
    color: Colors.grey500,
  },
  slideContainer: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.dark,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: Colors.grey500,
    textAlign: "center",
    lineHeight: 24,
  },
  dotsContainer: {
    flexDirection: "row",
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: Colors.primary,
    width: 24,
  },
  inactiveDot: {
    backgroundColor: Colors.grey200,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});