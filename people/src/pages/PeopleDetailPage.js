import React from 'react';
import {
	View,
	Text,
	Image,
	StyleSheet
} from 'react-native';

import Line from '../components/Line';

export default class PeopleDetailPage extends React.Component {
	render() {
		// const { people } = this.props.navigation.state.params;
		const people = {
            "gender": "female",
            "name": {
                "title": "mrs",
                "first": "maritza",
                "last": "ferreira"
            },
            "location": {
                "street": "1249 rua pernambuco ",
                "city": "ribeirão pires",
                "state": "santa catarina",
                "postcode": 19347
            },
            "email": "maritza.ferreira@example.com",
            "login": {
                "username": "heavypanda257",
                "password": "marvin",
                "salt": "SGIo5D3Y",
                "md5": "d34d6301ce656090c8acb8500441eaeb",
                "sha1": "0901033bcc2358d223c35bb24e77cbf57d7d0558",
                "sha256": "5225c05791dbb0b6a287682cd89469f1fc3b6675b9fad6b98c908227b674d9e0"
            },
            "dob": "1983-10-16 12:35:56",
            "registered": "2013-10-10 02:59:02",
            "phone": "(02) 5714-9378",
            "cell": "(81) 6735-7997",
            "id": {
                "name": "",
                "value": null
            },
            "picture": {
                "large": "https://randomuser.me/api/portraits/women/56.jpg",
                "medium": "https://randomuser.me/api/portraits/med/women/56.jpg",
                "thumbnail": "https://randomuser.me/api/portraits/thumb/women/56.jpg"
            },
            "nat": "BR"
        }

		return (
			<View style={styles.container}>
				<Image
					source={{ uri: people.picture.large }}
					style={styles.avatar}/>
				<View style={styles.detailContainer}>
					<Line label="Email:" content={people.email} />
					<Line label="Cidade:" content={people.location.city} />
					<Line label="Estado:" content={people.location.state} />
					<Line label="Tel:" content={people.phone} />
					<Line label="Cel:" content={people.cell} />
					<Line label="Nacionalidade:" content={people.nat} />
				</View>
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
	},
	detailContainer: {
		backgroundColor: '#e2f9ff',
		marginTop: 20,
		elevation: 1
	},
});