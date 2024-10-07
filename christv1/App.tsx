import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, MenuEnter, MenuView } from './screens';
import { StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Importing icons for tab bar

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string; // Ensure iconName is always a string

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Enter') {
              iconName = focused ? 'add-circle' : 'add-circle-outline';
            } else if (route.name === 'Menu') {
              iconName = focused ? 'restaurant' : 'restaurant-outline';
            } else {
              iconName = 'home-outline'; // Default or fallback icon
            }

            // Return icon component from Ionicons
            return <Ionicons name={iconName as keyof typeof Ionicons.glyphMap} size={size} color={color} />;

          },
          tabBarActiveTintColor: 'black', // Active tab color 
          tabBarInactiveTintColor: 'white', // Inactive tab color
          tabBarStyle: styles.tabBar, // Custom tab bar style
          headerStyle: styles.headerStyle, // Header style for each screen
          headerTitleStyle: styles.headerTitleStyle,
        })}
      >
        <Tab.Screen name="Home" component={Home} options={{ title: 'Home' }} />
        <Tab.Screen name="Enter" component={MenuEnter} options={{ title: 'Enter Menu' }} />
        <Tab.Screen name="Menu" component={MenuView} options={{ title: 'View Menu' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// ----- Styles -----

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#f21905', // Background for the tab bar
    paddingBottom: 5,
    paddingTop: 5,
    height: 60, // Adjust the height for better clickability
  },
  headerStyle: {
    backgroundColor: '#252525', // Header background color 
  },
  headerTitleStyle: {
    fontWeight: 'bold',
    color: '#fff', // White color for header title
  },
});