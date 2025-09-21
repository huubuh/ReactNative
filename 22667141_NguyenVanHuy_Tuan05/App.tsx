import { View } from "react-native";

import Bai01 from "./layout/Bai01";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Bai02 from "./layout/Bai02";

export default function App() {
  return (
    <SafeAreaProvider>
      {/* <Bai01 /> */}
      <Bai02 />
    </SafeAreaProvider>
  );
}
