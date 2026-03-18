import { useState } from "react";
import "./styles/global.css";
import { View } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

import { HeaderLogin } from "./components/HeaderLogin";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";
import { DividerText } from "./components/DividerText";
import { ThemeSwitch } from "./components/ThemeSwitch";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View className={`${isDarkMode ? 'bg-gray-900' : 'bg-gray-400'} px-4 w-full h-full pt-7`}>

      <HeaderLogin logo={require("./assets/fiap_logo.png")} title="Login" />

      <InputField label="RM" placeholder="RM..." />
      <InputField label="Password" placeholder="Password..." secureTextEntry />

      <Button
        title="Login"
        className="bg-rose-600 text-white mt-4"
      />

      <DividerText text="---------- or sign with ----------" darkMode={isDarkMode} />

      <Button
        title="Continue with Google"
        icon={<AntDesign name="google" size={24} color="#DB4437" />}
        className="bg-gray-200 mt-4"
      />

      <DividerText text="Create an account" darkMode={isDarkMode} />

      <ThemeSwitch isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

    </View>
  );
}