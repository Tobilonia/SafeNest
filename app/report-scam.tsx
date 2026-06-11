import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Modal,
} from "react-native";
import { router } from "expo-router";
import Colors from "@/constants/colors";

const reasons = [
  "Fake property listing",
  "Fraudulent agent",
  "Payment scam",
  "Identity theft",
  "Misleading information",
  "Other suspicious activity",
];

export default function ReportScamScreen() {
  const [selectedReason, setSelectedReason] = useState("");
  const [details, setDetails] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!selectedReason) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.backText}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Report Scam</Text>
          <View style={{ width: 24 }} />
        </View>
        <View style={styles.successContainer}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successTitle}>Report Submitted</Text>
          <Text style={styles.successSubtext}>
            Thank you for helping keep SafeNest safe. Our team will review your
            report within 24 hours.
          </Text>
          <TouchableOpacity
            style={styles.doneButton}
            onPress={() => router.back()}
          >
            <Text style={styles.doneButtonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Report Scam</Text>
        <TouchableOpacity>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Hero */}
        <View style={styles.heroSection}>
          <View style={styles.warningCircle}>
            <Text style={styles.warningIcon}>⚠️</Text>
          </View>
          <Text style={styles.heroTitle}>Report a Scam or Suspicious Activity</Text>
          <Text style={styles.heroSubtitle}>
            Help us keep SafeNest safe for everyone.{"\n"}
            Report any suspicious listings, users or activities
          </Text>
        </View>

        {/* Reason Dropdown */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>What do you want to report?</Text>
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setShowDropdown(true)}
          >
            <Text
              style={[
                styles.dropdownText,
                !selectedReason && styles.placeholderText,
              ]}
            >
              {selectedReason || "Select a reason"}
            </Text>
            <Text style={styles.chevron}>⌄</Text>
          </TouchableOpacity>
        </View>

        {/* Details */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Tell us more (optional)</Text>
          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              placeholder="Provide as much details as possible..."
              placeholderTextColor={Colors.grey500}
              multiline
              maxLength={500}
              value={details}
              onChangeText={setDetails}
              textAlignVertical="top"
            />
            <Text style={styles.charCount}>{details.length}/500</Text>
          </View>
        </View>

        {/* Upload */}
        <View style={styles.fieldContainer}>
          <Text style={styles.fieldLabel}>Add photos or screenshots (optional)</Text>
          <TouchableOpacity style={styles.uploadBox}>
            <Text style={styles.uploadIcon}>📎</Text>
            <Text style={styles.uploadText}>Upload Files</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Submit Button */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            !selectedReason && styles.submitButtonDisabled,
          ]}
          onPress={handleSubmit}
          disabled={!selectedReason}
        >
          <Text style={styles.submitButtonText}>Submit Report</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown Modal */}
      <Modal
        visible={showDropdown}
        transparent
        animationType="slide"
        onRequestClose={() => setShowDropdown(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          onPress={() => setShowDropdown(false)}
        >
          <View style={styles.modalSheet}>
            <View style={styles.modalHandle} />
            <Text style={styles.modalTitle}>Select a reason</Text>
            {reasons.map((reason) => (
              <TouchableOpacity
                key={reason}
                style={[
                  styles.modalOption,
                  selectedReason === reason && styles.modalOptionActive,
                ]}
                onPress={() => {
                  setSelectedReason(reason);
                  setShowDropdown(false);
                }}
              >
                <Text
                  style={[
                    styles.modalOptionText,
                    selectedReason === reason && styles.modalOptionTextActive,
                  ]}
                >
                  {reason}
                </Text>
                {selectedReason === reason && (
                  <Text style={styles.checkmark}>✓</Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
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
  bellIcon: {
    fontSize: 20,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  heroSection: {
    alignItems: "center",
    paddingVertical: 32,
    gap: 12,
  },
  warningCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#FFE8E8",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  warningIcon: {
    fontSize: 36,
  },
  heroTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.dark,
    textAlign: "center",
  },
  heroSubtitle: {
    fontSize: 14,
    color: Colors.grey500,
    textAlign: "center",
    lineHeight: 22,
  },
  fieldContainer: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: Colors.dark,
    marginBottom: 8,
  },
  dropdown: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: Colors.grey200,
  },
  dropdownText: {
    fontSize: 14,
    color: Colors.dark,
  },
  placeholderText: {
    color: Colors.grey500,
  },
  chevron: {
    fontSize: 16,
    color: Colors.grey500,
  },
  textAreaContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: Colors.grey200,
    padding: 16,
  },
  textArea: {
    fontSize: 14,
    color: Colors.dark,
    minHeight: 100,
    lineHeight: 22,
  },
  charCount: {
    fontSize: 11,
    color: Colors.grey500,
    textAlign: "right",
    marginTop: 8,
  },
  uploadBox: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: Colors.primary,
    borderStyle: "dashed",
    paddingVertical: 20,
    alignItems: "center",
    gap: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  uploadIcon: {
    fontSize: 18,
  },
  uploadText: {
    fontSize: 15,
    color: Colors.primary,
    fontWeight: "600",
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
  submitButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  submitButtonDisabled: {
    backgroundColor: Colors.grey500,
  },
  submitButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
  // Success state
  successContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    gap: 16,
  },
  successIcon: {
    fontSize: 64,
    marginBottom: 8,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: Colors.dark,
  },
  successSubtext: {
    fontSize: 14,
    color: Colors.grey500,
    textAlign: "center",
    lineHeight: 22,
  },
  doneButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 16,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 16,
  },
  doneButtonText: {
    fontSize: 16,
    color: Colors.white,
    fontWeight: "600",
  },
  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "flex-end",
  },
  modalSheet: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    paddingBottom: 40,
  },
  modalHandle: {
    width: 40,
    height: 4,
    backgroundColor: Colors.grey200,
    borderRadius: 2,
    alignSelf: "center",
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.dark,
    marginBottom: 16,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: Colors.grey200,
  },
  modalOptionActive: {
    backgroundColor: "#F5F7FF",
    marginHorizontal: -24,
    paddingHorizontal: 24,
  },
  modalOptionText: {
    fontSize: 14,
    color: Colors.dark,
  },
  modalOptionTextActive: {
    color: Colors.primary,
    fontWeight: "600",
  },
  checkmark: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
  },
});