import { Ionicons } from "@expo/vector-icons";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const menuItems = [
  {
    icon: "person-outline",
    title: "Profile",
  },
  {
    icon: "folder-outline",
    title: "My Documents",
  },
  {
    icon: "notifications-outline",
    title: "Notification Settings",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Privacy & Security",
  },
  {
    icon: "help-circle-outline",
    title: "Help & Support",
  },
  {
    icon: "document-text-outline",
    title: "Terms & Conditions",
  },
];

export default function ProfileScreen() {
  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}

      <View style={styles.header}>
        <View style={styles.userInfo}>
          <Image
            source={{
              uri: "https://picsum.photos/200",
            }}
            style={styles.avatar}
          />

          <View>
            <View style={styles.nameRow}>
              <Text style={styles.name}>
                Alade Karunwi
              </Text>

              <Ionicons
                name="checkmark-circle"
                size={24}
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
          size={28}
          color="#000"
        />
      </View>

      {/* Settings Card */}

      <View style={styles.settingsCard}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.menuItem}
          >
            <View style={styles.menuLeft}>
              <Ionicons
                name={item.icon as any}
                size={26}
                color="#222"
              />

              <Text style={styles.menuText}>
                {item.title}
              </Text>
            </View>

            <Ionicons
              name="chevron-forward"
              size={24}
              color="#222"
            />
          </TouchableOpacity>
        ))}
      </View>

      {/* Logout */}

      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>
          Log out
        </Text>
      </TouchableOpacity>

      <View style={{ height: 40 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginTop: 20,
    marginBottom: 30,
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 12,
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    marginRight: 5,
  },

  email: {
    fontSize: 18,
    color: "#555",
    marginTop: 5,
  },

  settingsCard: {
    borderWidth: 1,
    borderColor: "#D9D9D9",
    borderRadius: 20,
    paddingVertical: 10,
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

  logoutButton: {
    backgroundColor: "#E51C23",
    marginTop: 40,
    alignSelf: "center",
    width: 260,
    height: 70,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  logoutText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "700",
  },
});