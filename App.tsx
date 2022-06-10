import React, { useCallback, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Updates from 'expo-updates';
import * as SplashScreen from 'expo-splash-screen';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_500Medium
} from '@expo-google-fonts/roboto';

import { Routes } from './src/routes';
import { View } from 'react-native';

export default function App() {
	useEffect(() => {
		async function updateApp() {
			const { isAvailable } = await Updates.checkForUpdateAsync()
			if (isAvailable) {
				await Updates.fetchUpdateAsync()
				await Updates.reloadAsync()
			}
		}
		async function prepare() {
			await SplashScreen.preventAutoHideAsync();
		}
		// updateApp();
		prepare();
	}, [])

	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_500Medium
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
		  await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View onLayout={onLayoutRootView}>
			<Routes/>
		</View>
	);
}

