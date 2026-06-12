import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const topics = [
  { id: "1", title: "How to rent a property", icon: "🏠" },
  { id: "2", title: "Payments & Refunds", icon: "💳" },
  { id: "3", title: "Account verification", icon: "✅" },
  { id: "4", title: "Safety & Security", icon: "🔒" },
  { id: "5", title: "Report a Problem", icon: "⚠️" },
];

export default function HelpSupportScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Help & Support</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero */}
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>How can we help you?</Text>
          <Text style={styles.heroSubtitle}>We're here to assist you</Text>
        </View>

        {/* Search */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search for help articles..."
            placeholderTextColor={Colors.grey500}
          />
        </View>

        {/* Popular Topics */}
        <Text style={styles.sectionTitle}>Popular Topics</Text>
        <View style={styles.topicsContainer}>
          {topics.map((topic, index) => (
            <TouchableOpacity
              key={topic.id}
              style={[
                styles.topicRow,
                index < topics.length - 1 && styles.topicBorder,
              ]}
              onPress={() => {
                if (topic.id === "5") {
                  router.push("/report-scam" as any);
                } else {
                  router.push("/chat/support" as any);
                }
              }}
            >
              <View style={styles.topicLeft}>
                <Text style={styles.topicIcon}>{topic.icon}</Text>
                <Text style={styles.topicTitle}>{topic.title}</Text>
              </View>
              <Text style={styles.chevron}>›</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Chat with Support Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.chatButton} onPress={() => router.push("/chat/support" as any)}>
          <Text style={styles.chatButtonText}>Chat with Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: Colors.white,
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
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  heroSection: {
    alignItems: "center",
    paddingVertical: 32,
  },
  heroTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 6,
  },
  heroSubtitle: {
    fontSize: 14,
    color: Colors.grey500,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: Colors.grey200,
    gap: 10,
  },
  searchIcon: {
    fontSize: 16,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: Colors.dark,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.dark,
    marginBottom: 12,
  },
  topicsContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey200,
    overflow: "hidden",
  },
  topicRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  topicBorder: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  topicLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  topicIcon: {
    fontSize: 18,
  },
  topicTitle: {
    fontSize: 14,
    color: Colors.dark,
    fontWeight: "500",
  },
  chevron: {
    fontSize: 20,
    color: Colors.grey500,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.grey200,
  },
  chatButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  chatButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
});