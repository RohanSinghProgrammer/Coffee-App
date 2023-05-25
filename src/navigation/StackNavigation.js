import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import HomeScreen from '../screens/HomeScreen';
import ItemScreen from '../screens/ItemScreen';
import TabNavigation from './TabNavigation';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
        initialRouteName='HomeTabs'
        screenOptions={{
            headerShown: false
        }}
        >
            <Stack.Screen name="HomeTabs" component={TabNavigation} />
            <Stack.Screen name="Item" component={ItemScreen} />
        </Stack.Navigator>
    )
}

export default StackNavigation