import { useEffect } from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(auth)" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="property" />
        <Stack.Screen name="filter" />
        <Stack.Screen name="listings" />
        <Stack.Screen name="request-to-rent" />
        <Stack.Screen name="chat/[id]" />
        <Stack.Screen name="review-submit" />
        <Stack.Screen name="pay-deposit" />
        <Stack.Screen name="payment-success" />
      </Stack>
    </>
  );
}
