import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import axios from 'axios';

import PeopleList from '../components/PeopleList';

export default class PeoplePage extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			peoples: [],
			loading: false,
		};
	}

	componentDidMount() {
		this.setState({ loading: true });
		setTimeout(() => {
			axios
				.get('https://randomuserERRO_POR_FAVOR.me/api/?nat=br&results=15')
				.then(response => {
					const { results } = response.data;
					this.setState({
						peoples: results,
						loading: false,
					});
				})
		}, 3500)
	}

	// renderLoading() {
	// 	if (this.state.loading)
	// 		return <ActivityIndicator size="large" color="#6ca2f7" />;
	// 	return null;
	// }

	render() {
		return (
			<View style={styles.container}>
				{/* this.renderLoading() */}
				{
					this.state.loading
						? <ActivityIndicator size="large" color="#6ca2f7" />
						: <PeopleList
							peoples={this.state.peoples}
							onPressItem={pageParams => {
								this.props.navigation.navigate('PeopleDetail', pageParams);
							}} />
				}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	}
});