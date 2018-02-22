import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';

import PeopleListItem from './PeopleListItem';

const PeopleList = props => {
	const { peoples, onPressItem } = props;

	return (
		<FlatList
			style={styles.container}
			data={peoples}
			renderItem={({ item }) => (
				<PeopleListItem
					people={item}
					navigateToPeopleDetail={onPressItem} />
			)}
			keyExtractor={item => item.name.first} />
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff'
	},
})

export default PeopleList;