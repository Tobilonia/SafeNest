import Colors from "@/constants/colors";
import { router } from "expo-router";
import { useState } from "react";
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function PersonalInformationScreen() {
  const [fullName, setFullName] = useState("Olamide Kanaruwi");
  const [email, setEmail] = useState("olamide@gmail.com");
  const [phone, setPhone] = useState("+234 910 234 8901");
  const [location, setLocation] = useState("Lagos, Nigeria");
  const [editing, setEditing] = useState(false);

  const handleSave = () => {
    setEditing(false);
  
  };

  return (
    <View style={styles.container}>
     
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Personal Information</Text>
        <TouchableOpacity onPress={() => setEditing(!editing)}>
          <Text style={styles.editText}>{editing ? "Cancel" : "Edit"}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
      
        <View style={styles.avatarSection}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>OK</Text>
          </View>
          {editing && (
            <TouchableOpacity style={styles.changePhotoBtn}>
              <Text style={styles.changePhotoText}>Change Photo</Text>
            </TouchableOpacity>
          )}
        </View>

        
        <View style={styles.formSection}>
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Full Name</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputDisabled]}
              value={fullName}
              onChangeText={setFullName}
              editable={editing}
              placeholderTextColor={Colors.grey500}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Email Address</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputDisabled]}
              value={email}
              onChangeText={setEmail}
              editable={editing}
              keyboardType="email-address"
              placeholderTextColor={Colors.grey500}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Phone Number</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputDisabled]}
              value={phone}
              onChangeText={setPhone}
              editable={editing}
              keyboardType="phone-pad"
              placeholderTextColor={Colors.grey500}
            />
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Location</Text>
            <TextInput
              style={[styles.input, !editing && styles.inputDisabled]}
              value={location}
              onChangeText={setLocation}
              editable={editing}
              placeholderTextColor={Colors.grey500}
            />
          </View>
        </View>

        
        <View style={styles.verifiedBanner}>
          <Text style={styles.verifiedIcon}>✅</Text>
          <View style={styles.verifiedTextContainer}>
            <Text style={styles.verifiedTitle}>Account Verified</Text>
            <Text style={styles.verifiedSubtext}>
              Your identity has been verified by SafeNest
            </Text>
          </View>
        </View>
      </ScrollView>

      
      {editing && (
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save Changes</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: Colors.white,
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
  editText: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: "600",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
    paddingTop: 24,
  },
  avatarSection: {
    alignItems: "center",
    marginBottom: 32,
    gap: 12,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: 44,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: Colors.white,
  },
  changePhotoBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  changePhotoText: {
    fontSize: 13,
    color: Colors.primary,
    fontWeight: "600",
  },
  formSection: {
    gap: 16,
    marginBottom: 24,
  },
  fieldContainer: {
    gap: 6,
  },
  fieldLabel: {
    fontSize: 13,
    fontWeight: "600",
    color: Colors.dark,
  },
  input: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 14,
    color: Colors.dark,
  },
  inputDisabled: {
    borderColor: Colors.grey200,
    backgroundColor: Colors.background,
    color: Colors.grey500,
  },
  verifiedBanner: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEF9EE",
    borderRadius: 12,
    padding: 16,
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.success,
  },
  verifiedIcon: {
    fontSize: 24,
  },
  verifiedTextContainer: {
    flex: 1,
  },
  verifiedTitle: {
    fontSize: 14,
    fontWeight: "700",
    color: Colors.success,
    marginBottom: 2,
  },
  verifiedSubtext: {
    fontSize: 12,
    color: Colors.grey500,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.grey200,
  },
  saveButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
});
