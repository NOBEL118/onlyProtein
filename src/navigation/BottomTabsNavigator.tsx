import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import OrderScreen from '../screens/OrderScreen';
import HomeScreen from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: '#ff4f9a',
        tabBarInactiveTintColor: '#ffffff',
        tabBarStyle: {
          backgroundColor: '#090909',
          borderTopColor: '#ff4f9a',
          height: 64,
        },
        tabBarLabelStyle: {
          fontWeight: '700',
        },
        headerShown: false,

        tabBarIcon: ({ color, size, focused }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'ellipse-outline';

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Order') {
            iconName = focused ? 'receipt' : 'receipt-outline';
          }

          return (
            <Ionicons
              name={iconName}
              size={size}
              color={color}
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Order" component={OrderScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;
