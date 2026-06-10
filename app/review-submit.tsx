import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

export default function ReviewSubmitScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Review & Submit</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.propertyCard}>
        <View style={styles.propertyImage}>
          <Text style={styles.propertyEmoji}>🏢</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.propertyTitle}>2 Bedroom Apartment</Text>
          <Text style={styles.propertyLocation}>
            📍 Lekki Phase 1, Lagos
          </Text>
          <Text style={styles.propertyPrice}>₦2,500,000 /year</Text>
          <View style={styles.propertyDetails}>
            <Text style={styles.detailText}>🛏 2</Text>
            <Text style={styles.detailText}>🚿 2</Text>
            <Text style={styles.detailText}>📐 120m²</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Request Details</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Move-in date</Text>
          <Text style={styles.detailValue}>12 July 2026</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Rental Duration</Text>
          <Text style={styles.detailValue}>1 Year</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Message to Agent</Text>
          <Text style={styles.detailValue} numberOfLines={2}>
            Hi, I'm interested in this property and would like to
            schedule a viewing
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Information</Text>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Full Name</Text>
          <Text style={styles.detailValue}>Olamide Kanaruwi</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Phone Number</Text>
          <Text style={styles.detailValue}>+234 910 234 8901</Text>
        </View>
        <View style={styles.detailRow}>
          <Text style={styles.detailLabel}>Email Address</Text>
          <Text style={styles.detailValue}>olamide@gmail.com</Text>
        </View>
      </View>

      <View style={styles.depositBox}>
        <Text style={styles.depositTitle}>Holding Deposit</Text>
        <Text style={styles.depositAmount}>₦1,000,000</Text>
        <Text style={styles.depositNote}>
          This amount will be held securely until your request
          is accepted.
        </Text>
        <TouchableOpacity>
          <Text style={styles.learnMore}>Learn more</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.termsText}>
        By submitting this request, you agree to our{" "}
        <Text style={styles.termsLink}>Terms of Service</Text>
        {" "}and{" "}
        <Text style={styles.termsLink}>Privacy Policy</Text>
      </Text>

      <TouchableOpacity
        style={styles.submitButton}
        onPress={() => router.push({
          pathname: "/pay-deposit" as any
        })}
      >
        <Text style={styles.submitButtonText}>Submit Request</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backHome}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.backHomeText}>Back to Home</Text>
      </TouchableOpacity>

      <View style={styles.secureNotice}>
        <Text style={styles.secureText}>🔒 Secure & Encrypted</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
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
  propertyCard: {
    flexDirection: "row",
    margin: 24,
    backgroundColor: Colors.background,
    borderRadius: 12,
    overflow: "hidden",
  },
  propertyImage: {
    width: 90,
    height: 90,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyEmoji: {
    fontSize: 32,
  },
  propertyInfo: {
    flex: 1,
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
    marginBottom: 4,
  },
  propertyPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 4,
  },
  propertyDetails: {
    flexDirection: "row",
    gap: 8,
  },
  detailText: {
    fontSize: 11,
    color: Colors.grey500,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 12,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  detailLabel: {
    fontSize: 14,
    color: Colors.grey500,
    flex: 1,
  },
  detailValue: {
    fontSize: 14,
    color: Colors.dark,
    fontWeight: "500",
    flex: 1,
    textAlign: "right",
  },
  depositBox: {
    marginHorizontal: 24,
    backgroundColor: "#EEF2FF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  depositTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 8,
  },
  depositAmount: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 8,
  },
  depositNote: {
    fontSize: 13,
    color: Colors.grey500,
    lineHeight: 20,
    marginBottom: 8,
  },
  learnMore: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  termsText: {
    fontSize: 13,
    color: Colors.grey500,
    textAlign: "center",
    paddingHorizontal: 24,
    marginBottom: 24,
    lineHeight: 20,
  },
  termsLink: {
    color: Colors.primary,
    fontWeight: "600",
  },
  submitButton: {
    backgroundColor: Colors.primary,
    marginHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  submitButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  backHome: {
    alignItems: "center",
    marginBottom: 16,
  },
  backHomeText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
  secureNotice: {
    alignItems: "center",
  },
  secureText: {
    fontSize: 13,
    color: Colors.grey500,
  },
});