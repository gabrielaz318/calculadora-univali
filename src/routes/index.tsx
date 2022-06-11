import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './app.routes';

export function Routes() {
  return (
        // Componente pai da navegação
        <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
  );
}