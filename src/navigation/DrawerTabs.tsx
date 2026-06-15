import { createDrawerNavigator } from '@react-navigation/drawer';
import MyTabs from "./BottomTabsNavigator";
import AboutScreen from "../screens/AboutScreen"

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#090909",
        },
        headerTintColor: "#ff4f9a",
        headerTitleStyle: {
          fontWeight: "800",
        },
        drawerStyle: {
          backgroundColor: "#090909",
        },
        drawerActiveBackgroundColor: "#ff4f9a",
        drawerActiveTintColor: "#090909",
        drawerInactiveTintColor: "#ffffff",
        sceneStyle: {
          backgroundColor: "#090909",
        },
      }}
    >
      <Drawer.Screen name="Odrer" component={MyTabs} />
      <Drawer.Screen name="Settings" component={AboutScreen} />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
