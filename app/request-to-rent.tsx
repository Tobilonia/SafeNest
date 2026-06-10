import { useState } from "react";
import {
  View, Text, StyleSheet, TouchableOpacity,
  ScrollView, TextInput
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

export default function RequestToRentScreen() {
  const [moveInDate, setMoveInDate] = useState("");
  const [duration, setDuration] = useState("");
  const [hearAbout, setHearAbout] = useState("");
  const [message, setMessage] = useState("");

  const isValid = moveInDate && duration;

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Request to Rent</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.propertyCard}>
        <View style={styles.propertyImage}>
          <Text style={styles.propertyEmoji}>🏢</Text>
        </View>
        <View style={styles.propertyInfo}>
          <Text style={styles.propertyTitle}>2 Bedroom Apartment</Text>
          <Text style={styles.propertyLocation}>
            📍 Lekki Phase 1, Lagos
          </Text>
          <Text style={styles.propertyPrice}>₦2,500,000 /year</Text>
          <View style={styles.propertyDetails}>
            <Text style={styles.detailText}>🛏 2</Text>
            <Text style={styles.detailText}>🚿 2</Text>
            <Text style={styles.detailText}>📐 120m²</Text>
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Request Details</Text>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Move-in date</Text>
        <TextInput
          style={styles.input}
          placeholder="Select move-in date"
          placeholderTextColor={Colors.grey500}
          value={moveInDate}
          onChangeText={setMoveInDate}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Rental Duration</Text>
        <TextInput
          style={styles.input}
          placeholder="Select duration"
          placeholderTextColor={Colors.grey500}
          value={duration}
          onChangeText={setDuration}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          How do you hear about this property?
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Select an option"
          placeholderTextColor={Colors.grey500}
          value={hearAbout}
          onChangeText={setHearAbout}
        />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>
          Add a message to the agent (optional)
        </Text>
        <TextInput
          style={styles.textArea}
          placeholder="Hi, I'm interested in this property and would like to schedule a viewing"
          placeholderTextColor={Colors.grey500}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
        />
      </View>

      <TouchableOpacity
        style={[styles.button, !isValid && styles.buttonDisabled]}
        onPress={() => router.push({
          pathname: "/review-submit" as any
        })}
        disabled={!isValid}
      >
        <Text style={styles.buttonText}>Continue</Text>
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
    paddingBottom: 40,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  backText: {
    fontSize: 24,
    color: Colors.dark,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.dark,
  },
  propertyCard: {
    flexDirection: "row",
    margin: 24,
    backgroundColor: Colors.background,
    borderRadius: 12,
    overflow: "hidden",
  },
  propertyImage: {
    width: 90,
    height: 90,
    backgroundColor: Colors.grey200,
    alignItems: "center",
    justifyContent: "center",
  },
  propertyEmoji: {
    fontSize: 32,
  },
  propertyInfo: {
    flex: 1,
    padding: 12,
  },
  propertyTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 4,
  },
  propertyLocation: {
    fontSize: 12,
    color: Colors.grey500,
    marginBottom: 4,
  },
  propertyPrice: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.primary,
    marginBottom: 4,
  },
  propertyDetails: {
    flexDirection: "row",
    gap: 8,
  },
  detailText: {
    fontSize: 11,
    color: Colors.grey500,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  inputGroup: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 8,
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
  textArea: {
    borderWidth: 1,
    borderColor: Colors.grey200,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: Colors.dark,
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: Colors.primary,
    marginHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
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