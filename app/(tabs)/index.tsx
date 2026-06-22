import { useState } from "react";
import {
  View, Text, StyleSheet, TextInput,
  TouchableOpacity, FlatList, ScrollView,
  Image
} from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const properties = [
  {
    id: "1",
    title: "2 Bedroom Apartment",
    price: "2,500,000",
    location: "Lekki Phase 1, Lagos",
    type: "Apartment",
    beds: 2,
    baths: 2,
    size: "120",
    verified: true,
    rating: 4.5,
    image: require("../../assets/images/properties/property-1.jpg"),
  },
  {
    id: "2",
    title: "3 Bedroom Duplex",
    price: "4,500,000",
    location: "Ikoyi, Lagos",
    type: "Houses",
    beds: 3,
    baths: 3,
    size: "200",
    verified: true,
    rating: 4.8,
    image: require("../../assets/images/properties/property-2.jpg"),
  },
  {
    id: "3",
    title: "Mini Flat in Yaba",
    price: "1,000,000",
    location: "Yaba, Lagos",
    type: "Rooms",
    beds: 1,
    baths: 1,
    size: "60",
    verified: true,
    rating: 4.2,
    image: require("../../assets/images/properties/property-3.jpg"),
  },
  {
    id: "4",
    title: "Studio Apartment",
    price: "850,000",
    location: "Victoria Island, Lagos",
    type: "Apartment",
    beds: 1,
    baths: 1,
    size: "40",
    verified: true,
    rating: 4.0,
    image: require("../../assets/images/properties/property-4.jpg"),
  },
  {
    id: "5",
    title: "3 Bedroom Apartment",
    price: "2,500,000",
    location: "Lekki Phase 1, Lagos",
    type: "Apartment",
    beds: 3,
    baths: 1,
    size: "200",
    verified: true,
    rating: 4.6,
    image: require("../../assets/images/properties/property-5.jpg"),
  },
];

const popularLocations = [
  { id: "1", name: "Lekki", count: "100+", image: require("../../assets/images/locations/lekki.jpg") },
  { id: "2", name: "Yaba", count: "150+", image: require("../../assets/images/locations/yaba.jpg") },
  { id: "3", name: "Victoria Island", count: "80+", image: require("../../assets/images/locations/victoria-island.jpg") },
  { id: "4", name: "Ikeja", count: "120+", image: require("../../assets/images/locations/ikeja.jpg") },
];

