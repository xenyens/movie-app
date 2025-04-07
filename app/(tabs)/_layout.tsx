import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _Layout() {
  interface TabBarIconInterface {
    title: string;
    iconName: any;
    focused: boolean;
  }

  const TabBarIcon = ({ title, iconName, focused }: TabBarIconInterface) => {
    if (!focused) {
      return (
        <View className="flex flex-1">
          <Ionicons name={iconName} size={20} />
          <Text>{title}</Text>
        </View>
      );
    }

    return (
      <View className="flex flex-row min-w-[112px] justify-center items-center bg-red-500 mt-4 min-h-16 rounded-full overflow-hidden">
        <Ionicons name={iconName} size={20} color={"white"} />
        <Text className="text-white">{title}</Text>
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Home"
              iconName="home-outline"
              focused={focused}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          title: "Search",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Search"
              iconName="search-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          headerShown: false,
          title: "Saved",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Saved"
              iconName="bookmark-outline"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          title: "Profile",
          tabBarIcon: ({ focused }: TabBarIconInterface) => (
            <TabBarIcon
              title="Profile"
              iconName="person-outline"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({});
