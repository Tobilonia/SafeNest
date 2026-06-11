import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const listings = [
  {
    id: 1,
    title: "2 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "₦2,500,000 /year",
    views: 125,
    status: "Published",
    image: "https://picsum.photos/300/200?1",
  },
  {
    id: 2,
    title: "Mini Flat in Yaba",
    location: "Yaba, Lagos",
    price: "₦1,000,000 /year",
    views: 180,
    status: "Published",
    image: "https://picsum.photos/300/200?2",
  },
  {
    id: 3,
    title: "2 Bedroom Duplex",
    location: "Ikoyi, Lagos",
    price: "₦3,500,000 /year",
    views: 67,
    status: "Published",
    image: "https://picsum.photos/300/200?3",
  },
  {
    id: 4,
    title: "Studio Apartment",
    location: "Victoria Island, Lagos",
    price: "₦850,000 /year",
    views: 98,
    status: "Published",
    image: "https://picsum.photos/300/200?4",
  },
  {
    id: 5,
    title: "3 Bedroom Duplex",
    location: "Lekki Phase 1, Lagos",
    price: "₦4,500,000 /year",
    views: 0,
    status: "Draft",
    image: "https://picsum.photos/300/200?5",
  },
];

export default function ListingsScreen() {
  return (
    <ScrollView>
           <View style={styles.container}>
      {/* Header */}

      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={30}
          color="#000"
        />

        <Text style={styles.title}>
          My Listings
        </Text>

        <TouchableOpacity style={styles.addButton}>
          <Ionicons
            name="add"
            size={30}
            color="#fff"
          />
        </TouchableOpacity>
      </View>

      {/* Tabs */}

      <View style={styles.tabs}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>
            Listed
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>
            Drafts
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.tab}>
          <Text style={styles.tabText}>
            Sold/Rented
          </Text>
        </TouchableOpacity>
      </View>

      {/* Listings */}

      <FlatList
        showsVerticalScrollIndicator={false}
        data={listings}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <View
              style={[
                styles.badge,
                {
                  backgroundColor:
                    item.status === "Draft"
                      ? "#666"
                      : "#35C759",
                },
              ]}
            >
              <Text style={styles.badgeText}>
                {item.status}
              </Text>
            </View>

            <View style={styles.info}>
              <Text style={styles.propertyTitle}>
                {item.title}
              </Text>

              <Text style={styles.location}>
                {item.location}
              </Text>

              <Text style={styles.price}>
                {item.price}
              </Text>

              <View style={styles.bottomRow}>
                <Text style={styles.views}>
                  👁 {item.views}
                </Text>

                <TouchableOpacity>
                  <Ionicons
                    name="ellipsis-horizontal"
                    size={22}
                    color="#000"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />
    </View>
    </ScrollView>
 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
  },

  addButton: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: "#3559E0",
    justifyContent: "center",
    alignItems: "center",
  },

  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  activeTab: {
    backgroundColor: "#EEF0FF",
    paddingHorizontal: 25,
    paddingVertical: 12,
    borderRadius: 15,
  },

  activeTabText: {
    color: "#3559E0",
    fontWeight: "700",
    fontSize: 16,
  },

  tab: {
    paddingHorizontal: 15,
    paddingVertical: 12,
  },

  tabText: {
    color: "#777",
    fontSize: 16,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 10,
    marginBottom: 18,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 5,
  },

  image: {
    width: 120,
    height: 100,
    borderRadius: 12,
  },

  info: {
    flex: 1,
    marginLeft: 12,
    justifyContent: "center",
  },

  propertyTitle: {
    fontSize: 20,
    fontWeight: "700",
  },

  location: {
    color: "#888",
    marginTop: 4,
  },

  price: {
    color: "#3559E0",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 8,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  views: {
    color: "#555",
  },

  badge: {
    position: "absolute",
    left: 20,
    top: 85,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    zIndex: 1,
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "600",
  },
});