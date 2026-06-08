import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,
TextInput, ScrollView } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const propertyTypes = [
  { id: "apartment", label: "Apartment" },
  { id: "room", label: "Room" },
  { id: "house", label: "House" },
  { id: "studio", label: "Studio" },
  { id: "shared", label: "Shared Room" },
];

export default function PreferencesScreen() {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [location, setLocation] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const toggleType = (id: string) => {
    if (selectedTypes.includes(id)) {
      setSelectedTypes(selectedTypes.filter((t) => t !== id));
    } else {
      setSelectedTypes([...selectedTypes, id]);
    }
  };

  const handleSave = () => {
    router.replace("/(auth)/success");
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.title}>Set your preferences</Text>
      <Text style={styles.subtitle}>
        Help us personalise results for you
      </Text>

      <View style={styles.section}>
        <Text style={styles.label}>Budget Range</Text>
        <View style={styles.priceRow}>
          <TextInput
            style={styles.priceInput}
            placeholder="Min Price"
            placeholderTextColor={Colors.grey500}
            value={minPrice}
            onChangeText={setMinPrice}
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.priceInput}
            placeholder="Max Price"
            placeholderTextColor={Colors.grey500}
            value={maxPrice}
            onChangeText={setMaxPrice}
            keyboardType="number-pad"
          />
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Preferred Location</Text>
        <TextInput
          style={styles.input}
          placeholder="Search location"
          placeholderTextColor={Colors.grey500}
          value={location}
          onChangeText={setLocation}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Property Type</Text>
        <View style={styles.typesGrid}>
          {propertyTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.typeButton,
                selectedTypes.includes(type.id) && styles.typeSelected,
              ]}
              onPress={() => toggleType(type.id)}
            >
              <Text
                style={[
                  styles.typeText,
                  selectedTypes.includes(type.id) && styles.typeTextSelected,
                ]}
              >
                {type.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleSave}
      >
        <Text style={styles.buttonText}>Save & Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.grey500,
    marginBottom: 32,
  },
  section: {
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: "row",
    gap: 12,
  },
  priceInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.dark,
  },
  typesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  typeButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: Colors.grey200,
    backgroundColor: Colors.white,
  },
  typeSelected: {
    borderColor: Colors.primary,
    backgroundColor: "#EEF2FF",
  },
  typeText: {
    fontSize: 14,
    color: Colors.grey500,
    fontWeight: "500",
  },
  typeTextSelected: {
    color: Colors.primary,
    fontWeight: "600",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 16,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});