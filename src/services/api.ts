import axios from 'axios';

const API_URL = 'https://accounts.spotify.com/authorize';

const api = axios.create({
	baseURL: API_URL,
});

export const doRequest = async (method: any, url: any, ...rest: any) => {
	try {
		const {status, data} = await api[method](url, ...rest);
		return {
			data,
			status,
			success: status >= 200 && status < 300,
			error: null,
		};
	} catch (error: any) {
		return {
			error: error?.response?.data?.message || error?.response?.data,
		};
	}
};

export default api;
