import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const notifications = [
  {
    id: "1",
    type: "message",
    title: "New message from Alexa Johnson",
    preview: "Hi, I'm interested in the 2 bedroom...",
    time: "2m ago",
    read: false,
    category: "Messages",
  },
  {
    id: "2",
    type: "viewing",
    title: "Viewing scheduled",
    preview: "Your viewing for 2 Bedroom Apartment is tomorrow at 11:00 Am.",
    time: "1h ago",
    read: false,
    category: "System",
  },
  {
    id: "3",
    type: "payment",
    title: "Payment received",
    preview: "Your payment of ₦250,000 was successful.",
    time: "3h ago",
    read: true,
    category: "Payments",
  },
  {
    id: "4",
    type: "approval",
    title: "Request approved",
    preview: "Your request to rent 3 bedroom Apartment has been approved.",
    time: "1d ago",
    read: true,
    category: "System",
  },
  {
    id: "5",
    type: "message",
    title: "New message from John Akinwale",
    preview: "Is the property still available?",
    time: "2d ago",
    read: true,
    category: "Messages",
  },
  {
    id: "6",
    type: "payment",
    title: "Deposit reminder",
    preview: "Your deposit for Mini Flat in Yaba is due in 3 days.",
    time: "2d ago",
    read: true,
    category: "Payments",
  },
];

const tabs = ["All", "Messages", "System", "Payments"];

const getIcon = (type: string) => {
  switch (type) {
    case "message": return "💬";
    case "viewing": return "🏠";
    case "payment": return "💰";
    case "approval": return "✅";
    default: return "🔔";
  }
};

const getIconBg = (type: string) => {
  switch (type) {
    case "message": return Colors.primaryLight || "#EEF1FB";
    case "viewing": return "#EEF9EE";
    case "payment": return "#FFF8EE";
    case "approval": return "#EEF9EE";
    default: return Colors.grey200;
  }
};

export default function NotificationsScreen() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered =
    activeTab === "All"
      ? notifications
      : notifications.filter((n) => n.category === activeTab);

  const getUnreadCount = (tab: string) => {
    const list =
      tab === "All"
        ? notifications
        : notifications.filter((n) => n.category === tab);
    return list.filter((n) => !n.read).length;
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notifications</Text>
        <TouchableOpacity>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {tabs.map((tab) => {
            const unread = getUnreadCount(tab);
            return (
              <TouchableOpacity
                key={tab}
                style={[styles.tab, activeTab === tab && styles.tabActive]}
                onPress={() => setActiveTab(tab)}
              >
                <View style={styles.tabInner}>
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === tab && styles.tabTextActive,
                    ]}
                  >
                    {tab}
                  </Text>
                  {unread > 0 && (
                    <View style={[
                      styles.badge,
                      activeTab === tab && styles.badgeActive
                    ]}>
                      <Text style={[
                        styles.badgeText,
                        activeTab === tab && styles.badgeTextActive
                      ]}>
                        {unread}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      {/* List */}
      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyIcon}>🔔</Text>
            <Text style={styles.emptyText}>No notifications yet</Text>
            <Text style={styles.emptySubtext}>
              You'll see updates about your listings, messages and payments here
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.notifCard,
              !item.read && styles.notifCardUnread,
            ]}
            onPress={() => {
              if (item.type === "message") router.push("/messages");
            }}
          >
            {/* Unread dot */}
            {!item.read && <View style={styles.unreadDot} />}

            {/* Icon */}
            <View style={[styles.iconWrap, { backgroundColor: getIconBg(item.type) }]}>
              <Text style={styles.iconText}>{getIcon(item.type)}</Text>
            </View>

            {/* Content */}
            <View style={styles.notifContent}>
              <Text
                style={[
                  styles.notifTitle,
                  !item.read && styles.notifTitleUnread,
                ]}
                numberOfLines={1}
              >
                {item.title}
              </Text>
              <Text style={styles.notifPreview} numberOfLines={2}>
                {item.preview}
              </Text>
              <Text style={styles.notifTime}>{item.time}</Text>
            </View>
          </TouchableOpacity>
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      {/* View all link */}
      {filtered.length > 0 && (
        <View style={styles.viewAllContainer}>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View all notifications</Text>
          </TouchableOpacity>
        </View>
      )}
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
  settingsIcon: {
    fontSize: 20,
  },
  tabsContainer: {
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  tabActive: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  tabInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  tabText: {
    fontSize: 13,
    color: Colors.grey500,
    fontWeight: "500",
  },
  tabTextActive: {
    color: Colors.white,
    fontWeight: "600",
  },
  badge: {
    backgroundColor: Colors.primary,
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 4,
  },
  badgeActive: {
    backgroundColor: Colors.white,
  },
  badgeText: {
    fontSize: 10,
    color: Colors.white,
    fontWeight: "bold",
  },
  badgeTextActive: {
    color: Colors.primary,
  },
  listContent: {
    paddingVertical: 8,
    paddingBottom: 100,
  },
  notifCard: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: Colors.white,
    position: "relative",
  },
  notifCardUnread: {
    backgroundColor: "#F5F7FF",
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: Colors.primary,
    position: "absolute",
    left: 12,
    top: 22,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  iconText: {
    fontSize: 20,
  },
  notifContent: {
    flex: 1,
  },
  notifTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 4,
  },
  notifTitleUnread: {
    fontWeight: "700",
  },
  notifPreview: {
    fontSize: 13,
    color: Colors.grey500,
    lineHeight: 18,
    marginBottom: 6,
  },
  notifTime: {
    fontSize: 11,
    color: Colors.grey500,
  },
  separator: {
    height: 1,
    backgroundColor: Colors.grey200,
    marginHorizontal: 24,
  },
  viewAllContainer: {
    alignItems: "center",
    paddingVertical: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.grey200,
    backgroundColor: Colors.white,
  },
  viewAllText: {
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
  emptyContainer: {
    alignItems: "center",
    paddingVertical: 80,
    paddingHorizontal: 40,
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
    lineHeight: 20,
  },
});