import { View, Text, ScrollView, TouchableOpacity } from "react-native";

export default function HomePage() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <View className="p-6">
        {/* Header */}
        <View className="mb-8 mt-12">
          <Text className="text-4xl font-bold text-gray-900 mb-2">Shares</Text>
          <Text className="text-lg text-gray-600">
            Your portfolio dashboard
          </Text>
        </View>

        {/* Stats Cards */}
        <View className="mb-6">
          <View className="bg-white p-6 rounded-2xl shadow-sm mb-4">
            <Text className="text-sm text-gray-500 mb-1">Total Value</Text>
            <Text className="text-3xl font-bold text-gray-900">$24,582.50</Text>
            <Text className="text-sm text-green-600 mt-1">
              +12.5% this month
            </Text>
          </View>

          <View className="flex-row gap-4">
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm">
              <Text className="text-sm text-gray-500 mb-1">Holdings</Text>
              <Text className="text-2xl font-bold text-gray-900">8</Text>
            </View>
            <View className="flex-1 bg-white p-4 rounded-2xl shadow-sm">
              <Text className="text-sm text-gray-500 mb-1">Gain/Loss</Text>
              <Text className="text-2xl font-bold text-green-600">+$2,847</Text>
            </View>
          </View>
        </View>

        {/* Holdings List */}
        <View className="mb-6">
          <Text className="text-xl font-bold text-gray-900 mb-4">
            Your Holdings
          </Text>

          {["AAPL", "GOOGL", "MSFT", "TSLA"].map((ticker, index) => (
            <View
              key={ticker}
              className="bg-white p-4 rounded-xl shadow-sm mb-3"
            >
              <View className="flex-row justify-between items-center">
                <View>
                  <Text className="text-lg font-semibold text-gray-900">
                    {ticker}
                  </Text>
                  <Text className="text-sm text-gray-500">10 shares</Text>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-semibold text-gray-900">
                    ${(Math.random() * 1000 + 100).toFixed(2)}
                  </Text>
                  <Text
                    className={`text-sm ${index % 2 === 0 ? "text-green-600" : "text-red-600"}`}
                  >
                    {index % 2 === 0 ? "+" : "-"}
                    {(Math.random() * 5).toFixed(2)}%
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        {/* Action Buttons */}
        <View className="flex-row gap-4 mb-8">
          <TouchableOpacity className="flex-1 bg-blue-600 p-4 rounded-xl items-center">
            <Text className="text-white font-semibold text-base">Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-gray-800 p-4 rounded-xl items-center">
            <Text className="text-white font-semibold text-base">Sell</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
