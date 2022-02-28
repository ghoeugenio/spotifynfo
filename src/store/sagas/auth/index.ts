import {all, call, fork, put, spawn, takeLatest} from 'redux-saga/effects';
import {Types as AuthTypes, Creators as AuthActions} from '../../ducks/auth';
import {doRequest} from '../../../services/api';
import {setData} from '../../../utils/helpers';

function* login({payload}: any) {
	const {success, data, error} = yield call(
		doRequest,
		'post',
		'auth/login',
		payload
	);

	if (success) {
		const token = data?.access_token;
		const newData = data;
		delete newData.access_token;

		yield call(setData, token, data?.refresh_token?.refresh_token, data);
		yield put(AuthActions.loginSuccess({user: newData, token}));
	} else {
		yield put(AuthActions.loginFail(error));
	}
}

function* loginWatcher() {
	yield takeLatest(AuthTypes.LOGIN_REQUEST, login);
}

export default function* rootSaga() {
	yield all([fork(loginWatcher)]);
}
