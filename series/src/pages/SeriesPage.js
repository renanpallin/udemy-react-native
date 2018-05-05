import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import series from '../../series.json';

const SeriesPage = props => (
	<View>
		<FlatList
			data={series}
			renderItem={({ item }) => (
				<View>
					<Text>{`${item.id} - ${item.title}`}</Text>
				</View>
			)}
			keyExtractor={item => item.id}
		/>
	</View>
);

const styles = StyleSheet.create({

})

export default SeriesPage;