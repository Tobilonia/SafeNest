import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const propertyTypes = ["Apartment", "Duplex", "Flat", "Studio", "Room"];
const bedroomOptions = ["Studio", "1", "2", "3", "4+"];
const bathroomOptions = ["1", "2", "3", "4+"];
const amenities = [
  { id: "power", label: "24/7 Power", icon: "☀️" },
  { id: "parking", label: "Parking", icon: "🅿️" },
  { id: "security", label: "Security", icon: "🔒" },
  { id: "pool", label: "Pool", icon: "🏊" },
  { id: "generator", label: "Generator", icon: "⚡" },
  { id: "furnished", label: "Furnished", icon: "🛋️" },
  { id: "water", label: "Water", icon: "💧" },
  { id: "gym", label: "Gym", icon: "🏋️" },
];

export default function FilterScreen() {
  const [selectedType, setSelectedType] = useState("Apartment");
  const [selectedBedrooms, setSelectedBedrooms] = useState("2");
  const [selectedBathrooms, setSelectedBathrooms] = useState("2");
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([
    "parking", "security",
  ]);
  const [furnished, setFurnished] = useState(true);
  const [petsAllowed, setPetsAllowed] = useState(false);
  const [priceMin] = useState("500,000");
  const [priceMax] = useState("5,000,000+");

  const toggleAmenity = (id: string) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const selectAllAmenities = () => {
    if (selectedAmenities.length === amenities.length) {
      setSelectedAmenities([]);
    } else {
      setSelectedAmenities(amenities.map((a) => a.id));
    }
  };

  const handleReset = () => {
    setSelectedType("Apartment");
    setSelectedBedrooms("2");
    setSelectedBathrooms("2");
    setSelectedAmenities([]);
    setFurnished(false);
    setPetsAllowed(false);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filters</Text>
        <TouchableOpacity onPress={handleReset}>
          <Text style={styles.resetText}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Price Range */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Price Range (per year)</Text>
          <View style={styles.sliderContainer}>
            <View style={styles.sliderTrack}>
              <View style={styles.sliderFill} />
              <View style={[styles.sliderThumb, { left: "10%" }]} />
              <View style={[styles.sliderThumb, { left: "80%" }]} />
            </View>
            <View style={styles.priceLabels}>
              <Text style={styles.priceLabel}>₦{priceMin}</Text>
              <Text style={styles.priceLabel}>₦{priceMax}</Text>
            </View>
          </View>
        </View>

        {/* Property Type */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Property Type</Text>
          <View style={styles.pillRow}>
            {propertyTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.pill,
                  selectedType === type && styles.pillActive,
                ]}
                onPress={() => setSelectedType(type)}
              >
                <Text
                  style={[
                    styles.pillText,
                    selectedType === type && styles.pillTextActive,
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bedrooms */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Bedrooms</Text>
          <View style={styles.pillRow}>
            {bedroomOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.pillSquare,
                  selectedBedrooms === option && styles.pillActive,
                ]}
                onPress={() => setSelectedBedrooms(option)}
              >
                <Text
                  style={[
                    styles.pillText,
                    selectedBedrooms === option && styles.pillTextActive,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Bathrooms */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>Bathrooms</Text>
          <View style={styles.pillRow}>
            {bathroomOptions.map((option) => (
              <TouchableOpacity
                key={option}
                style={[
                  styles.pillSquare,
                  selectedBathrooms === option && styles.pillActive,
                ]}
                onPress={() => setSelectedBathrooms(option)}
              >
                <Text
                  style={[
                    styles.pillText,
                    selectedBathrooms === option && styles.pillTextActive,
                  ]}
                >
                  {option}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Amenities */}
        <View style={styles.section}>
          <View style={styles.sectionRow}>
            <Text style={styles.sectionLabel}>Amenities</Text>
            <TouchableOpacity onPress={selectAllAmenities}>
              <Text style={styles.selectAllText}>
                {selectedAmenities.length === amenities.length
                  ? "Deselect all"
                  : "Select all"}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.amenitiesGrid}>
            {amenities.map((amenity) => {
              const isSelected = selectedAmenities.includes(amenity.id);
              return (
                <TouchableOpacity
                  key={amenity.id}
                  style={[
                    styles.amenityCard,
                    isSelected && styles.amenityCardActive,
                  ]}
                  onPress={() => toggleAmenity(amenity.id)}
                >
                  <Text style={styles.amenityIcon}>{amenity.icon}</Text>
                  <Text
                    style={[
                      styles.amenityLabel,
                      isSelected && styles.amenityLabelActive,
                    ]}
                  >
                    {amenity.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>

        {/* More Options */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>More Options</Text>
          <View style={styles.toggleCard}>
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Furnished</Text>
              <Switch
                value={furnished}
                onValueChange={setFurnished}
                trackColor={{
                  false: Colors.grey200,
                  true: Colors.primary,
                }}
                thumbColor={Colors.white}
              />
            </View>
            <View style={styles.divider} />
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Pets Allowed</Text>
              <Switch
                value={petsAllowed}
                onValueChange={setPetsAllowed}
                trackColor={{
                  false: Colors.grey200,
                  true: Colors.primary,
                }}
                thumbColor={Colors.white}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom CTA */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.resultsButton}
          onPress={() => router.back()}
        >
          <Text style={styles.resultsButtonText}>Show 123 Results</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: Colors.white,
  },
  backText: {
    fontSize: 24,
    color: Colors.dark,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
  resetText: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
    paddingTop: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionLabel: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.dark,
    marginBottom: 12,
  },
  sectionRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  selectAllText: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  // Slider
  sliderContainer: {
    gap: 8,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: Colors.grey200,
    borderRadius: 2,
    position: "relative",
    marginHorizontal: 8,
  },
  sliderFill: {
    position: "absolute",
    left: "10%",
    right: "20%",
    height: 4,
    backgroundColor: Colors.primary,
    borderRadius: 2,
  },
  sliderThumb: {
    position: "absolute",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary,
    top: -8,
    marginLeft: -10,
  },
  priceLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  priceLabel: {
    fontSize: 13,
    color: Colors.dark,
    fontWeight: "500",
  },
  // Pills
  pillRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.grey200,
    backgroundColor: Colors.white,
  },
  pillSquare: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey200,
    backgroundColor: Colors.white,
    minWidth: 52,
    alignItems: "center",
  },
  pillActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  pillText: {
    fontSize: 13,
    color: Colors.dark,
    fontWeight: "500",
  },
  pillTextActive: {
    color: Colors.white,
    fontWeight: "600",
  },
  // Amenities
  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  amenityCard: {
    width: "22%",
    aspectRatio: 1,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey200,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
  },
  amenityCardActive: {
    borderColor: Colors.primary,
    backgroundColor: "#F0F3FF",
  },
  amenityIcon: {
    fontSize: 22,
  },
  amenityLabel: {
    fontSize: 10,
    color: Colors.dark,
    fontWeight: "500",
    textAlign: "center",
  },
  amenityLabelActive: {
    color: Colors.primary,
    fontWeight: "600",
  },
  // Toggles
  toggleCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey200,
    paddingHorizontal: 16,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
  },
  toggleLabel: {
    fontSize: 14,
    color: Colors.dark,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.grey200,
  },
  // Bottom
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.grey200,
  },
  resultsButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  resultsButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
});