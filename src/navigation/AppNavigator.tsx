import { createStackNavigator } from '@react-navigation/stack';
import MyDrawer from "./DrawerTabs"
import LandingScreen from "../screens/LandingScreen"

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
      headerShown: false,
  }}>
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  );
}

export default MyStack ;