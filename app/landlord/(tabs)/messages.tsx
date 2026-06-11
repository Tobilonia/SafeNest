import { Ionicons } from "@expo/vector-icons";
import {
    FlatList,
    Image,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

const chats = [
  {
    id: "1",
    name: "Doris Ukah",
    message: "Message",
    time: "10:00 AM",
    avatar: "https://picsum.photos/100?1",
    unread: 0,
  },
  {
    id: "2",
    name: "M.O Wale",
    message: "Message",
    time: "10:00 AM",
    avatar: "https://picsum.photos/100?2",
    unread: 0,
  },
  {
    id: "3",
    name: "Yareji Victor",
    message: "Message",
    time: "10:00 AM",
    avatar: "https://picsum.photos/100?3",
    unread: 1,
  },
  {
    id: "4",
    name: "Umoh John",
    message: "Message",
    time: "10:00 AM",
    avatar: "https://picsum.photos/100?4",
    unread: 0,
  },
];

export default function MessagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Messages
      </Text>

      {/* Search */}

      <View style={styles.searchBox}>
        <Ionicons
          name="search"
          size={24}
          color="#BDBDBD"
        />

        <TextInput
          placeholder="Search"
          style={styles.input}
        />
      </View>

      {/* Chat List */}

      <FlatList
        data={chats}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.chatItem}>
            <Image
              source={{ uri: item.avatar }}
              style={styles.avatar}
            />

            <View style={styles.chatInfo}>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.message}>
                {item.message}
              </Text>
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
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  title: {
    fontSize: 36,
    fontWeight: "700",
    marginBottom: 25,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 16,
    paddingHorizontal: 15,
    height: 60,
    marginBottom: 25,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 18,
  },

  chatItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },

  chatInfo: {
    flex: 1,
    marginLeft: 15,
  },

  name: {
    fontSize: 22,
    fontWeight: "600",
  },

  message: {
    color: "#B0B0B0",
    fontSize: 18,
    marginTop: 5,
  },

  rightSide: {
    alignItems: "flex-end",
  },

  time: {
    fontSize: 14,
    color: "#555",
  },

  badge: {
    marginTop: 10,
    backgroundColor: "#3559E0",
    width: 26,
    height: 26,
    borderRadius: 13,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "700",
  },
});