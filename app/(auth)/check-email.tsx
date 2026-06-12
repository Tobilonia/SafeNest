import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/colors";

export default function CheckEmailScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <Text style={styles.backText}>←</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.illustration}>📧</Text>
        <Text style={styles.title}>Check your Email</Text>
        <Text style={styles.subtitle}>
          We've sent a password reset link to your email address. Please check
          your inbox.
        </Text>

        <TouchableOpacity>
          <Text style={styles.resendText}>
            Didn't receive the email?{" "}
            <Text style={styles.resendLink}>Resend email</Text>
          </Text>
        </TouchableOpacity>

        {/* TEMP: simulates tapping the reset link in the email.
            Remove once real email deep-linking is wired up in API integration phase. */}
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => router.push("/(auth)/create-password")}
        >
          <Text style={styles.continueButtonText}>I clicked the link</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => router.push("/(auth)/login")}>
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
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  illustration: {
    fontSize: 80,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 12,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: Colors.grey500,
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 24,
  },
  resendText: {
    fontSize: 14,
    color: Colors.grey500,
    textAlign: "center",
    marginBottom: 24,
  },
  resendLink: {
    color: Colors.primary,
    fontWeight: "600",
  },
  continueButton: {
    backgroundColor: Colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },
  continueButtonText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "600",
  },
  backToLogin: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.primary,
    fontWeight: "600",
  },
});