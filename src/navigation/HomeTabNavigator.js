import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../screens/Home'
import Fontisto from 'react-native-vector-icons/Fontisto'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'
import EvilIcons from 'react-native-vector-icons/EvilIcons'

const TabNavigator = createBottomTabNavigator()

export default function HomeTabNavigator() {
	return (
		<TabNavigator.Navigator tabBarOptions={{ activeTintColor: '#f15454' }}>
			<Tab.Screen
				name={'Explore'}
				component={HomeScreen}
				option={{
					tabBarIcon: ({ color }) => (
						<Fontisto name='search' size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={'Saved'}
				component={HomeScreen}
				option={{
					tabBarIcon: ({ color }) => (
						<FontAwesome name='heart-o' size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={'Airbnb'}
				component={HomeScreen}
				option={{
					tabBarIcon: ({ color }) => (
						<FontAwesome5 name='airbnb' size={25} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name={'Messages'}
				component={HomeScreen}
				option={{
					tabBarIcon: ({ color }) => (
						<Feather
							name='message-square'
							size={25}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name={'Profile'}
				component={HomeScreen}
				option={{
					tabBarIcon: ({ color }) => (
						<EvilIcons name='user' size={25} color={color} />
					),
				}}
			/>
		</TabNavigator.Navigator>
	)
}
