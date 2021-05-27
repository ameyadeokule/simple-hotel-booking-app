import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView } from 'react-native'
import HomeScreen from './src/screens/Home'
import Post from './src/components/Post'
import feed from './src/consts/hotels'

const psot1 = feed[1]

export default function App() {
	return (
		<>
			<StatusBar barStyle='dark-content' />
			<SafeAreaView>
				{/* <HomeScreen /> */}
				<Post post={psot1} />
			</SafeAreaView>
		</>
	)
}
