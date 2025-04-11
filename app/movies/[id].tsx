import { Image, Platform, Text, View } from "react-native";
import React from "react";
// import { Result } from "@/interfaces/tmdb.interface";
import { ShowRating } from "@/app/components/ShowRaiting";
import { Stack, useLocalSearchParams } from "expo-router";

export default function MovieDetails({}) {
  const { title, overview, backdrop_path, release_date, vote_average } =
    useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerShown: false }} />
      <View
        className="flex-1 bg-primary"
        // style={{ marginTop: Platform.OS === "ios" ? 60 : 0 }}
      >
        <Image
          source={{
            uri: backdrop_path
              ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
              : "http://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-[500px] rounded-lg "
          resizeMode="cover"
          // style={{ marginTop: Platform.OS === "ios" ? 40 : 0 }}
        />
        <View className="p-5">
          <Text className="text-2xl font-bold text-white">{title}</Text>
          <View className="flex-row mt-4 gap-x-2">
            <Text className=" text-gray-300 mx-3 text-justify">
              {release_date.toString().split("-")[0]}
            </Text>
            {ShowRating(Math.floor(Number(vote_average)))}
            <Text className="text-white">
              {Number(vote_average).toFixed(1)}/10
            </Text>
          </View>
          <Text className="text-sm text-gray-400 mt-4">Overview</Text>
          <Text className=" text-gray-400 mx-3 text-justify mt-3">
            {overview}
          </Text>
        </View>
      </View>
    </>
  );
}
