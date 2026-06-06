import { View, Text, StyleSheet } from "react-native";
import Colors from "../../constants/colors";

export default function SavedScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Saved Properties</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    color: Colors.primary,
    fontWeight: "bold",
  },
});