import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { themeColors } from '../theme'
import FavoritesScreen from '../screens/FavoritesScreen'
import CartScreen from '../screens/CartScreen'
import HomeScreen from '../screens/HomeScreen';
import { View, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
    const [shown, setShown] = useState( false )

    useEffect( () => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setShown( true );
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setShown( false );
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, [] );

    return (
        <Tab.Navigator
        initialRouteName='Home'
            screenOptions={( { route } ) => ( {
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: 76,
                    marginBottom: shown ? 0 : 20,
                    marginHorizontal: 20,
                    shadowColor: 'white',
                    borderRadius: 40,
                    backgroundColor: themeColors.bgLight
                },
                tabBarIcon: ( { focused, color, size } ) => <CustomIcons route={route} focused={focused} />
            } )}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Favorites" component={FavoritesScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    );
}

const CustomIcons = ( { route, focused } ) => {
    let icon;
    let color = themeColors.bgLight;
    let activeClass = focused ? 'bg-white' : '';
    switch ( route.name ) {
        case 'Home':
            icon = focused ? <Ionicons name="home" size={28} color={color} /> : <Ionicons name="home-outline" size={28} color={'white'} />
            break;

        case 'Favorites':
            icon = focused ? <AntDesign name="heart" size={28} color={color} /> : <AntDesign name="hearto" size={28} color={'white'} />
            break;

        case 'Cart':
            icon = focused ? <MaterialCommunityIcons name="shopping" size={28} color={color} /> : <MaterialCommunityIcons name="shopping-outline" size={28} color={'white'} />
            break;

        default:
            null;
    }

    return (
        <View className={'p-2.5 rounded-full ' + activeClass}>
            {icon}
        </View>
    )
}