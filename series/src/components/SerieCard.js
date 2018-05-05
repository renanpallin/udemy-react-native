import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SerieCard = ({ serie }) => (
	<View style={styles.container}>
		<View style={styles.card}>
			<Text>{`${serie.id} - ${serie.title}`}</Text>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	card: {
		flex: 1,
		borderWidth: 1
	}
});

export default SerieCard;