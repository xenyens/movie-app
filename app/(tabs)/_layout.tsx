import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

export default function _Layout() {
  return (
    <Tabs screenOption={{}}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Welcome",
        }}
      />

      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
