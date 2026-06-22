import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  FlatList, Alert, Modal, TextInput, ScrollView
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

interface PaymentMethod {
  id: string;
  type: "card" | "bank";
  label: string;
  detail: string;
  isDefault: boolean;
  brand?: string;
}

const MOCK_METHODS: PaymentMethod[] = [
  { id: "1", type: "card", label: "Visa •••• 4521", detail: "Expires 08/27", isDefault: true, brand: "VISA" },
  { id: "2", type: "card", label: "Mastercard •••• 9834", detail: "Expires 03/26", isDefault: false, brand: "MC" },
  { id: "3", type: "bank", label: "GTBank", detail: "•••• 2201 — Chioma Adeyemi", isDefault: false },
];

function CardBrand({ brand }: { brand?: string }) {
  if (brand === "VISA") return <Text style={styles.brandVisa}>VISA</Text>;
  if (brand === "MC") return <Text style={styles.brandMC}>MC</Text>;
  return <Text style={styles.bankIcon}>🏦</Text>;
}

export default function PaymentMethodsScreen() {
  const [methods, setMethods] = useState<PaymentMethod[]>(MOCK_METHODS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardName, setCardName] = useState("");

  const setDefault = (id: string) => {
    setMethods((prev) => prev.map((m) => ({ ...m, isDefault: m.id === id })));
  };

  const removeMethod = (id: string) => {
    Alert.alert("Remove Payment Method", "Are you sure?", [
      { text: "Cancel", style: "cancel" },
      { text: "Remove", style: "destructive", onPress: () => setMethods((prev) => prev.filter((m) => m.id !== id)) },
    ]);
  };

  const handleAddCard = () => {
    if (!cardNumber || !expiry || !cvv || !cardName) {
      Alert.alert("Error", "Please fill all card details.");
      return;
    }
    const last4 = cardNumber.slice(-4);
    setMethods((prev) => [...prev, { id: String(Date.now()), type: "card", label: `Card •••• ${last4}`, detail: `Expires ${expiry}`, isDefault: false, brand: "VISA" }]);
    setShowAddModal(false);
    setCardNumber(""); setExpiry(""); setCvv(""); setCardName("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.backText}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Payment Methods</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={methods}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<Text style={styles.sectionLabel}>Saved Methods</Text>}
        renderItem={({ item }) => (
          <View style={[styles.card, item.isDefault && styles.cardDefault]}>
            <View style={styles.cardLeft}>
              <View style={styles.brandBox}><CardBrand brand={item.brand} /></View>
              <View>
                <View style={styles.labelRow}>
                  <Text style={styles.cardLabel}>{item.label}</Text>
                  {item.isDefault && (
                    <View style={styles.defaultBadge}><Text style={styles.defaultBadgeText}>Default</Text></View>
                  )}
                </View>
                <Text style={styles.cardDetail}>{item.detail}</Text>
              </View>
            </View>
            <View style={styles.cardActions}>
              {!item.isDefault && (
                <TouchableOpacity style={styles.actionBtn} onPress={() => setDefault(item.id)}>
                  <Text style={styles.actionBtnText}>Set Default</Text>
                </TouchableOpacity>
              )}
              <TouchableOpacity onPress={() => removeMethod(item.id)}>
                <Text style={styles.removeText}>🗑</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity style={styles.addBtn} onPress={() => setShowAddModal(true)}>
            <Text style={styles.addBtnIcon}>＋</Text>
            <Text style={styles.addBtnText}>Add New Card</Text>
          </TouchableOpacity>
        }
      />

      <View style={styles.escrowBanner}>
        <Text style={styles.escrowIcon}>🔒</Text>
        <Text style={styles.escrowText}>Payments are secured via SafeNest Escrow. Funds are only released after you confirm receipt.</Text>
      </View>

      <Modal visible={showAddModal} animationType="slide" transparent onRequestClose={() => setShowAddModal(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Add New Card</Text>
              <TouchableOpacity onPress={() => setShowAddModal(false)}><Text style={styles.modalClose}>✕</Text></TouchableOpacity>
            </View>
            <ScrollView keyboardShouldPersistTaps="handled">
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Cardholder Name</Text>
                <TextInput style={styles.input} value={cardName} onChangeText={setCardName} placeholder="Name on card" placeholderTextColor={Colors.grey500} />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Card Number</Text>
                <TextInput style={styles.input} value={cardNumber} onChangeText={setCardNumber} placeholder="0000 0000 0000 0000" placeholderTextColor={Colors.grey500} keyboardType="number-pad" maxLength={19} />
              </View>
              <View style={styles.row}>
                <View style={[styles.inputGroup, { flex: 1, marginRight: 8 }]}>
                  <Text style={styles.label}>Expiry Date</Text>
                  <TextInput style={styles.input} value={expiry} onChangeText={setExpiry} placeholder="MM/YY" placeholderTextColor={Colors.grey500} keyboardType="number-pad" maxLength={5} />
                </View>
                <View style={[styles.inputGroup, { flex: 1, marginLeft: 8 }]}>
                  <Text style={styles.label}>CVV</Text>
                  <TextInput style={styles.input} value={cvv} onChangeText={setCvv} placeholder="•••" placeholderTextColor={Colors.grey500} keyboardType="number-pad" maxLength={4} secureTextEntry />
                </View>
              </View>
              <TouchableOpacity style={styles.saveCardBtn} onPress={handleAddCard}>
                <Text style={styles.saveCardBtnText}>Add Card</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16, backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.grey200 },
  backText: { fontSize: 24, color: Colors.dark },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: Colors.dark },
  listContent: { padding: 16, gap: 10, paddingBottom: 100 },
  sectionLabel: { fontSize: 13, fontWeight: "600", color: Colors.grey500, marginBottom: 8, textTransform: "uppercase", letterSpacing: 0.5 },
  card: { backgroundColor: Colors.white, borderRadius: 12, padding: 16, borderWidth: 1, borderColor: Colors.grey200, flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 8 },
  cardDefault: { borderColor: Colors.primary, borderWidth: 1.5 },
  cardLeft: { flexDirection: "row", alignItems: "center", gap: 12, flex: 1 },
  brandBox: { width: 48, height: 32, borderRadius: 6, backgroundColor: Colors.background, alignItems: "center", justifyContent: "center", borderWidth: 1, borderColor: Colors.grey200 },
  brandVisa: { fontSize: 12, fontWeight: "900", color: "#1A1F71", letterSpacing: -0.5 },
  brandMC: { fontSize: 11, fontWeight: "900", color: "#EB001B" },
  bankIcon: { fontSize: 18 },
  labelRow: { flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 2 },
  cardLabel: { fontSize: 14, fontWeight: "600", color: Colors.dark },
  defaultBadge: { backgroundColor: "#EEF2FF", paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  defaultBadgeText: { fontSize: 11, color: Colors.primary, fontWeight: "600" },
  cardDetail: { fontSize: 12, color: Colors.grey500 },
  cardActions: { flexDirection: "row", alignItems: "center", gap: 12 },
  actionBtn: { borderWidth: 1, borderColor: Colors.primary, paddingHorizontal: 10, paddingVertical: 5, borderRadius: 8 },
  actionBtnText: { fontSize: 12, color: Colors.primary, fontWeight: "600" },
  removeText: { fontSize: 18 },
  addBtn: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: 8, paddingVertical: 16, borderRadius: 12, borderWidth: 1.5, borderStyle: "dashed", borderColor: Colors.primary, marginTop: 4 },
  addBtnIcon: { fontSize: 18, color: Colors.primary },
  addBtnText: { fontSize: 15, color: Colors.primary, fontWeight: "600" },
  escrowBanner: { position: "absolute", bottom: 24, left: 16, right: 16, backgroundColor: "#EEF2FF", borderRadius: 12, flexDirection: "row", alignItems: "center", padding: 14, gap: 10 },
  escrowIcon: { fontSize: 20 },
  escrowText: { flex: 1, fontSize: 12, color: Colors.primary, lineHeight: 17 },
  modalOverlay: { flex: 1, backgroundColor: "rgba(0,0,0,0.4)", justifyContent: "flex-end" },
  modalSheet: { backgroundColor: Colors.white, borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 24, paddingBottom: 48 },
  modalHeader: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 24 },
  modalTitle: { fontSize: 18, fontWeight: "bold", color: Colors.dark },
  modalClose: { fontSize: 18, color: Colors.grey500 },
  inputGroup: { marginBottom: 16 },
  label: { fontSize: 13, fontWeight: "600", color: Colors.grey700, marginBottom: 6 },
  input: { borderWidth: 1, borderColor: Colors.grey200, borderRadius: 10, paddingHorizontal: 14, paddingVertical: 12, fontSize: 14, color: Colors.dark },
  row: { flexDirection: "row" },
  saveCardBtn: { backgroundColor: Colors.primary, paddingVertical: 16, borderRadius: 12, alignItems: "center", marginTop: 8 },
  saveCardBtnText: { color: Colors.white, fontSize: 16, fontWeight: "bold" },
});