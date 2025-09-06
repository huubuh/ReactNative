import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Screen01 from './Components/screen01';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Screen02 from './Components/screen02';
import Screen03 from './Components/screen03';
import Screen04 from './Components/screen04';
import Screen05 from './Components/screen05';
import Screen06 from './Components/screen06';
import Screen07 from './Components/screen07';

export default function App() {
  return (
    <SafeAreaProvider>
   {/* <Screen01/> */}
   {/* <Screen02/> */}
   {/* <Screen03/> */}
   {/* <Screen04/> */}
   {/* <Screen05/> */}
   {/* <Screen06/> */}
   <Screen07/>
   </SafeAreaProvider>
  );
}


