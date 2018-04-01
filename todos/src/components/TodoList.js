import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const TodoList = ({ todos = [] }) => (
	<View>
		{todos.map(todo => <Text key={todo.id}>{todo.text}</Text>)}
	</View>
);

const styles = StyleSheet.create({

})

export default TodoList;