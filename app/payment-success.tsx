import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

export default function PaymentSuccessScreen() {
  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.successContainer}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>✓</Text>
        </View>
        <Text style={styles.title}>Payment Successful!</Text>
      </View>

      <View style={styles.depositCard}>
        <View style={styles.depositHeader}>
          <Text style={styles.depositLabel}>Holding Deposit</Text>
          <View style={styles.depositBadge}>
            <Text style={styles.depositBadgeText}>🔒 Held Securely</Text>
          </View>
        </View>

        <View style={styles.depositProperty}>
          <View style={styles.propertyImage}>
            <Text style={styles.propertyEmoji}>🏢</Text>
          </View>
          <Text style={styles.propertyName}>
            2 Bedroom Apartment, Lekki
          </Text>
        </View>

        <Text style={styles.depositAmount}>₦1,000,000</Text>

        <View style={styles.escrowSteps}>
          <View style={styles.escrowStep}>
            <View style={styles.escrowStepDot} />
            <Text style={styles.escrowStepText}>Paid</Text>
          </View>
          <View style={styles.escrowLine} />
          <View style={styles.escrowStep}>
            <View style={[styles.escrowStepDot, styles.escrowStepActive]} />
            <Text style={styles.escrowStepText}>In-escrow</Text>
          </View>
          <View style={styles.escrowLine} />
          <View style={styles.escrowStep}>
            <View style={styles.escrowStepDotInactive} />
            <Text style={styles.escrowStepText}>Agreement</Text>
          </View>
          <View style={styles.escrowLine} />
          <View style={styles.escrowStep}>
            <View style={styles.escrowStepDotInactive} />
            <Text style={styles.escrowStepText}>Released</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.viewTransaction}>
          <Text style={styles.viewTransactionText}>
            View Transaction ›
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.primaryButtonText}>View My Requests</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.secondaryButton}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.secondaryButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 40,
    alignItems: "center",
  },
  successContainer: {
    alignItems: "center",
    marginBottom: 32,
  },
  iconContainer: {
    width: 96,
    height: 96,
    borderRadius: 48,
    backgroundColor: Colors.success,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  icon: {
    fontSize: 48,
    color: Colors.white,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark,
  },
  depositCard: {
    width: "100%",
    backgroundColor: Colors.background,
    borderRadius: 16,
    padding: 20,
    marginBottom: 32,
  },
  depositHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  depositLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
  },
  depositBadge: {
    backgroundColor: Colors.success,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  depositBadgeText: {
    fontSize: 11,
    color: Colors.white,
    fontWeight: "600",
  },
  depositProperty: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 12,
  },
  propertyImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyEmoji: {
    fontSize: 20,
  },
  propertyName: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  depositAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 20,
  },
  escrowSteps: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  escrowStep: {
    alignItems: "center",
    gap: 4,
  },
  escrowStepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.success,
  },
  escrowStepActive: {
    backgroundColor: Colors.primary,
  },
  escrowStepDotInactive: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.grey200,
  },
  escrowLine: {
    flex: 1,
    height: 2,
    backgroundColor: Colors.grey200,
    marginBottom: 16,
  },
  escrowStepText: {
    fontSize: 10,
    color: Colors.grey500,
  },
  viewTransaction: {
    alignItems: "center",
  },
  viewTransactionText: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  primaryButton: {
    width: "100%",
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  primaryButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  secondaryButton: {
    width: "100%",
    borderWidth: 1.5,
    borderColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  secondaryButtonText: {
    color: Colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
});