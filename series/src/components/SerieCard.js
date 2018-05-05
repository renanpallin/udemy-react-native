import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	Dimensions,
	Image
} from 'react-native';

const SerieCard = ({ serie }) => (
	<View style={styles.container}>
		<View style={styles.card}>
			<Image
				source={{
					uri: serie.img
				}}
				aspectRatio={1}
				resizeMode="cover"
			/>
			<View style={styles.cardTitleWrapper}>
				<Text style={styles.cardTitle}>{serie.title}</Text>
			</View>
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		height: Dimensions.get('window').width / 2
	},
	card: {
		flex: 1,
		borderWidth: 1
	},
	cardTitleWrapper: {
		backgroundColor: 'black',
		height: 50,

		position: 'absolute',
		bottom: 0,
		opacity: .8,

		width: '100%',

		paddingTop: 10,
		paddingBottom: 10,

		paddingLeft: 3,
		paddingRight: 3,

		alignItems: 'center'
	},
	cardTitle: {
		color: 'white',
		fontSize: 15,
		fontWeight: 'bold'
	}
});

export default SerieCard;