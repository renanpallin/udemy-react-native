import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import SerieCard from '../components/SerieCard';
import AddSerieCard from '../components/AddSerieCard';
import { connect } from 'react-redux';
import { watchSeries } from '../actions';

const isEven = number => number % 2 === 0;

class SeriesPage extends React.Component {
	componentDidMount() {
		this.props.watchSeries();
	}

	render() {
		const { series, navigation } = this.props;
		if (series === null) {
			return <ActivityIndicator />;
		}

		return (
			<View>
				<FlatList
					data={[...series, { isLast: true }]}
					renderItem={({ item, index }) => (
						item.isLast
							? <AddSerieCard
								isFirstColumn={isEven(index)}
								onPress={() => navigation.navigate('SerieForm')} />
							: <SerieCard
								serie={item}
								isFirstColumn={isEven(index)}
								onPress={() => navigation.navigate('SerieDetail', { serie: item })}
							/>
					)}
					keyExtractor={item => item.id}
					numColumns={2}
					ListHeaderComponent={props => (<View style={styles.marginTop} />)}
					ListFooterComponent={props => (<View style={styles.marginBottom} />)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	marginTop: {
		marginTop: 5,
	},
	marginBottom: {
		marginBottom: 5,
	}
})

const mapStateToProps = state => {
	const { series } = state;
	if (series === null) {
		return { series }
	}

	const keys = Object.keys(series);
	const seriesWithKeys = keys.map(id => {
		return { ...series[id], id }
	});
	return { series: seriesWithKeys };
}

export default connect(
	mapStateToProps,
	{ watchSeries }
)(SeriesPage);