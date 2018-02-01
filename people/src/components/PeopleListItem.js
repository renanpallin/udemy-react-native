import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const PeopleListItem = props => {
	const { people } = props;
	const { first, last } = people.name;
	return (
		<View style={styles.line}>
			<Text style={styles.lineText}>
				{ first }
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
	}
});

export default PeopleListItem;