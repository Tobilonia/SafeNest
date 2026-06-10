import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Colors from "../../constants/colors";

export default function PropertyDetailScreen() {
  const { id } = useLocalSearchParams();
  const [saved, setSaved] = useState(false);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <Text style={styles.imagePlaceholder}>🏢</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.imageCounter}>
          <Text style={styles.imageCounterText}>1/12</Text>
        </View>
        <View style={styles.verifiedBadge}>
          <Text style={styles.verifiedText}>✓ Verified Property</Text>
        </View>
        <TouchableOpacity
          style={styles.shareBtn}
          onPress={() => setSaved(!saved)}
        >
          <Text style={styles.shareBtnText}>⤴</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.heartBtn}
          onPress={() => setSaved(!saved)}
        >
          <Text style={styles.heartBtnText}>
            {saved ? "❤️" : "🤍"}
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.location}>📍 Lekki Phase 1, Lagos</Text>
        <Text style={styles.title}>2 Bedroom Apartment</Text>
        <Text style={styles.price}>
          ₦2,500,000
          <Text style={styles.perYear}> /year</Text>
        </Text>

        <View style={styles.detailsRow}>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🛏</Text>
            <Text style={styles.detailText}>2 Beds</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>🚿</Text>
            <Text style={styles.detailText}>2 Baths</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>📐</Text>
            <Text style={styles.detailText}>120m²</Text>
          </View>
          <View style={styles.detailItem}>
            <Text style={styles.detailIcon}>⭐</Text>
            <Text style={styles.detailText}>4.5</Text>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.description}>
          Spacious and well maintained 2 bedroom apartment in a serene
          environment. Features modern finishings, 24/7 electricity,
          and easy access to major roads and markets.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Amenities</Text>
        <View style={styles.amenitiesGrid}>
          {["24/7 Power", "Parking", "Security", "Water", "WiFi", "Kitchen"].map(
            (amenity) => (
              <View key={amenity} style={styles.amenityItem}>
                <Text style={styles.amenityText}>✓ {amenity}</Text>
              </View>
            )
          )}
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Verification</Text>
        <View style={styles.verificationSection}>
          <View style={styles.verificationItem}>
            <Text style={styles.verificationIcon}>🛡️</Text>
            <View>
              <Text style={styles.verificationLabel}>Verified Property</Text>
              <Text style={styles.verificationSub}>
                Ownership documents verified
              </Text>
            </View>
          </View>
          <View style={styles.verificationItem}>
            <Text style={styles.verificationIcon}>✅</Text>
            <View>
              <Text style={styles.verificationLabel}>Authenticity Score</Text>
              <Text style={styles.verificationSub}>95% — High Trust</Text>
            </View>
          </View>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Agent</Text>
        <View style={styles.agentCard}>
          <View style={styles.agentAvatar}>
            <Text style={styles.agentAvatarText}>A</Text>
          </View>
          <View style={styles.agentInfo}>
            <Text style={styles.agentName}>Alexa Johnson</Text>
            <Text style={styles.agentRole}>✓ Verified Agent</Text>
            <Text style={styles.agentRating}>⭐ 4.8 (120)</Text>
          </View>
          <TouchableOpacity style={styles.chatAgentBtn}>
            <Text style={styles.chatAgentText}>💬</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>Reviews</Text>
        <View style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewerName}>Olamide K.</Text>
            <Text style={styles.reviewRating}>⭐ 5.0</Text>
          </View>
          <Text style={styles.reviewText}>
            SafeNest gave me the confidence to pay my deposit.
            Everything was verified and transparent.
          </Text>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.reportLink}>
          <Text style={styles.reportLinkText}>
            🚨 Found something suspicious? Report scam
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>💬 Chat</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.requestButton}
         onPress={() => router.push({pathname: "/request-to-rent" as any})}
        >
          <Text style={styles.requestButtonText}>Request to Rent</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  imageContainer: {
    height: 280,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  imagePlaceholder: {
    fontSize: 64,
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  backText: {
    fontSize: 20,
    color: Colors.dark,
  },
  imageCounter: {
    position: "absolute",
    top: 48,
    right: 60,
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  imageCounterText: {
    color: Colors.white,
    fontSize: 12,
    fontWeight: "600",
  },
  shareBtn: {
    position: "absolute",
    top: 48,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  shareBtnText: {
    fontSize: 16,
    color: Colors.dark,
  },
  heartBtn: {
    position: "absolute",
    bottom: 16,
    right: 16,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
  },
  heartBtnText: {
    fontSize: 18,
  },
  verifiedBadge: {
    position: "absolute",
    bottom: 16,
    left: 16,
    backgroundColor: Colors.success,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  verifiedText: {
    color: Colors.white,
    fontSize: 11,
    fontWeight: "bold",
  },
  content: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
    padding: 24,
  },
  location: {
    fontSize: 13,
    color: Colors.grey500,
    marginBottom: 6,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 8,
  },
  price: {
    fontSize: 26,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 16,
  },
  perYear: {
    fontSize: 14,
    color: Colors.grey500,
    fontWeight: "normal",
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Colors.background,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  detailItem: {
    alignItems: "center",
    gap: 6,
  },
  detailIcon: {
    fontSize: 20,
  },
  detailText: {
    fontSize: 12,
    color: Colors.grey500,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: Colors.grey200,
    marginVertical: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 12,
  },
  description: {
    fontSize: 14,
    color: Colors.grey500,
    lineHeight: 22,
  },
  amenitiesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  amenityItem: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  amenityText: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "500",
  },
  verificationSection: {
    gap: 12,
  },
  verificationItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    backgroundColor: Colors.background,
    padding: 12,
    borderRadius: 12,
  },
  verificationIcon: {
    fontSize: 24,
  },
  verificationLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  verificationSub: {
    fontSize: 12,
    color: Colors.grey500,
  },
  agentCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
    gap: 12,
  },
  agentAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  agentAvatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  agentInfo: {
    flex: 1,
  },
  agentName: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.dark,
  },
  agentRole: {
    fontSize: 12,
    color: Colors.success,
    fontWeight: "500",
  },
  agentRating: {
    fontSize: 12,
    color: Colors.grey500,
  },
  chatAgentBtn: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  chatAgentText: {
    fontSize: 18,
  },
  reviewCard: {
    backgroundColor: Colors.background,
    padding: 16,
    borderRadius: 12,
  },
  reviewHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  reviewerName: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  reviewRating: {
    fontSize: 13,
    color: Colors.dark,
  },
  reviewText: {
    fontSize: 13,
    color: Colors.grey500,
    lineHeight: 20,
  },
  reportLink: {
    alignItems: "center",
    paddingVertical: 8,
  },
  reportLinkText: {
    fontSize: 13,
    color: Colors.error,
    fontWeight: "500",
  },
  actionButtons: {
    flexDirection: "row",
    padding: 24,
    gap: 12,
    backgroundColor: Colors.white,
    paddingBottom: 40,
  },
  chatButton: {
    flex: 1,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  chatButtonText: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: "bold",
  },
  requestButton: {
    flex: 2,
    backgroundColor: Colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
  },
  requestButtonText: {
    color: Colors.white,
    fontSize: 15,
    fontWeight: "bold",
  },
});