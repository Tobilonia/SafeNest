import { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,
TextInput, ScrollView } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

export default function CreatePasswordScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const hasMinLength = password.length >= 8;
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasSpecial = /[!@#$%^&*]/.test(password);
  const passwordsMatch = password === confirmPassword;

  const isValid =
    hasMinLength && hasNumber && hasUppercase && hasSpecial && passwordsMatch;

  const handleSubmit = () => {
    if (isValid) {
      router.replace("/(auth)/password-success");
    }
  };

  const Rule = ({ passed, text }: { passed: boolean; text: string }) => (
    <View style={styles.ruleRow}>
      <Text style={passed ? styles.rulePassed : styles.ruleFailed}>
        {passed ? "✓" : "○"}
      </Text>
      <Text style={passed ? styles.ruleTextPassed : styles.ruleTextFailed}>
        {text}
      </Text>
    </View>
  );

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <Text style={styles.title}>Create New Password</Text>
      <Text style={styles.subtitle}>
        Your new password must be different from your old password
      </Text>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>New Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter new password"
              placeholderTextColor={Colors.grey500}
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              onPress={() => setShowPassword(!showPassword)}
            >
              <Text style={styles.toggleText}>
                {showPassword ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.rulesContainer}>
          <Rule passed={hasMinLength} text="At least 8 characters" />
          <Rule passed={hasNumber} text="Includes a number" />
          <Rule passed={hasUppercase} text="Includes an upper case letter" />
          <Rule passed={hasSpecial} text="Includes a special character" />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Confirm Password</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Confirm new password"
              placeholderTextColor={Colors.grey500}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showConfirm}
            />
            <TouchableOpacity
              onPress={() => setShowConfirm(!showConfirm)}
            >
              <Text style={styles.toggleText}>
                {showConfirm ? "Hide" : "Show"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={handleSubmit}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Reset Password</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
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
  form: {
    gap: 20,
    marginBottom: 32,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 8,
    paddingHorizontal: 16,
  },
  passwordInput: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.dark,
  },
  toggleText: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  rulesContainer: {
    gap: 8,
    paddingLeft: 4,
  },
  ruleRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  rulePassed: {
    fontSize: 14,
    color: Colors.success,
    fontWeight: "bold",
  },
  ruleFailed: {
    fontSize: 14,
    color: Colors.grey500,
  },
  ruleTextPassed: {
    fontSize: 13,
    color: Colors.success,
  },
  ruleTextFailed: {
    fontSize: 13,
    color: Colors.grey500,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: Colors.grey200,
  },
  buttonText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});