import AsyncStorage from '@react-native-async-storage/async-storage';

const ASYNC_STORAGE_APP_NAME = '@spotynfo';

export const STORAGE = {
	USER: `${ASYNC_STORAGE_APP_NAME}/user`,
	LAST_USER: `${ASYNC_STORAGE_APP_NAME}/last-user`,
	TOKEN: `${ASYNC_STORAGE_APP_NAME}/token`,
	USER_ID: `${ASYNC_STORAGE_APP_NAME}/user-id`,
	REFRESH_TOKEN: `${ASYNC_STORAGE_APP_NAME}/refresh-token`,
	SECURE_ID: `${ASYNC_STORAGE_APP_NAME}/secure-id`,

	LOCATION_PERMISSION_ASKED: `${ASYNC_STORAGE_APP_NAME}/location-permission-asked`,
};

export const setData = async (token: any, refresh_token: any, user: any) => {
	if (token && refresh_token && user) {
		await AsyncStorage.setItem(STORAGE.TOKEN, token);
		await AsyncStorage.setItem(STORAGE.REFRESH_TOKEN, refresh_token);
		await AsyncStorage.setItem(STORAGE.USER, JSON.stringify(user));
	}

	return null;
};

export const removeTokens = async () => {
	return AsyncStorage.multiRemove([STORAGE.TOKEN, STORAGE.REFRESH_TOKEN]);
};
