import React from 'react'
import { View, Text, ImageBackground, Pressable } from 'react-native'
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto'

export default function HomeScreen() {
	return (
		<View>
			<Pressable
				style={styles.searchButton}
				onPress={() => {
					console.log('button pressed')
				}}>
				<Fontisto name={'search'} size={24} color={'#f15454'} />
				<Text style={styles.buttonText}>Where are you going?</Text>
			</Pressable>
			<ImageBackground
				source={require('../../assets/wallpaper.jpg')}
				style={styles.image}>
				<Text style={styles.title}>Go Near</Text>
				<Pressable
					style={styles.button}
					onPress={() => {
						console.log('button pressed')
					}}>
					<Text style={styles.buttonText}>Explore Nearby States</Text>
				</Pressable>
			</ImageBackground>
		</View>
	)
}
