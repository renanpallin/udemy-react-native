import { StackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter } from './src/util';

export default StackNavigator({
	'PeopleDetail': {
		screen: PeopleDetailPage,
		navigationOptions: ({ navigation }) => {
			// const peopleName = capitalizeFirstLetter(
			// 	navigation.state.params.people.name.first
			// );
			const peopleName = "@todo MUDAR ISSO";

			return ({
				title: peopleName,
				headerTitleStyle: {
					color: 'white',
					fontSize: 30,
				}
			});
		}
	},
	'Main': {
		screen: PeoplePage
	},
}, {
	navigationOptions: {
		title: 'Pessoas!',
		headerTintColor: 'white',
		headerStyle: {
			backgroundColor: '#6ca2f7',
			borderBottomWidth: 1,
			borderBottomColor: '#C5C5C5'
		},
		headerTitleStyle: {
			color: 'white',
			fontSize: 30,
			alignSelf: 'center',
		}
	}
});
