import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import Home from "../screens/Home";
import Details from "../screens/Details";
import MovieScreen from "../screens/MovieScreen";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

const HomeNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Details"
        component={Details}
      />
      <Stack.Screen
        name="MovieScreen"
        component={MovieScreen}
      />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
