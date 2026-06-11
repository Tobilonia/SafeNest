import {
  View, Text, StyleSheet, TouchableOpacity, FlatList
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

type RequestStatus = "pending" | "approved" | "rejected" | "expired";

interface RentalRequest {
  id: string;
  propertyTitle: string;
  location: string;
  price: string;
  moveInDate: string;
  submittedDate: string;
  status: RequestStatus;
}

const MOCK_REQUESTS: RentalRequest[] = [
  { id: "1", propertyTitle: "2 Bedroom Apartment", location: "Lekki Phase 1, Lagos", price: "₦2,500,000/yr", moveInDate: "01 Aug 2025", submittedDate: "12 Jun 2025", status: "pending" },
  { id: "2", propertyTitle: "3 Bedroom Duplex", location: "Ikeja GRA, Lagos", price: "₦4,200,000/yr", moveInDate: "15 Jul 2025", submittedDate: "3 Jun 2025", status: "approved" },
  { id: "3", propertyTitle: "1 Bedroom Studio", location: "Yaba, Lagos", price: "₦900,000/yr", moveInDate: "01 Jun 2025", submittedDate: "20 May 2025", status: "rejected" },
  { id: "4", propertyTitle: "4 Bedroom Terrace", location: "Victoria Island, Lagos", price: "₦7,500,000/yr", moveInDate: "30 Apr 2025", submittedDate: "10 Apr 2025", status: "expired" },
];

const STATUS_CONFIG: Record<RequestStatus, { label: string; color: string; bg: string }> = {
  pending: { label: "Pending", color: Colors.warning, bg: "#FFF7E6" },
  approved: { label: "Approved", color: Colors.success, bg: "#F0FAF0" },
  rejected: { label: "Rejected", color: Colors.error, bg: "#FFF0F0" },
  expired: { label: "Expired", color: Colors.grey500, bg: Colors.background },
};

function RequestCard({ item }: { item: RentalRequest }) {
  const status = STATUS_CONFIG[item.status];
  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.cardTop}>
        <View style={styles.propertyImage}><Text style={styles.propertyEmoji}>🏢</Text></View>
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
      <View style={styles.cardBottom}>
        <View style={styles.metaItem}>
          <Text style={styles.metaLabel}>Move-in</Text>
          <Text style={styles.metaValue}>{item.moveInDate}</Text>
        </View>
        <View style={styles.metaItem}>
          <Text style={styles.metaLabel}>Submitted</Text>
          <Text style={styles.metaValue}>{item.submittedDate}</Text>
        </View>
        {item.status === "approved" && (
          <TouchableOpacity style={styles.payBtn} onPress={() => router.push("/pay-deposit" as any)}>
            <Text style={styles.payBtnText}>Pay Deposit</Text>
          </TouchableOpacity>
        )}
      </View>
    </TouchableOpacity>
  );
}

function EmptyState() {
  return (
    <View style={styles.emptyState}>
      <Text style={styles.emptyEmoji}>📋</Text>
      <Text style={styles.emptyTitle}>No requests yet</Text>
      <Text style={styles.emptySubtitle}>When you request to rent a property, it will appear here.</Text>
      <TouchableOpacity style={styles.browseBtn} onPress={() => router.push("/" as any)}>
        <Text style={styles.browseBtnText}>Browse Properties</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function MyRequestsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.backText}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>My Requests</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={MOCK_REQUESTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <RequestCard item={item} />}
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
  cardTop: { flexDirection: "row", alignItems: "flex-start", gap: 12 },
  propertyImage: { width: 64, height: 64, borderRadius: 8, backgroundColor: Colors.background, alignItems: "center", justifyContent: "center" },
  propertyEmoji: { fontSize: 28 },
  cardInfo: { flex: 1 },
  cardTitle: { fontSize: 15, fontWeight: "700", color: Colors.dark, marginBottom: 4 },
  cardLocation: { fontSize: 12, color: Colors.grey500, marginBottom: 4 },
  cardPrice: { fontSize: 14, fontWeight: "700", color: Colors.primary },
  statusBadge: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 20, alignSelf: "flex-start" },
  statusText: { fontSize: 12, fontWeight: "600" },
  cardDivider: { height: 1, backgroundColor: Colors.grey200, marginVertical: 12 },
  cardBottom: { flexDirection: "row", alignItems: "center", gap: 16 },
  metaItem: { gap: 2 },
  metaLabel: { fontSize: 11, color: Colors.grey500 },
  metaValue: { fontSize: 12, fontWeight: "600", color: Colors.dark },
  payBtn: { marginLeft: "auto", backgroundColor: Colors.primary, paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  payBtnText: { color: Colors.white, fontSize: 13, fontWeight: "600" },
  emptyState: { flex: 1, alignItems: "center", justifyContent: "center", paddingTop: 80, paddingHorizontal: 32 },
  emptyEmoji: { fontSize: 56, marginBottom: 16 },
  emptyTitle: { fontSize: 18, fontWeight: "bold", color: Colors.dark, marginBottom: 8 },
  emptySubtitle: { fontSize: 14, color: Colors.grey500, textAlign: "center", lineHeight: 20, marginBottom: 24 },
  browseBtn: { backgroundColor: Colors.primary, paddingHorizontal: 24, paddingVertical: 12, borderRadius: 12 },
  browseBtnText: { color: Colors.white, fontSize: 15, fontWeight: "600" },
});