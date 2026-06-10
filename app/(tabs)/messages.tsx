import {
  View, Text, StyleSheet, FlatList,
  TouchableOpacity
} from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const conversations = [
  {
    id: "1",
    name: "Sodiq Adeleke",
    role: "Verified Agent",
    lastMessage: "Yes, the apartment is still available.",
    time: "10:32 AM",
    unread: 2,
    verified: true,
  },
  {
    id: "2",
    name: "Victor Okafor",
    role: "Verified Landlord",
    lastMessage: "You can schedule a viewing for tomorrow.",
    time: "Yesterday",
    unread: 0,
    verified: true,
  },
  {
    id: "3",
    name: "Amaka Properties",
    role: "Agent",
    lastMessage: "Please send your documents for verification.",
    time: "Mon",
    unread: 1,
    verified: false,
  },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
        <View style={styles.securityNotice}>
          <Text style={styles.securityText}>
            🔒 Chats are monitored and stored for security
          </Text>
        </View>
      </View>

      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>💬</Text>
            <Text style={styles.emptyText}>No messages yet</Text>
            <Text style={styles.emptySubtext}>
              Start a conversation from any property listing
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.conversationCard}
            onPress={() => router.push(`/property/${item.id}`)}
          >
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>
                {item.name.charAt(0)}
              </Text>
              {item.verified && (
                <View style={styles.verifiedDot} />
              )}
            </View>

            <View style={styles.conversationInfo}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>{item.name}</Text>
                <Text style={styles.conversationTime}>{item.time}</Text>
              </View>
              <Text style={styles.conversationRole}>{item.role}</Text>
              <Text
                style={styles.lastMessage}
                numberOfLines={1}
              >
                {item.lastMessage}
              </Text>
            </View>

            {item.unread > 0 && (
              <View style={styles.unreadBadge}>
                <Text style={styles.unreadText}>{item.unread}</Text>
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
    backgroundColor: Colors.background,
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: Colors.white,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 8,
  },
  securityNotice: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  securityText: {
    fontSize: 12,
    color: Colors.primary,
  },
  listContent: {
    paddingBottom: 24,
  },
  conversationCard: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
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
  unreadText: {
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
  },
});