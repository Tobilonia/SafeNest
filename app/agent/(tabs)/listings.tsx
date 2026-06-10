import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ListingsScreen() {
  const [selectedTab, setSelectedTab] = useState("All");

  const listings = [
    {
      id: 1,
      title: "Lake Side Penthouse",
      location: "Victoria Island",
      price: "₦8,000,000 / year",
      image: "https://picsum.photos/300/200?1",
    },
    {
      id: 2,
      title: "3 bedroom Duplex",
      location: "Ikoyi",
      price: "₦10,000,000 / year",
      image: "https://picsum.photos/300/200?2",
    },
    {
      id: 3,
      title: "Studio Apartment",
      location: "Lekki Phase 2",
      price: "₦4,500,000 / year",
      image: "https://picsum.photos/300/200?3",
    },
    {
      id: 4,
      title: "Mini Flat",
      location: "Surulere",
      price: "₦2,000,000 / year",
      image: "https://picsum.photos/300/200?4",
    },
  ];

  const filters = [
    "All",
    "Active",
    "Taken",
    "Pending",
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.header}>
          My Listings
        </Text>

        {/* Filters */}
        <View style={styles.filterRow}>
          {filters.map((item) => (
            <TouchableOpacity
              key={item}
              style={[
                styles.filterButton,
                selectedTab === item &&
                  styles.activeFilter,
              ]}
              onPress={() =>
                setSelectedTab(item)
              }
            >
              <Text
                style={[
                  styles.filterText,
                  selectedTab === item &&
                    styles.activeFilterText,
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Property Cards */}
        {listings.map((property) => (
          <View
            key={property.id}
            style={styles.card}
          >
            <View style={styles.imageContainer}>
                <Image
                  source={{ uri: property.image }}
                  style={styles.image}
                />
                
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    ✓ Verified
                  </Text>
                </View>
            </View>

          
            
            <View style={styles.info}>
              <Text style={styles.title}>
                {property.title}
              </Text>

              <Text style={styles.location}>
                {property.location}
              </Text>

              <Text style={styles.price}>
                {property.price}
              </Text>

              <TouchableOpacity
                style={styles.editButton}
              >
                <Text
                  style={styles.editText}
                >
                  Edit
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          router.push(
            "/agent/verify-property"
          )
        }
      >
        <Ionicons
          name="add"
          size={40}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    fontSize: 42,
    fontWeight: "700",
    marginBottom: 25,
  },

  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },

  filterButton: {
  borderWidth: 1,
  borderColor: "#D8D8D8",
  minWidth: 90,
  height: 55,
  borderRadius: 14,
  justifyContent: "center",
  alignItems: "center",
},

  activeFilter: {
    backgroundColor: "#EEF2FF",
    borderColor: "#EEF2FF",
  },

  filterText: {
    fontSize: 16,
    color: "#999",
    fontWeight: "600",
  },

  activeFilterText: {
    color: "#000",
  },

  card: {
    flexDirection: "row",
    marginBottom: 35,
    alignItems:"flex-start",
  },

  image: {
    width: 130,
    height: 170,
    borderRadius: 18,
  },

  info: {
    flex: 1,
    marginLeft: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
  },

  location: {
    color: "#A0A0A0",
    fontSize: 18,
    marginTop: 5,
  },

  price: {
    color: "#3559E0",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 12,
  },

  editButton: {
    backgroundColor: "#3559E0",
    width: "100%",
    height: 52,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 12,
  },

  editText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },

  fab: {
    position: "absolute",
    right: 25,
    bottom:150,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#3559E0",
    justifyContent: "center",
    alignItems: "center",
    zIndex:999,
  },
  imageContainer: {
  position: "relative",
},

badge: {
  position: "absolute",
  bottom: 8,
  left: 8,
  backgroundColor: "#22c55e",
  paddingHorizontal: 8,
  paddingVertical: 3,
  borderRadius: 12,
},

badgeText: {
  color: "#fff",
  fontSize: 10,
  fontWeight: "600",
},
});