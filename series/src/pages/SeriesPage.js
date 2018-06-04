import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';


import series from '../../series.json';

const isEven = number => number % 2 === 0;

const SeriesPage = props => (
	<View>
		<FlatList
			data={[...series, { isLast: true }]}
			renderItem={({ item, index }) => (
				item.isLast
					? <AddSerieCard
						isFirstColumn={isEven(index)}
						onPress={() => props.navigation.navigate('SerieForm')} />
					: <SerieCard
						serie={item}
						isFirstColumn={isEven(index)}
						onPress={() => props.navigation.navigate('SerieDetail', { serie: item })}
					/>
			)}
			keyExtractor={item => item.id}
			numColumns={2}
			ListHeaderComponent={props => (<View style={styles.marginTop} />)}
			ListFooterComponent={props => (<View style={styles.marginBottom} />)}
		/>
	</View>
);

const styles = StyleSheet.create({
	marginTop: {
		marginTop: 5,
	},
	marginBottom: {
		marginBottom: 5,
	}
})

export default SeriesPage;