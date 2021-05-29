import React from 'react'
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import Router from './src/navigation/Router'

export default function App() {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				<Router />
			</SafeAreaView>
		</>
	)
}
