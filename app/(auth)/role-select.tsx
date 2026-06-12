import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

const roles = [
  {
    id: "renter",
    title: "Renter",
    description: "I want to find a place to rent",
   image: require("../../assets/images/roles/renter.jpg"),
  },
  {
    id: "agent",
    title: "Agent",
    description: "I want to help people find rental properties",
    image: require("../../assets/images/roles/agent.jpg"),
  },
  {
    id: "landlord",
    title: "Landlord",
    description: "I want to list and manage my properties",
    image: require("../../assets/images/roles/landlord.jpg"),
  },
];

export default function RoleSelectScreen() {
  const [selectedRole, setSelectedRole] = useState("");

  const handleContinue = () => {
    if (selectedRole) {
      router.push("/(auth)/register");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Register As</Text>
      <Text style={styles.subtitle}>Choose how you want to use SafeNest</Text>

      <View style={styles.rolesContainer}>
        {roles.map((role) => (
          <TouchableOpacity
            key={role.id}
            style={[
              styles.roleCard,
              selectedRole === role.id && styles.selectedCard,
            ]}
            onPress={() => setSelectedRole(role.id)}
          >
            <Image source={role.image} style={styles.roleImage} />
            <View style={styles.roleInfo}>
              <Text style={styles.roleTitle}>{role.title}</Text>
              <Text style={styles.roleDescription}>{role.description}</Text>
            </View>
            {selectedRole === role.id && (
              <View style={styles.checkmark}>
                <Text style={styles.checkmarkText}>✓</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.button,
          !selectedRole && styles.buttonDisabled,
        ]}
        onPress={handleContinue}
        disabled={!selectedRole}
      >
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
        <Text style={styles.loginText}>
          Already have an account?{" "}
          <Text style={styles.loginLink}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  backButton: {
    marginBottom: 24,
  },
  backText: {
    fontSize: 24,
    color: Colors.dark,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: Colors.grey500,
    marginBottom: 32,
  },
  rolesContainer: {
    flex: 1,
    gap: 16,
  },
  roleCard: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.grey200,
    backgroundColor: Colors.white,
  },
  selectedCard: {
    borderColor: Colors.primary,
    backgroundColor: "#EEF2FF",
  },
  roleImage: {
    width: 56,
    height: 56,
    borderRadius: 8,
    marginRight: 16,
  },
  roleInfo: {
    flex: 1,
  },
  roleTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 4,
  },
  roleDescription: {
    fontSize: 13,
    color: Colors.grey500,
  },
  checkmark: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  checkmarkText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  buttonDisabled: {
    backgroundColor: Colors.grey200,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.grey500,
  },
  loginLink: {
    color: Colors.primary,
    fontWeight: "600",
  },
});