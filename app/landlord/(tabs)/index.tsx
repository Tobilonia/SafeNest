import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function LandlordHome() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={true}
    >
      {/* Header */}

      <View style={styles.header}>
        <View>
          <Text style={styles.logo}>SafeNest</Text>
          <Text style={styles.greeting}>Hello Olawale</Text>
        </View>

        <View style={styles.headerRight}>
          <Ionicons name="notifications" size={26} color="black" />

          <Image
            source={{
              uri: "https://picsum.photos/100",
            }}
            style={styles.avatar}
          />
        </View>
      </View>

      {/* Top Cards */}

      <View style={styles.topCards}>
        <View style={styles.verifiedCard}>
          <Text style={styles.verifiedTitle}>
            ✅ Verified Landlord
          </Text>

          <Text style={styles.verifiedText}>
            Your profile is verified and trusted.
          </Text>
        </View>

        <View style={styles.listingCard}>
          <Text style={styles.listingTitle}>
            Nationwide Listings!
          </Text>

          <TouchableOpacity style={styles.readButton}>
            <Text style={styles.readText}>
              Read About Us
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Earnings */}

      <View style={styles.earningsCard}>
        <Text style={styles.earningsTitle}>
          Earnings Overview
        </Text>
        <Ionicons
             name="home"
             size={140}
            color="rgba(255,255,255,0.08)"
            style={{
            position: "absolute",
            right: 10,
            top: 10,
                }}
        />
        <Text style={styles.amount}>₦0.00</Text>

        <Text style={styles.total}>
          Total Earnings
        </Text>

        <View style={styles.monthBadge}>
          <Text>↑ 0% this month</Text>
        </View>
      </View>

      {/* Stats */}

      <View style={styles.statsRow}>
        <View style={[styles.statBox, { backgroundColor: "#E8F6EC" }]}>
          <Text style={styles.statNumber}>4</Text>
          <Text>Active Listings</Text>
        </View>

        <View style={[styles.statBox, { backgroundColor: "#EEF0FF" }]}>
          <Text style={styles.statNumber}>0</Text>
          <Text>New Inquiries</Text>
        </View>

        <View style={[styles.statBox, { backgroundColor: "#E7FFFF" }]}>
          <Text style={styles.statNumber}>1</Text>
          <Text>Profile Views</Text>
        </View>

        <View style={[styles.statBox, { backgroundColor: "#FFF1D8" }]}>
          <Text style={styles.statNumber}>₦0</Text>
          <Text>Earnings</Text>
        </View>
      </View>

      {/* My Listings */}

<Text style={styles.sectionTitle}>
  My Listings
</Text>

<ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
>
  {[1, 2, 3].map((item) => (
    <View key={item} style={styles.propertyCard}>
      <Image
        source={{
          uri: `https://picsum.photos/300/200?random=${item}`,
        }}
        style={styles.propertyImage}
      />

      <View style={styles.activeBadge}>
        <Text style={styles.activeText}>
          Active
        </Text>
      </View>

      <Text style={styles.propertyName}>
        3 Bedroom Apartment
      </Text>

      <Text style={styles.location}>
        Surulere, Lagos
      </Text>

      <Text style={styles.propertyPrice}>
        ₦3,500,000 / year
      </Text>

      <View style={styles.featuresRow}>
        <Text>3 Beds</Text>
        <Text>2 Baths</Text>
        <Text>Parking</Text>
      </View>
    </View>
  ))}
</ScrollView>

      {/* Quick Actions */}

      <Text style={styles.sectionTitle}>
        Quick Actions
      </Text>

      <View style={styles.quickActions}>
        {[
          "Create Listing",
          "My Listings",
          "Messages",
          "Availability",
          "Earnings",
        ].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.quickAction}
          >
            <Text style={styles.quickText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Recent Inquiries */}

      <Text style={styles.sectionTitle}>
        Recent Inquiries
      </Text>

      <View style={styles.inquiryCard}>
        <Text style={styles.inquiryName}>
          Emeka Johnson
        </Text>

        <Text style={styles.inquiryMessage}>
          Hello, is this apartment available?
        </Text>
      </View>

      <View style={{ height: 30 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },

  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },

  logo: {
    fontSize: 24,
    fontWeight: "700",
  },

  greeting: {
    fontSize: 32,
    fontWeight: "700",
    marginTop: 20,
  },

  topCards: {
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },

  verifiedCard: {
    flex: 1,
    height: 140,
    backgroundColor: "#B7F4C7",
    borderRadius: 20,
    padding: 15,
  },

  verifiedTitle: {
    fontSize: 16,
    fontWeight: "700",
  },

  verifiedText: {
    marginTop: 10,
  },

  listingCard: {
    flex: 1.1,
    height:95,
    backgroundColor: "#F3F5FF",
    borderRadius: 20,
    padding: 15,
  },

  listingTitle: {
    fontSize: 22,
    fontWeight: "700",
  },

  readButton: {
    backgroundColor: "#DDE3FF",
    alignSelf: "flex-start",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
    marginTop: 15,
  },

  readText: {
    color: "#3559E0",
  },

  earningsCard: {
    backgroundColor: "#1E40D0",
    borderRadius: 20,
    padding: 20,
    marginTop: 20,
  },

  earningsTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  amount: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "700",
    marginTop: 10,
  },

  total: {
    color: "#fff",
  },

  monthBadge: {
    backgroundColor: "#B7F4C7",
    alignSelf: "flex-start",
    marginTop: 15,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },

  statsRow: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: 20,
},

statBox: {
  width: 85,
  height: 120,
  borderRadius: 15,
  justifyContent: "center",
  alignItems: "center",
},

  statNumber: {
    fontSize: 22,
    fontWeight: "700",
  },

  sectionTitle: {
    fontSize: 28,
    fontWeight: "700",
    marginTop: 30,
    marginBottom: 15,
  },

  propertyCard: {
  width: 230,
  backgroundColor: "#fff",
  borderRadius: 20,
  overflow: "hidden",
  marginRight: 15,
  paddingBottom: 15,
},

  propertyImage: {
  width: "100%",
  height: 150,
  borderRadius: 20,
},

  propertyName: {
    fontSize: 16,
    fontWeight: "700",
    marginTop: 10,
    marginHorizontal:12,
  },

  propertyPrice: {
  color: "#3559E0",
  fontSize: 16,
  fontWeight: "700",
  marginHorizontal: 12,
  marginTop: 8,
},
  quickActions: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },

  quickAction: {
    backgroundColor: "#3559E0",
    padding: 20,
    borderRadius: 20,
    width: "30%",
  },

  quickText: {
    color: "#fff",
    textAlign: "center",
  },

  inquiryCard: {
    backgroundColor: "#F5FAFF",
    padding: 20,
    borderRadius: 15,
  },

  inquiryName: {
    fontSize: 18,
    fontWeight: "700",
  },

  inquiryMessage: {
    marginTop: 8,
  },
  activeBadge: {
  position: "absolute",
  top: 10,
  left: 10,
  backgroundColor: "#3CCF6E",
  paddingHorizontal: 10,
  paddingVertical: 4,
  borderRadius: 20,
},

activeText: {
  color: "#fff",
  fontSize: 12,
  fontWeight: "600",
},

location: {
  color: "#777",
  marginTop: 4,
  marginHorizontal:12,
},

featuresRow: {
  flexDirection: "row",
  justifyContent: "space-around",
  marginTop: 12,
},
});