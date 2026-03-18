import "./styles/global.css"
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";
 
export default function App() {
  return (
    <View className="bg-gray-900 px-4 w-full h-full pt-7">
      <Image
        source={require("./assets/fiap_logo.png")}
        className="w-48 h-48 mx-auto"
        resizeMode="contain"
      />
      <Text className="text-2xl font-bold text-white mb-6 text-center">
        Login
      </Text>
      <Text className="text-2xl font-bold text-white mb-6">
        Email
      </Text>
      <TextInput
        className="w-90 border rounded-lg px-4 py-4 mb-4 bg-white text-red-800"
        placeholder="email..."
      />
      <View className="">
        <View className="flex flex-row w-full justify-between mb-4">
          <Text className="flex text-2xl font-bold text-white">
            Password
          </Text>
          <Text className="text-xl font-bold text-white">
            Forgot password?
          </Text>
        </View>
        <TextInput
          className="w-90 border rounded-lg px-4 py-4 mb-4 bg-white text-red-800"
          placeholder="password..."
        />
      </View>

      <TouchableOpacity className="bg-rose-600 active:bg-red-700 rounded-xl px-6 py-4 mt-4 shadow-lg">
        <Text className="text-white text-center font-bold text-lg">
          Login
        </Text>
      </TouchableOpacity>

      <Text className="text-xl font-bold text-gray-400 text-center p-5 opacity-80">
        ---------- or sign with ---------- 
      </Text>

      <TouchableOpacity className="bg-gray-200 active:bg-gray-700 rounded-xl px-6 py-4 mt-4 shadow-lg">
        <Text className="text-gray-500 text-center font-bold text-lg">
          Continue with Google
        </Text>
      </TouchableOpacity>

      <Text className="text-xl font-bold text-gray-400 text-center p-5 opacity-80">
        Create an account
      </Text>

    </View>
  );
}