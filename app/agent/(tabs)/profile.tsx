import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function ProfileScreen() {
  const menuItems = [
    {
      title: "Profile",
      icon: "person-outline",
    },
    {
      title: "My Documents",
      icon: "folder-outline",
    },
    {
      title: "Notification Settings",
      icon: "notifications-outline",
    },
    {
      title: "Privacy & Security",
      icon: "shield-checkmark-outline",
    },
    {
      title: "Help & Support",
      icon: "help-buoy-outline",
    },
    {
      title: "Terms & Conditions",
      icon: "document-text-outline",
    },
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.userRow}>
          <Image
            source={{
              uri: "https://i.pravatar.cc/150?img=60",
            }}
            style={styles.avatar}
          />

          <View>
            <View style={styles.nameRow}>
              <Text style={styles.name}>
                Olawale Alade Karunwi
              </Text>

              <Ionicons
                name="checkmark-circle"
                size={28}
                color="#3559E0"
              />
            </View>

            <Text style={styles.email}>
              aladekarunwi@gmail.com
            </Text>
          </View>
        </View>

        <Ionicons
          name="notifications"
          size={30}
          color="#000"
        />
      </View>

      {/* Menu Card */}
      <View style={styles.card}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Ionicons
                name={item.icon as any}
                size={30}
                color="#222"
              />

              <Text style={styles.menuText}>
                {item.title}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={28}
              color="#222"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutBtn}>
        <Text style={styles.logoutText}>
          Log out
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 40,
  },

  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 12,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 20,
    fontWeight: "700",
    marginRight: 5,
  },

  email: {
    color: "#555",
    fontSize: 16,
    marginTop: 4,
  },

  card: {
    borderWidth: 1,
    borderColor: "#DADADA",
    borderRadius: 20,
    paddingVertical: 10,
    marginBottom: 50,
  },

  menuItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },

  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },

  menuText: {
    fontSize: 22,
    marginLeft: 15,
    color: "#222",
  },

  logoutBtn: {
    backgroundColor: "#D7352D",
    height: 70,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",
    width: 220,
    alignSelf: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "600",
  },
});