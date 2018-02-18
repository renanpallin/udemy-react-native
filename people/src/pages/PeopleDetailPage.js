import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

export default class PeopleDetailPage extends React.Component {
	render() {
		const { people } = this.props.navigation.state.params;

		return (
			<View style={styles.container}>
				<Image
					source={{ uri: people.picture.large }}
					style={styles.avatar}/>
				<Text>Eu sou a PeopleDetailPage!!!</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	},
	avatar: {
		aspectRatio: 1
	}
});