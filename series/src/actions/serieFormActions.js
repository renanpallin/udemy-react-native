export const SET_FIELD = 'SET_FIELD';
export const setField = (field, value) => {
	return {
		type: SET_FIELD,
		field,
		value,
	}
}

export const saveSerie = serie => {
	console.log('aqui vamos salvar noss sŕeire', serie);
}