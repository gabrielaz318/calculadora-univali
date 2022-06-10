import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Calculadora } from '../pages/Calculadora';
import { RFValue } from 'react-native-responsive-fontsize';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        <Navigator
            screenOptions={{
            headerShown: false,
            tabBarShowLabel: true,
            tabBarLabelStyle: {
                fontFamily: theme.fonts.roboto_400,
                fontSize: RFValue(13),
                color: '#000'
            },
            tabBarStyle: {
                // backgroundColor: theme.colors.blue,
                borderTopColor: 'transparent',
            },
            }}
            initialRouteName='Calculadora'
        >
            <Screen 
                name='Calculadora'
                component={Calculadora}
                options={{
                    tabBarIcon: (focus) => (
                        <Feather
                            name='hash'
                            size={20}
                            color={focus ? theme.colors.orange : '#333'}
                        />
                    )
                }}
            />
        </Navigator>
    )
}