import { useState } from "react";
import {
  View, Text, StyleSheet, FlatList,
  TouchableOpacity, ScrollView
} from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const savedProperties = [
  {
    id: "1",
    title: "2 Bedroom Apartment",
    price: "2,500,000",
    location: "Lekki Phase 1, Lagos",
    type: "Apartments",
    beds: 2,
    baths: 2,
    size: "120",
    verified: true,
  },
  {
    id: "2",
    title: "Mini Flat in Yaba",
    price: "1,000,000",
    location: "Yaba, Lagos",
    type: "Rooms",
    beds: 1,
    baths: 1,
    size: "60",
    verified: true,
  },
  {
    id: "3",
    title: "2 Bedroom Duplex",
    price: "3,500,000",
    location: "Ikoyi, Lagos",
    type: "Houses",
    beds: 2,
    baths: 2,
    size: "130",
    verified: true,
  },
  {
    id: "4",
    title: "Studio Apartment",
    price: "850,000",
    location: "Victoria Island, Lagos",
    type: "Apartments",
    beds: 1,
    baths: 1,
    size: "40",
    verified: true,
  },
  {
    id: "5",
    title: "3 Bedroom Duplex",
    price: "4,500,000",
    location: "Lekki Phase 1, Lagos",
    type: "Houses",
    beds: 3,
    baths: 3,
    size: "200",
    verified: true,
  },
  {
    id: "6",
    title: "2 Bedroom Flat",
    price: "800,000",
    location: "Festac, Lagos",
    type: "Rooms",
    beds: 2,
    baths: 2,
    size: "120",
    verified: true,
  },
];

const tabs = ["All", "Apartments", "Houses", "Rooms"];

export default function SavedScreen() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProperties =
    activeTab === "All"
      ? savedProperties
      : savedProperties.filter((p) => p.type === activeTab);

  const getCount = (type: string) =>
    type === "All"
      ? savedProperties.length
      : savedProperties.filter((p) => p.type === type).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saved Listings</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => (
            <TouchableOpacity
              key={tab}
              style={[
                styles.tab,
                activeTab === tab && styles.tabActive,
              ]}
              onPress={() => setActiveTab(tab)}
            >
              <Text
                style={[
                  styles.tabText,
                  activeTab === tab && styles.tabTextActive,
                ]}
              >
                {tab}({getCount(tab)})
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>❤️</Text>
            <Text style={styles.emptyText}>No saved properties</Text>
            <Text style={styles.emptySubtext}>
              Tap the heart icon on any listing to save it
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.propertyCard}
            onPress={() => router.push(`/property/${item.id}`)}
          >
            <View style={styles.propertyImage}>
              <Text style={styles.propertyEmoji}>🏢</Text>
              {item.verified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓ Verified</Text>
                </View>
              )}
            </View>

            <View style={styles.propertyInfo}>
              <Text style={styles.propertyTitle} numberOfLines={1}>
                {item.title}
              </Text>
              <Text style={styles.propertyLocation}>
                📍 {item.location}
              </Text>
              <Text style={styles.propertyPrice}>
                ₦{item.price}
                <Text style={styles.perYear}> /year</Text>
              </Text>
              <View style={styles.propertyDetails}>
                <Text style={styles.detailText}>🛏 {item.beds}</Text>
                <Text style={styles.detailText}>🚿 {item.baths}</Text>
                <Text style={styles.detailText}>📐 {item.size}m²</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.heartBtn}>
              <Text style={styles.heartIcon}>❤️</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />

      <View style={styles.clearContainer}>
        <TouchableOpacity style={styles.clearButton}>
          <Text style={styles.clearText}>Clear all Saved</Text>
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
  listContent: {
    padding: 24,
    gap: 12,
    paddingBottom: 100,
  },
  propertyCard: {
    flexDirection: "row",
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: "hidden",
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  propertyImage: {
    width: 100,
    height: 100,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyEmoji: {
    fontSize: 32,
  },
  verifiedBadge: {
    position: "absolute",
    top: 6,
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
  propertyInfo: {
    flex: 1,
    padding: 12,
    justifyContent: "center",
  },
  propertyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 12,
    color: Colors.grey500,
    marginBottom: 4,
  },
  propertyPrice: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 6,
  },
  perYear: {
    fontSize: 11,
    color: Colors.grey500,
    fontWeight: "normal",
  },
  propertyDetails: {
    flexDirection: "row",
    gap: 8,
  },
  detailText: {
    fontSize: 11,
    color: Colors.grey500,
  },
  heartBtn: {
    padding: 12,
    justifyContent: "center",
  },
  heartIcon: {
    fontSize: 18,
  },
  clearContainer: {
    position: "absolute",
    bottom: 80,
    left: 24,
    right: 24,
  },
  clearButton: {
    borderWidth: 1.5,
    borderColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  clearText: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 80,
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
    textAlign: "center",
  },
});