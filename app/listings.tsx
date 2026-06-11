import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const properties = [
  {
    id: "1",
    title: "2 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "2,500,000",
    beds: 2,
    baths: 2,
    size: "120",
    type: "Apartments",
    verified: true,
    saved: false,
  },
  {
    id: "2",
    title: "Mini Flat in Yaba",
    location: "Yaba, Lagos",
    price: "1,000,000",
    beds: 1,
    baths: 1,
    size: "60",
    type: "Rooms",
    verified: true,
    saved: false,
  },
  {
    id: "3",
    title: "2 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    price: "3,500,000",
    beds: 2,
    baths: 2,
    size: "120",
    type: "Duplexes",
    verified: true,
    saved: false,
  },
  {
    id: "4",
    title: "Studio Apartment",
    location: "Victoria Island, Lagos",
    price: "850,000",
    beds: 1,
    baths: 1,
    size: "40",
    type: "Apartments",
    verified: true,
    saved: false,
  },
  {
    id: "5",
    title: "3 Bedroom Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "4,500,000",
    beds: 3,
    baths: 3,
    size: "200",
    type: "Duplexes",
    verified: true,
    saved: false,
  },
  {
    id: "6",
    title: "2 Bedroom Flat",
    location: "Festac, Lagos",
    price: "800,000",
    beds: 2,
    baths: 2,
    size: "120",
    type: "Rooms",
    verified: true,
    saved: false,
  },
  {
    id: "7",
    title: "3 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "2,500,000",
    beds: 3,
    baths: 3,
    size: "200",
    type: "Apartments",
    verified: true,
    saved: false,
  },
  {
    id: "8",
    title: "2 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "2,000,000",
    beds: 3,
    baths: 3,
    size: "200",
    type: "Apartments",
    verified: true,
    saved: false,
  },
  {
    id: "9",
    title: "3 Bedroom Apartment",
    location: "Ikoyi, Lagos",
    price: "2,500,000",
    beds: 3,
    baths: 3,
    size: "200",
    type: "Apartments",
    verified: true,
    saved: false,
  },
];

const tabs = ["All", "Apartments", "Houses", "Duplexes"];

export default function ListingsScreen() {
  const [activeTab, setActiveTab] = useState("All");
  const [savedIds, setSavedIds] = useState<string[]>([]);

  const filtered =
    activeTab === "All"
      ? properties
      : properties.filter((p) => p.type === activeTab);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verified Listings</Text>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => router.push("/filter")}
        >
          <Text style={styles.filterText}>Filter 🔽</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[styles.tab, activeTab === tab && styles.tabActive]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Count */}
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {filtered.length} Verified Properties
        </Text>
        <Text style={styles.countSubtext}>
          All properties have passed SafeNest checks
        </Text>
      </View>

      {/* List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🏠</Text>
            <Text style={styles.emptyText}>No properties found</Text>
            <Text style={styles.emptySubtext}>
              Try adjusting your filters
            </Text>
            <TouchableOpacity style={styles.clearButton}>
              <Text style={styles.clearButtonText}>Clear Filters</Text>
            </TouchableOpacity>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.propertyCard}
            onPress={() => router.push(`/property/${item.id}`)}
          >
            {/* Image */}
            <View style={styles.imageContainer}>
              <Text style={styles.imagePlaceholder}>🏢</Text>
              {item.verified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓ Verified</Text>
                </View>
              )}
            </View>

            {/* Details */}
            <View style={styles.cardContent}>
              <Text style={styles.propertyTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.propertyLocation}>📍 {item.location}</Text>
              <Text style={styles.propertyPrice}>
                ₦{item.price}
                <Text style={styles.perYear}> /year</Text>
              </Text>
              <View style={styles.statsRow}>
                <Text style={styles.statText}>🛏 {item.beds} Beds</Text>
                <Text style={styles.statText}>🚿 {item.baths} Baths</Text>
                <Text style={styles.statText}>📐 {item.size}m²</Text>
              </View>
            </View>

            {/* Save */}
            <TouchableOpacity
              style={styles.heartBtn}
              onPress={() => toggleSave(item.id)}
            >
              <Text style={styles.heartIcon}>
                {savedIds.includes(item.id) ? "❤️" : "🤍"}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
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
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.primary,
    gap: 4,
  },
  filterText: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  tabsContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  tabActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabText: {
    fontSize: 13,
    color: Colors.grey500,
    fontWeight: "500",
  },
  tabTextActive: {
    color: Colors.white,
    fontWeight: "600",
  },
  countContainer: {
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  countText: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.dark,
  },
  countSubtext: {
    fontSize: 12,
    color: Colors.grey500,
    marginTop: 2,
  },
  listContent: {
    paddingBottom: 40,
    backgroundColor: Colors.white,
  },
  propertyCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  imageContainer: {
    width: 90,
    height: 90,
    borderRadius: 12,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
    overflow: "hidden",
  },
  imagePlaceholder: {
    fontSize: 32,
  },
  verifiedBadge: {
    position: "absolute",
    bottom: 6,
    left: 6,
    backgroundColor: Colors.success,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 10,
  },
  verifiedText: {
    color: Colors.white,
    fontSize: 9,
    fontWeight: "bold",
  },
  cardContent: {
    flex: 1,
    gap: 4,
  },
  propertyTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: Colors.dark,
  },
  propertyLocation: {
    fontSize: 12,
    color: Colors.grey500,
  },
  propertyPrice: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.primary,
  },
  perYear: {
    fontSize: 12,
    color: Colors.grey500,
    fontWeight: "normal",
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 4,
  },
  statText: {
    fontSize: 11,
    color: Colors.grey500,
  },
  heartBtn: {
    padding: 8,
  },
  heartIcon: {
    fontSize: 20,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.grey200,
    marginHorizontal: 24,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.grey500,
    marginBottom: 20,
  },
  clearButton: {
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 10,
    borderRadius: 8,
  },
  clearButtonText: {
    color: Colors.primary,
    fontWeight: "600",
    fontSize: 14,
  },
});