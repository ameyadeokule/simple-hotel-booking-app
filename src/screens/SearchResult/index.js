import React from 'react'
import { View, FlatList } from 'react-native'
import feed from '../../consts/hotels'
import Post from '../../components/Post'

export default function SearchResultScreen() {
	return (
		<View>
			<FlatList
				data={feed}
				renderItem={({ item }) => <Post post={item} />}
			/>
		</View>
	)
}
