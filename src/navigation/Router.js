import React from 'react'
import { NavigationContainer, StackActions } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import DestinationSearchScreen from '../screens/DestintionSearch'
import GuestsScreen from '../screens/Guests'

const stack = createStackNavigator()

export default function Router() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name={'Destination Search'}
					component={DestinationSearchScreen}
					options={{ title: 'Search your Destination' }}
				/>
				<Stack.Screen
					name={'Guests'}
					component={GuestsScreen}
					options={{ title: 'How many People?' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
