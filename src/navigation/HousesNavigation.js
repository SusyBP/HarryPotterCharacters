import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HouseCharactersScreen from '../screens/HouseCharactersScreen';
import HouseScreen from '../screens/HousesScreen';
import CharacterScreen from '../screens/CharacterScreen';
import { StyleSheet } from 'react-native';

const Stack = createStackNavigator();

export default function HousesNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='HousesScreen' component={HouseScreen} 
            options={{
                title: "Wellcome to Hogwarts",
                headerTitleAlign: "center",
            }} />
             <Stack.Screen name='HouseCharactersScreen' component={HouseCharactersScreen} 
            options={{
                title: "House Characters",
                headerTransparent: false
            }} />
            <Stack.Screen name='CharacterScreen' component={CharacterScreen} style={styles.navigationTitle}
            options={{
                title: "Character",
                headerTransparent: false
            }} />
        </Stack.Navigator>
    )
}

const styles= StyleSheet.create({
    navigationTitle:{
        color: '#fff'
    }
})
