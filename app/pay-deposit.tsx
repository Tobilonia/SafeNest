import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const paymentMethods = [
  { id: "card", label: "Card", icon: "💳" },
  { id: "transfer", label: "Bank Transfer", icon: "🏦" },
  { id: "ussd", label: "USSD", icon: "📱" },
  { id: "wallet", label: "Wallet", icon: "👛" },
];

export default function PayDepositScreen() {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pay Holding Deposit</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.propertyCard}>
        <View style={styles.propertyImage}>
          <Text style={styles.propertyEmoji}>🏢</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.propertySubtitle}>
            Property: 2 Bedroom Apartment, Lekki Phase 1
          </Text>
        </View>
      </View>

      <View style={styles.amountSection}>
        <Text style={styles.amountLabel}>Amount</Text>
        <Text style={styles.amountValue}>₦1,000,000</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Select Payment Method</Text>
        {paymentMethods.map((method) => (
          <TouchableOpacity
            key={method.id}
            style={[
              styles.methodItem,
              selectedMethod === method.id && styles.methodItemSelected,
            ]}
            onPress={() => setSelectedMethod(method.id)}
          >
            <View style={styles.methodLeft}>
              <View
                style={[
                  styles.radio,
                  selectedMethod === method.id && styles.radioSelected,
                ]}
              >
                {selectedMethod === method.id && (
                  <View style={styles.radioDot} />
                )}
              </View>
              <Text style={styles.methodIcon}>{method.icon}</Text>
              <Text style={styles.methodLabel}>{method.label}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.secureNotice}>
        <Text style={styles.secureIcon}>🔒</Text>
        <Text style={styles.secureText}>
          Your payment is secured by Paystack and held in escrow
          until you confirm move-in
        </Text>
      </View>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => router.replace({
          pathname: "/payment-success" as any
        })}
      >
        <Text style={styles.payButtonText}>Pay ₦1,000,000</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backHome}
        onPress={() => router.replace("/(tabs)")}
      >
        <Text style={styles.backHomeText}>Back to Home</Text>
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
    padding: 16,
    alignItems: "center",
    gap: 12,
  },
  propertyImage: {
    width: 48,
    height: 48,
    backgroundColor: Colors.grey200,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyEmoji: {
    fontSize: 24,
  },
  propertyInfo: {
    flex: 1,
  },
  propertySubtitle: {
    fontSize: 13,
    color: Colors.grey500,
  },
  amountSection: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  amountLabel: {
    fontSize: 14,
    color: Colors.grey500,
    marginBottom: 4,
  },
  amountValue: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.dark,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 16,
  },
  methodItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  methodItemSelected: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  methodLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  radioSelected: {
    borderColor: Colors.primary,
  },
  radioDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.primary,
  },
  methodIcon: {
    fontSize: 20,
  },
  methodLabel: {
    fontSize: 15,
    color: Colors.dark,
    fontWeight: "500",
  },
  secureNotice: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#EEF2FF",
    marginHorizontal: 24,
    borderRadius: 12,
    padding: 16,
    gap: 10,
    marginBottom: 24,
  },
  secureIcon: {
    fontSize: 18,
  },
  secureText: {
    flex: 1,
    fontSize: 13,
    color: Colors.primary,
    lineHeight: 20,
  },
  payButton: {
    backgroundColor: Colors.primary,
    marginHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 12,
  },
  payButtonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  backHome: {
    alignItems: "center",
  },
  backHomeText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
});