import axios from 'axios';
//preconfigured API url
export default axios.create({
	baseURL: 'https://api.yelp.com/v3/businesses',
	headers: {
		Authorization:
			'Bearer MGviITOQeFUss5qQlwisg4kQg_hj-IgRKGeuAFhPx8CJUisgOSowpIhcJe4cW0-zx_HcIHPwvPFh9onlR0EuXP-YlMTsVwC6S06E1rGa6wHXFn7VjihZaSlUbKNzX3Yx',
	},
});
