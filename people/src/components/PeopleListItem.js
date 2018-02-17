import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { capitalizeFirstLetter } from '../util';

const PeopleListItem = props => {
	const { people } = props;
	const { title, first, last } = people.name;
	return (
		<View style={styles.line}>
			<Image style={styles.avatar} source={{ uri: people.picture.thumbnail }} />
			<Text style={styles.lineText}>
				{ `${
					capitalizeFirstLetter(title)
				} ${
					capitalizeFirstLetter(first)
				} ${
					capitalizeFirstLetter(last)
				}` }
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	line: {
		height: 60,
		borderBottomWidth: 1,
		borderBottomColor: "#bbb",

		alignItems: 'center',
		flexDirection: 'row',
	},
	lineText: {
		fontSize: 20,
		paddingLeft: 15
	},
	avatar: {
		aspectRatio: 1,
		width: 40
	}
});

export default PeopleListItem;