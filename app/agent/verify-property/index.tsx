import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function VerifyPropertyScreen() {
  const [address, setAddress] = useState("");
  const [propertyType, setPropertyType] = useState("");

  const photos = [
    "https://picsum.photos/200/200?1",
    "https://picsum.photos/200/200?2",
    "https://picsum.photos/200/200?3",
  ];

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={32}
            color="#666"
          />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>
            Verify Property Ownership
          </Text>

          <Text style={styles.subtitle}>
            Lets verify that you own the property
          </Text>
        </View>
      </View>

      {/* Property Address */}
      <Text style={styles.label}>
        Property Address
      </Text>

      <TextInput
        style={styles.input}
        placeholder="12, Freedom Way, Lekki Phase 1"
        placeholderTextColor="#B5B5B5"
        value={address}
        onChangeText={setAddress}
      />

      {/* Property Type */}
      <Text style={styles.label}>
        Property type
      </Text>

      <TouchableOpacity style={styles.dropdown}>
        <Text style={styles.dropdownText}>
          3 Bedroom Flat
        </Text>

        <Ionicons
          name="chevron-down"
          size={28}
          color="#999"
        />
      </TouchableOpacity>

      {/* Ownership Document */}
      <Text style={styles.label}>
        Upload Ownership Document
      </Text>

      <View style={styles.uploadBox}>
        <View style={styles.fileRow}>
          <Ionicons
            name="document-outline"
            size={32}
            color="#444"
          />

          <Text style={styles.fileName}>
            deed-of-assignment.pdf
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.removeText}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>

      {/* Supporting Document */}
      <Text style={styles.label}>
        Upload Supporting Document
      </Text>

      <View style={styles.uploadBox}>
        <View style={styles.fileRow}>
          <Ionicons
            name="document-outline"
            size={32}
            color="#444"
          />

          <Text style={styles.fileName}>
            utility-bill.pdf
          </Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.removeText}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>

      {/* Photos */}
      <Text style={styles.photoTitle}>
        Upload Photos
      </Text>

      <View style={styles.photoRow}>
        {photos.map((photo, index) => (
          <Image
            key={index}
            source={{ uri: photo }}
            style={styles.photo}
          />
        ))}

        <TouchableOpacity style={styles.addPhoto}>
          <Ionicons
            name="add"
            size={50}
            color="#3559E0"
          />
        </TouchableOpacity>
      </View>

      {/* Continue */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Continue
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
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  header: {
    flexDirection: "row",
    marginBottom: 40,
  },

  headerText: {
    marginLeft: 15,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#666",
  },

  subtitle: {
    fontSize: 18,
    color: "#A0A0A0",
    marginTop: 8,
  },

  label: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginTop: 15,
  },

  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    height: 65,
    paddingHorizontal: 18,
    fontSize: 18,
    marginBottom: 15,
  },

  dropdown: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    height: 65,
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dropdownText: {
    fontSize: 18,
    color: "#B5B5B5",
  },

  uploadBox: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 12,
    minHeight: 70,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  fileRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  fileName: {
    marginLeft: 10,
    color: "#B5B5B5",
    fontSize: 18,
  },

  removeText: {
    color: "#D33A2C",
    fontSize: 16,
  },

  photoTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginTop: 20,
    marginBottom: 15,
  },

  photoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  photo: {
    width: 95,
    height: 95,
    borderRadius: 15,
  },

  addPhoto: {
    width: 95,
    height: 95,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D6D8FF",
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    backgroundColor: "#3559E0",
    height: 65,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },

  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "600",
  },
});