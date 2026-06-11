import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, Switch, Alert
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

function ToggleRow({ label, description, value, onToggle, isLast = false }: { label: string; description: string; value: boolean; onToggle: (v: boolean) => void; isLast?: boolean }) {
  return (
    <View style={[styles.row, !isLast && styles.rowBorder]}>
      <View style={styles.rowLeft}>
        <Text style={styles.rowLabel}>{label}</Text>
        <Text style={styles.rowDesc}>{description}</Text>
      </View>
      <Switch value={value} onValueChange={onToggle} trackColor={{ false: Colors.grey200, true: Colors.primary }} thumbColor={Colors.white} />
    </View>
  );
}

function LinkRow({ label, onPress, isLast = false }: { label: string; onPress: () => void; isLast?: boolean }) {
  return (
    <TouchableOpacity style={[styles.row, !isLast && styles.rowBorder]} onPress={onPress}>
      <Text style={styles.rowLabel}>{label}</Text>
      <Text style={styles.rowArrow}>›</Text>
    </TouchableOpacity>
  );
}

export default function SettingsScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);
  const [profileVisible, setProfileVisible] = useState(true);
  const [activityVisible, setActivityVisible] = useState(false);
  const [biometrics, setBiometrics] = useState(false);

  const handleDeleteAccount = () => {
    Alert.alert("Delete Account", "This will permanently delete your account and all data. This cannot be undone.", [
      { text: "Cancel", style: "cancel" },
      { text: "Delete", style: "destructive", onPress: () => {} },
    ]);
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}><Text style={styles.backText}>←</Text></TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔔 Notifications</Text>
        <ToggleRow label="Push Notifications" description="Get alerts on your device" value={pushEnabled} onToggle={setPushEnabled} />
        <ToggleRow label="Email Notifications" description="Receive updates via email" value={emailEnabled} onToggle={setEmailEnabled} />
        <ToggleRow label="SMS Alerts" description="Text messages for urgent updates" value={smsEnabled} onToggle={setSmsEnabled} />
        <ToggleRow label="Marketing Emails" description="Property tips & promotions" value={marketingEnabled} onToggle={setMarketingEnabled} isLast />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🔒 Privacy</Text>
        <ToggleRow label="Public Profile" description="Let agents see your profile" value={profileVisible} onToggle={setProfileVisible} />
        <ToggleRow label="Show Activity Status" description="Let others see when you're online" value={activityVisible} onToggle={setActivityVisible} isLast />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🛡️ Security</Text>
        <ToggleRow label="Biometric Login" description="Use fingerprint or Face ID" value={biometrics} onToggle={setBiometrics} isLast />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>🎨 Appearance</Text>
        <ToggleRow label="Dark Mode" description="Coming soon" value={false} onToggle={() => Alert.alert("Coming Soon", "Dark mode will be available in a future update.")} isLast />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>👤 Account</Text>
        <LinkRow label="Change Password" onPress={() => {}} />
        <LinkRow label="Two-Factor Authentication" onPress={() => {}} />
        <LinkRow label="Connected Accounts" onPress={() => {}} />
        <LinkRow label="Download My Data" onPress={() => {}} isLast />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>📄 Legal</Text>
        <LinkRow label="Terms of Service" onPress={() => {}} />
        <LinkRow label="Privacy Policy" onPress={() => {}} />
        <LinkRow label="Cookie Policy" onPress={() => {}} isLast />
      </View>

      <View style={styles.dangerSection}>
        <TouchableOpacity style={styles.deleteBtn} onPress={handleDeleteAccount}>
          <Text style={styles.deleteBtnText}>Delete Account</Text>
        </TouchableOpacity>
        <Text style={styles.deleteHint}>Permanently remove your account and all associated data.</Text>
      </View>

      <Text style={styles.version}>SafeNest v1.0.0</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.background },
  content: { paddingBottom: 48 },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 24, paddingTop: 60, paddingBottom: 16, backgroundColor: Colors.white, borderBottomWidth: 1, borderBottomColor: Colors.grey200 },
  backText: { fontSize: 24, color: Colors.dark },
  headerTitle: { fontSize: 18, fontWeight: "bold", color: Colors.dark },
  section: { backgroundColor: Colors.white, marginTop: 12, paddingHorizontal: 24, paddingTop: 16, paddingBottom: 4 },
  sectionTitle: { fontSize: 14, fontWeight: "700", color: Colors.dark, marginBottom: 12 },
  row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingVertical: 14 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: Colors.grey200 },
  rowLeft: { flex: 1, marginRight: 16 },
  rowLabel: { fontSize: 15, color: Colors.dark, fontWeight: "500" },
  rowDesc: { fontSize: 12, color: Colors.grey500, marginTop: 2 },
  rowArrow: { fontSize: 20, color: Colors.grey500 },
  dangerSection: { marginTop: 16, marginHorizontal: 24, alignItems: "center" },
  deleteBtn: { borderWidth: 1.5, borderColor: Colors.error, paddingHorizontal: 32, paddingVertical: 12, borderRadius: 12, marginBottom: 8 },
  deleteBtnText: { color: Colors.error, fontSize: 15, fontWeight: "600" },
  deleteHint: { fontSize: 12, color: Colors.grey500, textAlign: "center" },
  version: { textAlign: "center", fontSize: 12, color: Colors.grey500, marginTop: 24 },
});