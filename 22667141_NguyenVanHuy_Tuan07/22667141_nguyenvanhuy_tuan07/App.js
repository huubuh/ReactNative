import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Start from "./screens/Start.jsx";
import BikeList from "./screens/BikeList.jsx";
import BikeDetail from "./screens/BikeDetail.jsx";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="BikeList" component={BikeList} />
        <Stack.Screen name="BikeDetail" component={BikeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
