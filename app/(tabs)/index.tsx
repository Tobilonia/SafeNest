import { useState } from "react";
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity, FlatList, ScrollView
} from "react-native";
import Colors from "../../constants/colors";
import { router } from "expo-router";

const properties = [
  {
    id: "1",
    title: "Lovely 2 Bedroom Flat",
    price: "850,000",
    location: "Yaba, Lagos",
    type: "2 Bedroom Flat",
    beds: 2,
    baths: 2,
    verified: true,
    rating: 4.5,
  },
  {
    id: "2",
    title: "Modern 3 Bedroom Flat",
    price: "1,500,000",
    location: "Lekki, Lagos",
    type: "3 Bedroom Flat",
    beds: 3,
    baths: 3,
    verified: true,
    rating: 4.8,
  },
  {
    id: "3",
    title: "Cozy 1 Bedroom Flat",
    price: "450,000",
    location: "Festac, Lagos",
    type: "1 Bedroom Flat",
    beds: 1,
    baths: 1,
    verified: true,
    rating: 4.0,
  },
  {
    id: "4",
    title: "Spacious Studio Apartment",
    price: "300,000",
    location: "Surulere, Lagos",
    type: "Studio",
    beds: 1,
    baths: 1,
    verified: false,
    rating: 3.8,
  },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Apartment", "House", "Room", "Studio"];

  const filteredProperties = properties.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.location.toLowerCase().includes(search.toLowerCase());
    const matchesFilter =
      activeFilter === "All" ||
      p.type.toLowerCase().includes(activeFilter.toLowerCase());
    return matchesSearch && matchesFilter;
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Good morning 👋</Text>
          <Text style={styles.headerTitle}>Find your perfect home</Text>
        </View>
        <TouchableOpacity style={styles.notificationBtn}>
          <Text style={styles.notificationIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by location or property name"
          placeholderTextColor={Colors.grey500}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersContainer}
        contentContainerStyle={styles.filtersContent}
      >
        {filters.map((filter) => (
          <TouchableOpacity
            key={filter}
            style={[
              styles.filterBtn,
              activeFilter === filter && styles.filterBtnActive,
            ]}
            onPress={() => setActiveFilter(filter)}
          >
            <Text
              style={[
                styles.filterText,
                activeFilter === filter && styles.filterTextActive,
              ]}
            >
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={filteredProperties}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListHeaderComponent={
          <Text style={styles.resultsText}>
            {filteredProperties.length} properties found
          </Text>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🏠</Text>
            <Text style={styles.emptyText}>No properties found</Text>
            <Text style={styles.emptySubtext}>
              Try adjusting your search or filters
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.propertyCard}
            onPress={() => router.push(`/property/${item.id}`)}
          >
            <View style={styles.propertyImage}>
              <Text style={styles.propertyImagePlaceholder}>🏢</Text>
              {item.verified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓ Verified</Text>
                </View>
              )}
            </View>

            <View style={styles.propertyInfo}>
              <View style={styles.propertyHeader}>
                <Text style={styles.propertyType}>{item.type}</Text>
                <Text style={styles.propertyRating}>⭐ {item.rating}</Text>
              </View>

              <Text style={styles.propertyTitle}>{item.title}</Text>
              <Text style={styles.propertyLocation}>📍 {item.location}</Text>

              <View style={styles.propertyFooter}>
                <Text style={styles.propertyPrice}>
                  ₦{item.price}
                  <Text style={styles.perYear}>/year</Text>
                </Text>
                <View style={styles.propertyDetails}>
                  <Text style={styles.detailText}>🛏 {item.beds}</Text>
                  <Text style={styles.detailText}>🚿 {item.baths}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: Colors.white,
  },
  greeting: {
    fontSize: 14,
    color: Colors.grey500,
    marginBottom: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark,
  },
  notificationBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  notificationIcon: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.dark,
  },
  filtersContainer: {
    maxHeight: 48,
    marginBottom: 8,
  },
  filtersContent: {
    paddingHorizontal: 24,
    gap: 8,
  },
  filterBtn: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.grey200,
    backgroundColor: Colors.white,
  },
  filterBtnActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  filterText: {
    fontSize: 13,
    color: Colors.grey500,
    fontWeight: "500",
  },
  filterTextActive: {
    color: Colors.white,
    fontWeight: "600",
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  resultsText: {
    fontSize: 14,
    color: Colors.grey500,
    marginVertical: 12,
  },
  propertyCard: {
    backgroundColor: Colors.white,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  propertyImage: {
    height: 180,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyImagePlaceholder: {
    fontSize: 48,
  },
  verifiedBadge: {
    position: "absolute",
    top: 12,
    left: 12,
    backgroundColor: Colors.success,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  verifiedText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: "bold",
  },
  propertyInfo: {
    padding: 16,
  },
  propertyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  propertyType: {
    fontSize: 12,
    color: Colors.grey500,
    fontWeight: "500",
  },
  propertyRating: {
    fontSize: 12,
    color: Colors.dark,
    fontWeight: "500",
  },
  propertyTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 13,
    color: Colors.grey500,
    marginBottom: 12,
  },
  propertyFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  propertyPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.primary,
  },
  perYear: {
    fontSize: 12,
    color: Colors.grey500,
    fontWeight: "normal",
  },
  propertyDetails: {
    flexDirection: "row",
    gap: 12,
  },
  detailText: {
    fontSize: 13,
    color: Colors.grey500,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 60,
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
  },
});