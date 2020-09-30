import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ searchTerm, onTermChange, onTermSubmit }) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search"
				style={styles.textSearch}
				value={searchTerm}
				onChangeText={(newTerm) => onTermChange(newTerm)}
				onEndEditing={() => onTermSubmit()}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginTop: 15,
		backgroundColor: '#F0EEEE',
		height: 50,
		marginHorizontal: 15,
		borderRadius: 4,
		flexDirection: 'row',
		marginBottom: 10,
	},
	textSearch: {
		flex: 1,
		fontSize: 20,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: 'center',
		marginHorizontal: 15,
	},
});

export default SearchBar;
