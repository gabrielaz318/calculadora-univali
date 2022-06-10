import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calculadora } from '../pages/Calculadora';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                // backgroundColor: theme.colors.blue,
                borderTopColor: 'transparent',
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            },
            }}
        >
            <Screen 
                name='Calculadora'
                component={Calculadora}
            />
        </Navigator>
    )
}