export default function HomeScreen() {
  const [search, setSearch] = useState("");

  const filteredProperties = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      
      <View style={styles.header}>
        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Lagos, Nigeria</Text>
          <Text style={styles.locationArrow}>▾</Text>
        </View>
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconBtn} onPress={() => router.push("/notifications" as any)}>
            <Text style={styles.iconText}>🔔</Text>
          </TouchableOpacity>
         <TouchableOpacity style={styles.avatarBtn} onPress={() => router.push("/(tabs)/profile" as any)}>
            <Image source={require("../../assets/images/avatars/avatar-olamide.jpg")} style={styles.avatarImage} />
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.greetingSection}>
        <Text style={styles.greeting}>Good morning, Olamide 👋</Text>
        <Text style={styles.greetingSubtitle}>
          Find and rent your next home with confidence
        </Text>
      </View>

      
      <View style={styles.searchRow}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search location, apartments, houses..."
            placeholderTextColor={Colors.grey500}
            value={search}
            onChangeText={setSearch}
          />
        </View>
        <TouchableOpacity
          style={styles.filterBtn}
          onPress={() => router.push("/filter")}
        >
          <Text style={styles.filterBtnText}>⇒</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>
            Rent safely.{"\n"}Move with{"\n"}confidence.
          </Text>
          <View style={styles.bannerBadges}>
            <Text style={styles.bannerBadge}>✓ Verified Properties</Text>
            <Text style={styles.bannerBadge}>✓ Secure Payments</Text>
            <Text style={styles.bannerBadge}>✓ Trusted Agents</Text>
          </View>
        </View>
        <Text style={styles.bannerEmoji}>🏠</Text>
      </View>

      
      <View style={styles.quickActions}>
        {[
          { icon: "🏠", label: "Rent Homes", route: "/listings" },
          { icon: "🛏", label: "Find Rooms", route: "/listings" },
          { icon: "📍", label: "Nearby", route: "/listings" },
          { icon: "❤️", label: "Saved", route: "/(tabs)/saved" },
          { icon: "👤", label: "Agents", route: null },
        ].map((item) => (
          <TouchableOpacity
            key={item.label}
            style={styles.quickAction}
            onPress={() => item.route && router.push(item.route as any)}
          >
            <View style={styles.quickActionIcon}>
              <Text style={styles.quickActionEmoji}>{item.icon}</Text>
            </View>
            <Text style={styles.quickActionLabel}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

     
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Verified Listings</Text>
        <TouchableOpacity onPress={() => router.push("/listings")}>
          <Text style={styles.seeAll}>see all ›</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {filteredProperties.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.propertyCard}
            onPress={() => router.push(`/property/${item.id}`)}
          >
            <View style={styles.propertyImage}>
              <Image source={item.image} style={styles.propertyImagePhoto} resizeMode="cover" />
              {item.verified && (
                <View style={styles.verifiedBadge}>
                  <Text style={styles.verifiedText}>✓ Verified</Text>
                </View>
              )}
              <TouchableOpacity style={styles.heartBtn}>
                <Text>🤍</Text>
              </TouchableOpacity>
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
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Safety Banner */}
      <View style={styles.safetyBanner}>
        <Text style={styles.safetyIcon}>🏡</Text>
        <View style={styles.safetyContent}>
          <Text style={styles.safetyTitle}>Your safety is our priority</Text>
          <Text style={styles.safetyText}>
            All payments are secured with escrow until you confirm
          </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.learnMore}>Learn more</Text>
        </TouchableOpacity>
      </View>

      {/* Popular Locations */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Locations</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>View map 📍</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      >
        {popularLocations.map((loc) => (
          <TouchableOpacity key={loc.id} style={styles.locationCard}>
            <Image source={loc.image} style={styles.locationImagePhoto} resizeMode="cover" />
            <Text style={styles.locationName}>{loc.name}</Text>
            <Text style={styles.locationCount}>
              {loc.count} properties
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* How It Works */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>How It Works</Text>
      </View>

      <View style={styles.howItWorks}>
        {[
          { step: "1", icon: "🔍", title: "Search", desc: "Find properties that fit your needs" },
          { step: "2", icon: "💬", title: "Connect", desc: "Chat with agents or landlords" },
          { step: "3", icon: "🛡️", title: "Secure & Rent", desc: "Pay securely and move in" },
        ].map((item) => (
          <View key={item.step} style={styles.howItWorksItem}>
            <View style={styles.howItWorksIcon}>
              <Text style={styles.howItWorksEmoji}>{item.icon}</Text>
            </View>
            <Text style={styles.howItWorksTitle}>{item.title}</Text>
            <Text style={styles.howItWorksDesc}>{item.desc}</Text>
          </View>
        ))}
      </View>

      <View style={styles.bottomPadding} />
    </ScrollView>
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
    paddingBottom: 8,
    backgroundColor: Colors.white,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  locationIcon: {
    fontSize: 14,
  },
  locationText: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  locationArrow: {
    fontSize: 12,
    color: Colors.grey500,
  },
  headerIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  iconBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  iconText: {
    fontSize: 18,
  },
 avatarBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    overflow: "hidden",
  },
  avatarImage: {
    width: 36,
    height: 36,
  },
  greetingSection: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  greeting: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 13,
    color: Colors.grey500,
  },
  searchRow: {
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    gap: 8,
  },
  searchContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 13,
    color: Colors.dark,
  },
  filterBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  filterBtnText: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
  },
  banner: {
    flexDirection: "row",
    backgroundColor: Colors.primary,
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 16,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
  },
  bannerContent: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.white,
    marginBottom: 8,
  },
  bannerBadges: {
    gap: 4,
  },
  bannerBadge: {
    fontSize: 12,
    color: Colors.white,
    opacity: 0.9,
  },
  bannerEmoji: {
    fontSize: 64,
  },
  quickActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    marginBottom: 8,
  },
  quickAction: {
    alignItems: "center",
    gap: 6,
  },
  quickActionIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  quickActionEmoji: {
    fontSize: 22,
  },
  quickActionLabel: {
    fontSize: 11,
    color: Colors.dark,
    fontWeight: "500",
    textAlign: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
  },
  seeAll: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  horizontalList: {
    paddingHorizontal: 24,
    gap: 12,
    paddingBottom: 8,
  },
  propertyCard: {
    width: 200,
    backgroundColor: Colors.white,
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: Colors.dark,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  propertyImage: {
    height: 130,
    backgroundColor: Colors.grey200,
    overflow: "hidden",
  },
  propertyImagePhoto: {
    width: "100%",
    height: "100%",
  },
  verifiedBadge: {
    position: "absolute",
    top: 8,
    left: 8,
    backgroundColor: Colors.success,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 20,
  },
  verifiedText: {
    color: Colors.white,
    fontSize: 10,
    fontWeight: "bold",
  },
  heartBtn: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyInfo: {
    padding: 12,
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
    marginBottom: 6,
  },
  propertyPrice: {
    fontSize: 16,
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
  safetyBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF2FF",
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 12,
    padding: 16,
    gap: 12,
  },
  safetyIcon: {
    fontSize: 32,
  },
  safetyContent: {
    flex: 1,
  },
  safetyTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 2,
  },
  safetyText: {
    fontSize: 12,
    color: Colors.grey500,
    lineHeight: 16,
  },
  learnMore: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "600",
  },
  locationCard: {
    width: 120,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: Colors.white,
  },
 locationImage: {
    height: 80,
    backgroundColor: Colors.grey200,
    overflow: "hidden",
  },
  locationImagePhoto: {
    width: "100%",
    height: "100%",
  },
  locationName: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.dark,
    padding: 8,
    paddingBottom: 2,
  },
  locationCount: {
    fontSize: 11,
    color: Colors.grey500,
    paddingHorizontal: 8,
    paddingBottom: 8,
  },
  howItWorks: {
    flexDirection: "row",
    paddingHorizontal: 24,
    gap: 12,
    marginBottom: 16,
  },
  howItWorksItem: {
    flex: 1,
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
  },
  howItWorksIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#EEF2FF",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  howItWorksEmoji: {
    fontSize: 20,
  },
  howItWorksTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: Colors.dark,
    textAlign: "center",
    marginBottom: 4,
  },
  howItWorksDesc: {
    fontSize: 11,
    color: Colors.grey500,
    textAlign: "center",
    lineHeight: 16,
  },
  bottomPadding: {
    height: 24,
  },
});