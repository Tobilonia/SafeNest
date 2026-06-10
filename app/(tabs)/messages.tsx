import { useState } from "react";
import {
  View, Text, StyleSheet, FlatList,
  TouchableOpacity, TextInput
} from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const conversations = [
  {
    id: "1",
    name: "Alexa Johnson",
    role: "Verified Agent",
    lastMessage: "Hi, I'm interested in the 2 bedroom...",
    time: "11:00 AM",
    unread: 2,
    verified: true,
  },
  {
    id: "2",
    name: "David Okoro",
    role: "Verified Landlord",
    lastMessage: "Thanks for the information",
    time: "10:15 AM",
    unread: 0,
    verified: true,
  },
  {
    id: "3",
    name: "SafeNest Support",
    role: "Support",
    lastMessage: "Your viewing has been scheduled...",
    time: "Yesterday",
    unread: 0,
    verified: true,
  },
  {
    id: "4",
    name: "Alexa Johnson",
    role: "Verified Agent",
    lastMessage: "Please I'm interested in the 2 bedroom...",
    time: "Wednesday",
    unread: 0,
    verified: true,
  },
];

const tabs = ["All", "Unread", "Favorites"];

export default function MessagesScreen() {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState("");

  const filteredConversations = conversations.filter((c) => {
    if (activeTab === "Unread") return c.unread > 0;
    if (activeTab === "Favorites") return false;
    return c.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Messages</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search messages..."
          placeholderTextColor={Colors.grey500}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[
              styles.tab,
              activeTab === tab && styles.tabActive,
            ]}
            onPress={() => setActiveTab(tab)}
          >
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.tabTextActive,
              ]}
            >
              {tab}
              {tab === "Unread" && (
                <Text style={styles.unreadCount}>
                  {" "}
                  {conversations.filter((c) => c.unread > 0).length}
                </Text>
              )}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredConversations}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>💬</Text>
            <Text style={styles.emptyText}>
              {activeTab === "Favorites"
                ? "No favorite messages"
                : "No messages yet"}
            </Text>
            <Text style={styles.emptySubtext}>
              Start a conversation from any property listing
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.conversationCard}
            onPress={() => router.push({pathname: "/chat/[id]" as any, params: { id: item.id }})}
          >
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>
                  {item.name.charAt(0)}
                </Text>
              </View>
              {item.verified && (
                <View style={styles.verifiedDot} />
              )}
            </View>

            <View style={styles.conversationInfo}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>
                  {item.name}
                </Text>
                <Text style={styles.conversationTime}>
                  {item.time}
                </Text>
              </View>
              <Text style={styles.conversationRole}>
                {item.role}
              </Text>
              <Text style={styles.lastMessage} numberOfLines={1}>
                {item.lastMessage}
              </Text>
            </View>

            {item.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>
                  {item.unread}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => (
          <View style={styles.separator} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
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
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 12,
    backgroundColor: Colors.background,
    borderRadius: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 14,
    color: Colors.dark,
  },
  tabsContainer: {
    flexDirection: "row",
    paddingHorizontal: 24,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 8,
    borderBottomWidth: 2,
    borderBottomColor: "transparent",
  },
  tabActive: {
    borderBottomColor: Colors.primary,
  },
  tabText: {
    fontSize: 14,
    color: Colors.grey500,
    fontWeight: "500",
  },
  tabTextActive: {
    color: Colors.primary,
    fontWeight: "600",
  },
  unreadCount: {
    fontSize: 12,
    color: Colors.primary,
    fontWeight: "bold",
  },
  conversationCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  avatarContainer: {
    marginRight: 12,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },
  verifiedDot: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: Colors.success,
    borderWidth: 2,
    borderColor: Colors.white,
  },
  conversationInfo: {
    flex: 1,
  },
  conversationHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  conversationName: {
    fontSize: 15,
    fontWeight: "600",
    color: Colors.dark,
  },
  conversationTime: {
    fontSize: 12,
    color: Colors.grey500,
  },
  conversationRole: {
    fontSize: 12,
    color: Colors.primary,
    marginBottom: 4,
  },
  lastMessage: {
    fontSize: 13,
    color: Colors.grey500,
  },
  unreadBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  unreadBadgeText: {
    fontSize: 11,
    fontWeight: "bold",
    color: Colors.white,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.grey200,
    marginLeft: 84,
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 80,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: Colors.grey500,
    textAlign: "center",
    paddingHorizontal: 32,
  },
});