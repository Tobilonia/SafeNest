import {
  View, Text, StyleSheet, TouchableOpacity, FlatList
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

type BookingStatus = "active" | "upcoming" | "completed" | "cancelled";

interface Booking {
  id: string;
  propertyTitle: string;
  location: string;
  price: string;
  startDate: string;
  endDate: string;
  landlord: string;
  status: BookingStatus;
}

const MOCK_BOOKINGS: Booking[] = [
  { id: "1", propertyTitle: "3 Bedroom Duplex", location: "Ikeja GRA, Lagos", price: "₦4,200,000/yr", startDate: "01 Jan 2025", endDate: "31 Dec 2025", landlord: "Mr. Bello Afolabi", status: "active" },
  { id: "2", propertyTitle: "2 Bedroom Apartment", location: "Lekki Phase 1, Lagos", price: "₦2,500,000/yr", startDate: "01 Aug 2025", endDate: "31 Jul 2026", landlord: "Mrs. Ngozi Eze", status: "upcoming" },
  { id: "3", propertyTitle: "1 Bedroom Studio", location: "Surulere, Lagos", price: "₦750,000/yr", startDate: "01 Jan 2024", endDate: "31 Dec 2024", landlord: "Mr. Seun Adeyemi", status: "completed" },
];

const STATUS_CONFIG: Record<BookingStatus, { label: string; color: string; bg: string }> = {
  active: { label: "Active", color: Colors.success, bg: "#F0FAF0" },
  upcoming: { label: "Upcoming", color: Colors.primary, bg: "#EEF2FF" },
  completed: { label: "Completed", color: Colors.grey500, bg: Colors.background },
  cancelled: { label: "Cancelled", color: Colors.error, bg: "#FFF0F0" },
};

function BookingCard({ item }: { item: Booking }) {
  const status = STATUS_CONFIG[item.status];
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <View style={styles.propertyImage}><Text style={styles.propertyEmoji}>🏠</Text></View>
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle} numberOfLines={1}>{item.propertyTitle}</Text>
          <Text style={styles.cardLocation}>📍 {item.location}</Text>
          <Text style={styles.cardPrice}>{item.price}</Text>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: status.bg }]}>
          <Text style={[styles.statusText, { color: status.color }]}>{status.label}</Text>
        </View>
      </View>
      <View style={styles.cardDivider} />
      <View style={styles.detailsGrid}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Start Date</Text>
          <Text style={styles.detailValue}>{item.startDate}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>End Date</Text>
          <Text style={styles.detailValue}>{item.endDate}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Landlord</Text>
          <Text style={styles.detailValue}>{item.landlord}</Text>
        </View>
      </View>
      <View style={styles.cardActions}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => router.push("/chat/1" as any)}>
          <Text style={styles.actionBtnText}>💬 Message</Text>
        </TouchableOpacity>
        {item.status === "active" && (
          <TouchableOpacity style={styles.actionBtnPrimary}>
            <Text style={styles.actionBtnPrimaryText}>View Agreement</Text>
          </TouchableOpacity>
        )}
        {item.status === "completed" && (
          <TouchableOpacity style={styles.actionBtnPrimary}>
            <Text style={styles.actionBtnPrimaryText}>Leave Review</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

function EmptyState() {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyEmoji}>🏡</Text>
      <Text style={styles.emptyTitle}>No bookings yet</Text>
      <Text style={styles.emptySubtitle}>Your confirmed rentals will appear here once a landlord approves your request.</Text>
      <TouchableOpacity style={styles.browseBtn} onPress={() => router.push("/" as any)}>
        <Text style={styles.browseBtnText}>Browse Properties</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function MyBookingsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.backText}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>My Bookings</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={MOCK_BOOKINGS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookingCard item={item} />}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={<EmptyState />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16, backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.grey200 },
  backText: { fontSize: 24, color: Colors.dark },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: Colors.dark },
  listContent: { padding: 16, gap: 12, flexGrow: 1 },
  card: { backgroundColor: Colors.white, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: Colors.grey200 },
  cardHeader: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  propertyImage: { width: 64, height: 64, borderRadius: 8, backgroundColor: Colors.background, alignItems: "center", justifyContent: "center" },
  propertyEmoji: { fontSize: 28 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: "700", color: Colors.dark, marginBottom: 4 },
  cardLocation: { fontSize: 12, color: Colors.grey500, marginBottom: 4 },
  cardPrice: { fontSize: 14, fontWeight: "700", color: Colors.primary },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, alignSelf: "flex-start" },
  statusText: { fontSize: 12, fontWeight: "600" },
  cardDivider: { height: 1, backgroundColor: Colors.grey200, marginVertical: 12 },
  detailsGrid: { flexDirection: "row", gap: 16, marginBottom: 12 },
  detailItem: { flex: 1, gap: 2 },
  detailLabel: { fontSize: 11, color: Colors.grey500 },
  detailValue: { fontSize: 12, fontWeight: "600", color: Colors.dark },
  cardActions: { flexDirection: "row", gap: 10 },
  actionBtn: { flex: 1, borderWidth: 1.5, borderColor: Colors.grey200, paddingVertical: 10, borderRadius: 8, alignItems: "center" },
  actionBtnText: { fontSize: 13, color: Colors.dark, fontWeight: "500" },
  actionBtnPrimary: { flex: 1, backgroundColor: Colors.primary, paddingVertical: 10, borderRadius: 8, alignItems: "center" },
  actionBtnPrimaryText: { fontSize: 13, color: Colors.white, fontWeight: "600" },
  emptyState: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 80, paddingHorizontal: 32 },
  emptyEmoji: { fontSize: 56, marginBottom: 16 },
  emptyTitle: { fontSize: 18, fontWeight: "bold", color: Colors.dark, marginBottom: 8 },
  emptySubtitle: { fontSize: 14, color: Colors.grey500, textAlign: "center", lineHeight: 20, marginBottom: 24 },
  browseBtn: { backgroundColor: Colors.primary, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  browseBtnText: { color: Colors.white, fontSize: 15, fontWeight: "600" },
});