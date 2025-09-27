import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import productDetails from "./screens/productDetails";
import SelectColor from "./screens/selectColor";

export type Product = {
  id: string;
  name: string;
  rate: string;
  price: string;
  color: string;
  image: string;
};
export type RootStackParamList = {
  ProductDetails: { selectedId: string };
  SelectColor: { selectedId: string };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductDetails" component={productDetails} />
        <Stack.Screen name="SelectColor" component={SelectColor} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
