import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PeopleList = props => {
	const { peoples } = props;
	const textElements = peoples.map(people => {
		const { first } = people.name;
		return (
			<View key={ first } style={styles.line}>
				<Text style={styles.lineText}>
					{ first }
				</Text>
			</View>
		);
	});

	return (
		<View style={styles.container}>
			{ textElements }
		</View>
	)
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#e2f9ff'
	},
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
})

export default PeopleList;