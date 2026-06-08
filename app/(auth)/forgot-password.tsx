import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,
TextInput } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const isValid = email.length > 0;

  const handleSend = () => {
    if (isValid) {
      router.push("/(auth)/check-email");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter your email address and we'll send you a
        link to reset your password
      </Text>

      <View style={styles.illustration}>
        <Text style={styles.illustrationText}>🔒</Text>
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Email Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your email address"
          placeholderTextColor={Colors.grey500}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleSend}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Send Reset Link</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.backToLogin}>Back to Sign In</Text>
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
    lineHeight: 22,
  },
  illustration: {
    alignItems: "center",
    marginBottom: 40,
  },
  illustrationText: {
    fontSize: 80,
  },
  inputGroup: {
    gap: 8,
    marginBottom: 32,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.dark,
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
  backToLogin: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
});