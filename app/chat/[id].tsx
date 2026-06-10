import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  TextInput, FlatList, KeyboardAvoidingView,
  Platform
} from "react-native";
import { router, useLocalSearchParams } from "expo-router";
import Colors from "../../constants/colors";

const initialMessages = [
  {
    id: "1",
    text: "Hello! Is this apartment still available?",
    sender: "other",
    time: "10:32 AM",
  },
  {
    id: "2",
    text: "Yes, it is still available",
    sender: "me",
    time: "10:35 AM",
  },
  {
    id: "3",
    text: "Great! Can I schedule a viewing?",
    sender: "other",
    time: "10:36 AM",
  },
  {
    id: "4",
    text: "Sure, when are you available?",
    sender: "me",
    time: "10:45 AM",
  },
];

export default function ChatScreen() {
  const { id } = useLocalSearchParams();
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (newMessage.trim()) {
      const message = {
        id: String(messages.length + 1),
        text: newMessage.trim(),
        sender: "me",
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      setMessages([...messages, message]);
      setNewMessage("");
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerInfo}>
          <View style={styles.headerAvatar}>
            <Text style={styles.headerAvatarText}>A</Text>
          </View>
          <View>
            <Text style={styles.headerName}>Alexa Johnson</Text>
            <Text style={styles.headerRole}>✓ Verified Agent</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Text style={styles.callIcon}>📞</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.securityNotice}>
        <Text style={styles.securityText}>
          🔒 All chats are secure and recorded for your protection
        </Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.messagesList}
        ListHeaderComponent={
          <Text style={styles.dateSeparator}>Today</Text>
        }
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageRow,
              item.sender === "me" && styles.messageRowMe,
            ]}
          >
            {item.sender === "other" && (
              <View style={styles.messageAvatar}>
                <Text style={styles.messageAvatarText}>A</Text>
              </View>
            )}
            <View
              style={[
                styles.messageBubble,
                item.sender === "me"
                  ? styles.messageBubbleMe
                  : styles.messageBubbleOther,
              ]}
            >
              <Text
                style={[
                  styles.messageText,
                  item.sender === "me" && styles.messageTextMe,
                ]}
              >
                {item.text}
              </Text>
              <Text
                style={[
                  styles.messageTime,
                  item.sender === "me" && styles.messageTimeMe,
                ]}
              >
                {item.time}
              </Text>
            </View>
          </View>
        )}
      />

      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachBtn}>
          <Text style={styles.attachIcon}>📎</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          placeholder="Type a message..."
          placeholderTextColor={Colors.grey500}
          value={newMessage}
          onChangeText={setNewMessage}
          multiline
        />
        <TouchableOpacity
          style={[
            styles.sendBtn,
            !newMessage.trim() && styles.sendBtnDisabled,
          ]}
          onPress={handleSend}
          disabled={!newMessage.trim()}
        >
          <Text style={styles.sendBtnText}>➤</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
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
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  backText: {
    fontSize: 24,
    color: Colors.dark,
  },
  headerInfo: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  headerAvatarText: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.white,
  },
  headerName: {
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.dark,
  },
  headerRole: {
    fontSize: 12,
    color: Colors.success,
  },
  callIcon: {
    fontSize: 22,
  },
  securityNotice: {
    backgroundColor: "#EEF2FF",
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  securityText: {
    fontSize: 12,
    color: Colors.primary,
    textAlign: "center",
  },
  messagesList: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 12,
  },
  dateSeparator: {
    textAlign: "center",
    fontSize: 12,
    color: Colors.grey500,
    marginBottom: 16,
  },
  messageRow: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 8,
    marginBottom: 8,
  },
  messageRowMe: {
    justifyContent: "flex-end",
  },
  messageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  messageAvatarText: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.white,
  },
  messageBubble: {
    maxWidth: "75%",
    padding: 12,
    borderRadius: 16,
  },
  messageBubbleOther: {
    backgroundColor: Colors.white,
    borderBottomLeftRadius: 4,
  },
  messageBubbleMe: {
    backgroundColor: Colors.primary,
    borderBottomRightRadius: 4,
  },
  messageText: {
    fontSize: 14,
    color: Colors.dark,
    lineHeight: 20,
  },
  messageTextMe: {
    color: Colors.white,
  },
  messageTime: {
    fontSize: 10,
    color: Colors.grey500,
    marginTop: 4,
    alignSelf: "flex-end",
  },
  messageTimeMe: {
    color: "rgba(255,255,255,0.7)",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.grey200,
    gap: 8,
  },
  attachBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
  attachIcon: {
    fontSize: 18,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    color: Colors.dark,
    maxHeight: 100,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  sendBtn: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  sendBtnDisabled: {
    backgroundColor: Colors.grey200,
  },
  sendBtnText: {
    fontSize: 16,
    color: Colors.white,
  },
});