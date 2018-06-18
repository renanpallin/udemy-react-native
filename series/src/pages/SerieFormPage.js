import React from 'react';
import {
	StyleSheet,
	View,
	Text,
	TextInput,
} from 'react-native';
import { connect } from 'react-redux';

import FormRow from '../components/FormRow';
import { setField } from '../actions';

const SerieFormPage = ({ serieForm, setField }) => (
	<View>
		<FormRow first>
			<TextInput
				style={styles.input}
				placeholder="Título"
				value={serieForm.title}
				onChangeText={value => setField('title', value)}
			 />
		</FormRow>
	</View>
);

const styles = StyleSheet.create({
	input: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 5,
	}
});

function mapStateToProps(state) {
	return {
		serieForm: state.serieForm
	}
}

const mapDispatchToProps = {
	setField
}

export default connect(mapStateToProps, mapDispatchToProps)(SerieFormPage);