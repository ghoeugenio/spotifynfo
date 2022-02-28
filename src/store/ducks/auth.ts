export const Types = {
	//Clean error
	CLEAN_ERROR: 'AUTH/CLEAN_ERROR',

	//Login
	LOGIN_REQUEST: 'AUTH/LOGIN-REQUEST',
	LOGIN_SUCCESS: 'AUTH/LOGIN-SUCCESS',
	LOGIN_FAIL: 'AUTH/LOGIN-FAIL',
	//Refresh token
	REFRESH_TOKEN_REQUEST: 'AUTH/REFRESH_TOKEN_REQUEST',
	REFRESH_TOKEN_SUCCESS: 'AUTH/REFRESH_TOKEN_SUCCESS',
	REFRESH_TOKEN_FAIL: 'AUTH/REFRESH_TOKEN_FAIL',

	//Log Out
	LOGOUT: 'AUTH/LOGOUT',
};

const INITIAL_STATE = {
	user: null,
	token: null,
	success: null,
	error: null,
	loading: false,
};

export default function auth(state = INITIAL_STATE, action: any) {
	switch (action.type) {
		case Types.CLEAN_ERROR:
			return {
				...state,
				error: null,
			};
		case Types.LOGIN_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
				success: null,
			};
		case Types.LOGIN_SUCCESS:
			return {
				...state,
				user: action.user,
				token: action.token,
				loading: false,
				error: false,
				success: true,
			};
		case Types.LOGIN_FAIL:
			return {
				...state,
				loading: false,
				success: false,
				error: true,
			};
		case Types.REFRESH_TOKEN_REQUEST:
			return {
				...state,
				loading: true,
				success: null,
				error: null,
			};
		case Types.REFRESH_TOKEN_SUCCESS:
			return {
				...state,
				...action.payload,
				loading: false,
				success: true,
				error: false,
			};
		case Types.REFRESH_TOKEN_FAIL:
			return {
				...state,
				loading: false,
				success: false,
				error: true,
			};
	}
}

export const Creators = {
	cleanError: () => ({
		type: Types.CLEAN_ERROR,
	}),
	login: (payload: any) => ({
		type: Types.LOGIN_REQUEST,
		payload,
	}),
	loginSuccess: (payload: any) => ({
		type: Types.LOGIN_SUCCESS,
		user: payload.user,
		token: payload.token,
	}),
	loginFail: (error: any) => ({
		type: Types.LOGIN_FAIL,
		error,
	}),
	//Refresh token
	refresh: (payload: any) => ({
		type: Types.REFRESH_TOKEN_REQUEST,
		payload,
	}),
	refreshSuccess: (payload: any) => ({
		type: Types.REFRESH_TOKEN_SUCCESS,
		payload,
	}),
	refreshFail: (error: any) => ({
		type: Types.REFRESH_TOKEN_FAIL,
		error,
	}),
};
