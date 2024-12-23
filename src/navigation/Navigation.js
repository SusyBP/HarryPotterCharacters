import React from 'react';//necessary to use JSX (js + html)
import { Image, Text } from 'react-native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import AccountScreen from '../screens/AcountScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import HousesNavigation from './HousesNavigation';

const Tab = createBottomTabNavigator()

export default function Navigation() {
  return (
    <Tab.Navigator screenOptions={navigationStyles} initialRouteName="Houses">
      <Tab.Screen name='FavoritesScreenName' component={FavoritesScreen}
        options={{
          tabBarLabel: () => (<Text style={{ color: '#222f5b' }}>Favorites</Text>),
          tabBarIcon: ({ color, size }) => (
            <Icon name="magic" color={'#ecb939'} size={size} style={{ marginBottom: -8 }} />
          ),//use this syntax ()=>() to avoid explicit return statement
          headerTitleAlign: "center",
          
        }} />
      <Tab.Screen name='Houses' component={HousesNavigation}
        options={{
          tabBarLabel: '',
          tabBarIcon: RenderHowartIcon,
          headerTitleAlign: "center",
          headerShown: false
        }} />
      <Tab.Screen name='Account' component={AccountScreen} options={{
        tabBarLabel: () => (<Text style={{ color: '#222f5b' }}>Account</Text>),
        tabBarIcon: ({ color, size }) => (<Icon name="hat-wizard" color={'#222f5b'} size={size} style={{ marginBottom: -8 }} />),
        headerTitleAlign: "center",
      }} />
    </Tab.Navigator>
  )
}
const navigationStyles = {
  tabBarStyle: {
    position: 'absolute',
    height: 80,
    paddingBottom: 15,
    paddingTop: 3,
    bottom: 0
  },
}

const RenderHowartIcon = () => {
  return <Image source={require("../../assets/Hogwarts.png")} style={{ width: 75, height: 90, top: -15 }} />
}