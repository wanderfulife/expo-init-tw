import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home/Home";
import { TailwindProvider } from "tailwindcss-react-native";

const Stack = createNativeStackNavigator();

export default function AppNavigation(AppState) {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" /*options={{headerShown: false}}*/>
            {(props) => <Home {...props} AppState={AppState} />}
          </Stack.Screen>
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}
