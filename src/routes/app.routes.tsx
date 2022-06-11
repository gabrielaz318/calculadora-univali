import React from 'react';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons';
import { Historico } from '../pages/Historico';
import { Calculadora } from '../pages/Calculadora';
import { RFValue } from 'react-native-responsive-fontsize';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    const theme = useTheme();
    return (
        // COmponente pai da navegação e das telas
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
            {/* Tela da calculadora  */}
            <Screen 
                name='Calculadora'
                component={Calculadora}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='hash'
                            size={20}
                            color={focused ? theme.colors.orange : '#333'}
                        />
                    )
                }}
            />
            {/* Tela do histórico */}
            <Screen 
                name='Histórico'
                component={Historico}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather
                            name='archive'
                            size={20}
                            color={focused ? theme.colors.orange : '#333'}
                        />
                    )
                }}
            />
        </Navigator>
    )
}