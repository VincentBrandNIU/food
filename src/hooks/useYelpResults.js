import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
	const [results, setResults] = useState([]);
	//StateVaribale for updating users on error
	const [errorMessage, setErrorMessage] = useState('');

	//Helper function for request
	const searchApi = async (term) => {
		try {
			const response = await yelp.get('/search', {
				params: {
					limit: 50,
					term: term,
					location: 'elgin',
				},
			});
			setResults(response.data.businesses);
		} catch (err) {
			setErrorMessage('Something went wrong');
		}
	};
	//UseEffect call
	useEffect(() => {
		searchApi('pizza');
	}, []);

	return [results, errorMessage, searchApi];
};
