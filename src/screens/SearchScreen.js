import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useYelpResults from '../hooks/useYelpResults';
import ResultsList from '../components/ResultsList';
const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	//Calling our useYelpApi.js
	const [results, errorMessage, searchApi] = useYelpResults();
	//Helper function to filter results by price

	const filterResultsByPrice = (price) => {
		//price === '$' || '$$' || '$$$'
		return results.filter((result) => {
			return result.price === price;
		});
	};
	return (
		<>
			<SearchBar
				searchTerm={searchTerm}
				onTermChange={(newTerm) => setSearchTerm(newTerm)}
				onTermSubmit={() => searchApi(searchTerm)}
			/>
			{errorMessage ? <Text>{errorMessage}</Text> : null}
			<ScrollView>
				<ResultsList results={filterResultsByPrice('$')} title={'Cost Effective'} />
				<ResultsList results={filterResultsByPrice('$$')} title={'Middle Class'} />
				<ResultsList results={filterResultsByPrice('$$$')} title={'Richie Rick'} />
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
