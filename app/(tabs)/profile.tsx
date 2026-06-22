import {
  View, Text, StyleSheet, TouchableOpacity, ScrollView
} from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const menuItems = [
  { id: "1", icon: "👤", label: "Personal Information", screen: "/personal-information" },
  { id: "2", icon: "📋", label: "My Requests", screen: "/my-requests" },
  { id: "3", icon: "🏠", label: "My Bookings", screen: "/my-bookings" },
  { id: "4", icon: "💳", label: "Payment Methods", screen: "/payment-methods" },
  { id: "5", icon: "🔔", label: "Notifications", screen: "/notifications" },
  { id: "6", icon: "⚙️", label: "Settings", screen: "/settings" },
  { id: "7", icon: "❓", label: "Help & Support", screen: "/help-support" },
  { id: "8", icon: "🚨", label: "Report a Scam", screen: "/report-scam" },
];

export default function ProfileScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>C</Text>
          </View>
          <View style={styles.verifiedBadge}>
            <Text style={styles.verifiedBadgeText}>✓</Text>
          </View>
        </View>
        <Text style={styles.profileName}>Chioma Adeyemi</Text>
        <Text style={styles.profileRole}>Renter</Text>
        <Text style={styles.profileEmail}>chioma@gmail.com</Text>
        <View style={styles.trustBadge}>
          <Text style={styles.trustIcon}>🛡️</Text>
          <Text style={styles.trustText}>Verified Renter</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => router.push("/personal-information" as any)}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>3</Text>
          <Text style={styles.statLabel}>Saved</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>1</Text>
          <Text style={styles.statLabel}>Bookings</Text>
        </View>
        <View style={styles.statDivider} />
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>5</Text>
          <Text style={styles.statLabel}>Requests</Text>
        </View>
      </View>

      <View style={styles.menuSection}>
        {menuItems.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.menuItem}
            onPress={() => router.push(item.screen as any)}
          >
            <View style={styles.menuLeft}>
              <Text style={styles.menuIcon}>{item.icon}</Text>
              <Text style={styles.menuLabel}>{item.label}</Text>
            </View>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={() => router.replace("/(auth)/login" as any)}>
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>SafeNest v1.0.0</Text>
        <Text style={styles.footerText}>Where Trust Builds Homes</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16, backgroundColor: Colors.white },
  headerTitle: { fontSize: 20, fontWeight: "bold", color: Colors.dark },
  profileSection: { backgroundColor: Colors.white, alignItems: "center", paddingVertical: 24, paddingHorizontal: 24, marginBottom: 12 },
  avatarContainer: { marginBottom: 12 },
  avatar: { width: 80, height: 80, borderRadius: 40, backgroundColor: Colors.primary, alignItems: "center", justifyContent: "center" },
  avatarText: { fontSize: 32, fontWeight: "bold", color: Colors.white },
  verifiedBadge: { position: "absolute", bottom: 0, right: 0, width: 24, height: 24, borderRadius: 12, backgroundColor: Colors.success, alignItems: "center", justifyContent: "center", borderWidth: 2, borderColor: Colors.white },
  verifiedBadgeText: { color: Colors.white, fontSize: 12, fontWeight: "bold" },
  profileName: { fontSize: 20, fontWeight: "bold", color: Colors.dark, marginBottom: 4 },
  profileRole: { fontSize: 14, color: Colors.primary, fontWeight: "600", marginBottom: 4 },
  profileEmail: { fontSize: 13, color: Colors.grey500, marginBottom: 12 },
  trustBadge: { flexDirection: "row", alignItems: "center", backgroundColor: "#EEF2FF", paddingHorizontal: 12, paddingVertical: 6, borderRadius: 20, gap: 6, marginBottom: 16 },
  trustIcon: { fontSize: 14 },
  trustText: { fontSize: 13, color: Colors.primary, fontWeight: "600" },
  editButton: { borderWidth: 1.5, borderColor: Colors.primary, paddingHorizontal: 24, paddingVertical: 8, borderRadius: 20 },
  editButtonText: { fontSize: 14, color: Colors.primary, fontWeight: "600" },
  statsRow: { flexDirection: "row", backgroundColor: Colors.white, paddingVertical: 16, marginBottom: 12 },
  statItem: { flex: 1, alignItems: "center" },
  statNumber: { fontSize: 20, fontWeight: "bold", color: Colors.dark, marginBottom: 4 },
  statLabel: { fontSize: 12, color: Colors.grey500 },
  statDivider: { width: 1, backgroundColor: Colors.grey200 },
  menuSection: { backgroundColor: Colors.white, marginBottom: 12 },
  menuItem: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: Colors.grey200 },
  menuLeft: { flexDirection: "row", alignItems: "center", gap: 12 },
  menuIcon: { fontSize: 20 },
  menuLabel: { fontSize: 15, color: Colors.dark, fontWeight: "500" },
  menuArrow: { fontSize: 20, color: Colors.grey500 },
  logoutButton: { backgroundColor: Colors.white, marginHorizontal: 24, paddingVertical: 16, borderRadius: 12, alignItems: "center", borderWidth: 1.5, borderColor: Colors.error, marginBottom: 24 },
  logoutText: { fontSize: 16, fontWeight: "600", color: Colors.error },
  footer: { alignItems: "center", paddingBottom: 32, gap: 4 },
  footerText: { fontSize: 12, color: Colors.grey500 },
});