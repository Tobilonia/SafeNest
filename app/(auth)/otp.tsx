import { useState, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, 
TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from "react-native";
import { router } from "expo-router";
import Colors from "../../constants/colors";

export default function OtpScreen() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(45);
  const inputs = useRef<any[]>([]);

  const handleChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
    if (text && index < 5) {
      inputs.current[index + 1].focus();
    }
  };

  const handleKeyPress = (e: NativeSyntheticEvent<TextInputKeyPressEventData>, index: number) => {
    if (e.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const isComplete = otp.every((digit) => digit !== "");

  const handleContinue = () => {
    if (isComplete) {
      router.push({pathname: "/(auth)/preferences"});
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

      <Text style={styles.title}>Verify Your Phone Number</Text>
      <Text style={styles.subtitle}>
        Enter the 6-digit code sent to your phone number
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref: any) => (inputs.current[index] = ref)}
            style={[styles.otpInput, digit && styles.otpFilled]}
            value={digit}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            keyboardType="number-pad"
            maxLength={1}
            textAlign="center"
          />
        ))}
      </View>

      <TouchableOpacity>
        <Text style={styles.resendText}>
          Didn't receive code?{" "}
          <Text style={styles.resendLink}>Resend (00:{timer})</Text>
        </Text>
      </TouchableOpacity>

      <View style={styles.illustration}>
        <Text style={styles.illustrationText}>📱</Text>
        <Text style={styles.safetyText}>
          We use verification to keep our community safe
        </Text>
      </View>

      <TouchableOpacity
        style={[styles.button, !isComplete && styles.buttonDisabled]}
        onPress={handleContinue}
        disabled={!isComplete}
      >
        <Text style={styles.buttonText}>Continue</Text>
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
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 24,
  },
  otpInput: {
    width: 48,
    height: 56,
    borderWidth: 1.5,
    borderColor: Colors.grey200,
    borderRadius: 8,
    fontSize: 24,
    fontWeight: "bold",
    color: Colors.dark,
  },
  otpFilled: {
    borderColor: Colors.primary,
    backgroundColor: "#EEF2FF",
  },
  resendText: {
    textAlign: "center",
    fontSize: 14,
    color: Colors.grey500,
    marginBottom: 40,
  },
  resendLink: {
    color: Colors.primary,
    fontWeight: "600",
  },
  illustration: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  illustrationText: {
    fontSize: 80,
    marginBottom: 16,
  },
  safetyText: {
    fontSize: 14,
    color: Colors.grey500,
    textAlign: "center",
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