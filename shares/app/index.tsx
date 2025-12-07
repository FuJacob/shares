import { View, Text } from "react-native";

export default function HomePage() {
  return (
    <View className="flex-1 bg-white justify-center items-center px-6">
      <View className="items-center">
        <Text className="text-5xl font-bold text-gray-900 mb-4">Shares</Text>
        <Text className="text-xl text-gray-600 text-center mb-8">
          Your investment portfolio, simplified
        </Text>
        <View className="w-full max-w-md">
          <Text className="text-base text-gray-500 text-center">
            Track your investments, analyze performance, and make informed decisions—all in one place.
          </Text>
        </View>
      </View>
    </View>
  );
}
