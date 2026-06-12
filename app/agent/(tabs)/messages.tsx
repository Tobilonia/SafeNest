import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function MessagesScreen() {
  const [search, setSearch] = useState("");

  const chats = [
    {
      id: "1",
      name: "Doris Ukah",
      message: "Message",
      time: "10:00 AM",
      unread: 0,
      seen: true,
      avatar: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "2",
      name: "M.O Wale",
      message: "Message",
      time: "10:00 AM",
      unread: 0,
      seen: true,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: "3",
      name: "Yareji Victor",
      message: "Message",
      time: "10:00 AM",
      unread: 1,
      seen: false,
      avatar: "https://i.pravatar.cc/150?img=15",
    },
    {
      id: "4",
      name: "Umoh John",
      message: "Message",
      time: "10:00 AM",
      unread: 0,
      seen: true,
      avatar: "https://i.pravatar.cc/150?img=20",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Messages</Text>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={28}
          color="#B0B0B0"
        />

        <TextInput
          placeholder="Search"
          placeholderTextColor="#B0B0B0"
          style={styles.searchInput}
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.chatItem}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.avatar}
            />

            <View style={styles.chatContent}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <View style={styles.messageRow}>
                {item.seen && (
                  <Ionicons
                    name="checkmark-done"
                    size={22}
                    color="#4CAF50"
                  />
                )}

                <Text style={styles.message}>
                  {item.message}
                </Text>
              </View>
            </View>

            <View style={styles.rightSide}>
              <Text style={styles.time}>
                {item.time}
              </Text>

              {item.unread > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>
                    {item.unread}
                  </Text>
                </View>
              )}
            </View>
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
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  header: {
    fontSize: 42,
    fontWeight: "700",
    marginBottom: 30,
  },

  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 18,
    paddingHorizontal: 18,
    height: 70,
    marginBottom: 35,
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 24,
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
  },

  avatar: {
    width: 65,
    height: 65,
    borderRadius: 33,
  },

  chatContent: {
    flex: 1,
    marginLeft: 18,
  },

  name: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 6,
  },

  messageRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  message: {
    color: "#B0B0B0",
    fontSize: 16,
    marginLeft: 5,
  },

  rightSide: {
    alignItems: "flex-end",
    justifyContent: "space-between",
    height: 55,
  },

  time: {
    fontSize: 14,
    color: "#333",
  },

  badge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: "#3559E0",
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontWeight: "600",
  },

  separator: {
    height: 1,
    backgroundColor: "#E0E0E0",
  },
});