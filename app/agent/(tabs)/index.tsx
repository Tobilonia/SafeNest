import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

export default function AgentHomeScreen() {
  const transactions = [
    {
      id: 1,
      title: "2 Bedroom Flat, Yaba",
      date: "10 Jun 2025",
      amount: "₦45,000",
      type: "credit",
    },
    {
      id: 2,
      title: "Withdraw to Bank",
      date: "10 Jun 2025",
      amount: "₦45,000",
      type: "debit",
    },
    {
      id: 3,
      title: "3 Bedroom Flat, Yaba",
      date: "10 Jun 2025",
      amount: "₦145,000",
      type: "credit",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.profileRow}>
            <Image
              source={{
                uri: "https://i.pravatar.cc/150",
              }}
              style={styles.avatar}
            />

            <View>
              <Text style={styles.welcome}>
                Welcome back,
              </Text>

              <View style={styles.nameRow}>
                <Text style={styles.name}>Sodiq</Text>

                <Ionicons
                  name="checkmark-circle"
                  size={22}
                  color="#3559E0"
                  style={{ marginLeft: 5 }}
                />
              </View>
            </View>
          </View>

          <Ionicons
            name="notifications"
            size={28}
            color="#000"
          />
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>
            Available Balance
          </Text>

          <Text style={styles.balanceAmount}>
            0.00
          </Text>

          <TouchableOpacity style={styles.withdrawBtn}>
            <Text style={styles.withdrawText}>
              Withdraw
            </Text>
          </TouchableOpacity>
        </View>

        {/* Transactions */}
        <View style={styles.transactionHeader}>
          <Text style={styles.transactionTitle}>
            Recent Transactions
          </Text>

          <TouchableOpacity>
            <Text style={styles.viewAll}>
              View All
            </Text>
          </TouchableOpacity>
        </View>

        {transactions.map((item) => (
          <View
            key={item.id}
            style={styles.transactionItem}
          >
            <View>
              <Text style={styles.transactionName}>
                {item.title}
              </Text>

              <Text style={styles.transactionDate}>
                {item.date}
              </Text>
            </View>

            <View style={styles.amountRow}>
              <View
                style={[
                  styles.iconCircle,
                  {
                    backgroundColor:
                      item.type === "credit"
                        ? "#DDF8E4"
                        : "#F2F2F2",
                  },
                ]}
              >
                <Ionicons
                  name={
                    item.type === "credit"
                      ? "arrow-down"
                      : "arrow-up"
                  }
                  size={20}
                  color={
                    item.type === "credit"
                      ? "green"
                      : "red"
                  }
                />
              </View>

              <Text style={styles.amount}>
                {item.amount}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Floating Add Button */}
      <TouchableOpacity
        style={styles.fab}
        onPress={() =>
          router.push("/agent/verify-property")
        }
      >
        <Ionicons
          name="add"
          size={40}
          color="#fff"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    paddingTop: 70,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  profileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  avatar: {
    width: 55,
    height: 55,
    borderRadius: 28,
    marginRight: 12,
  },

  welcome: {
    fontSize: 18,
    color: "#666",
  },

  nameRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  name: {
    fontSize: 36,
    fontWeight: "700",
  },

  balanceCard: {
  backgroundColor: "#EEF3FF",
  borderRadius: 24,
  padding: 24,
  height: 220,
  marginTop: 70,
},

  balanceLabel: {
    fontSize: 18,
    fontWeight: "600",
  },

  balanceAmount: {
    fontSize: 42,
    fontWeight: "700",
    marginTop: 15,
  },

  withdrawBtn: {
  position: "absolute",
  right: 25,
  bottom: 25,
  backgroundColor: "#3559E0",
  width: 180,
  height: 60,
  borderRadius: 10,
  justifyContent: "center",
  alignItems: "center",
},

  withdrawText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },

  transactionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 20,
  },

  transactionTitle: {
    fontSize: 24,
    fontWeight: "700",
  },

  viewAll: {
  color: "#3559E0",
  fontSize: 20,
  fontWeight: "500",
},

  transactionItem: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 30,
},

  transactionName: {
    fontSize: 18,
    fontWeight: "600",
  },

  transactionDate: {
    color: "#999",
    marginTop: 5,
  },

  amountRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  amount: {
    fontSize: 20,
    fontWeight: "700",
  },

  fab: {
  position: "absolute",
  right: 30,
  top: 120,
  width: 72,
  height: 72,
  borderRadius: 36,
  backgroundColor: "#EEF2FA",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 100,
},
});