import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { resetChart } from '@slices/chartSlice';
import { Product } from '@slices/productsSlice';
import { AppThunk } from '@store';
import waitForSeconds from '@utils/waitForSeconds';
import { HYDRATE } from 'next-redux-wrapper';

interface UserState {
    account_id: string,
    status: 'LOGGED' | 'NOT_LOGGED' | 'LOGIN_FAIL' | 'LOGGING' | 'REGISTERING' | 'REGISTER_FAIL' | 'REGISTER_SUCCESS',
    token: string,
    email: string,

}

interface UserPayload {
    email?: string,
    account_id?: string,
    url?: string,
    token?: string,
    status?: number,
    error?: any,
    response?: string,
    password?: string,
    message?: string
}

const initialState: UserState = {
    status: 'NOT_LOGGED',
    account_id: '',
    token: '',
    email: '',

};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginStart: (state, action: PayloadAction<UserPayload>) => {
            state.status = 'LOGGING'
        },
        loginSuccess: (state, action: PayloadAction<UserPayload>) => {
            state.token = action.payload.token!;
            state.status = 'LOGGED';
            state.account_id = action.payload.account_id!
            state.email = action.payload.email!;
        },
        incorrectLoginOrPassword: (state, action: PayloadAction<UserPayload>) => {
            state.token = '';
            state.status = 'LOGIN_FAIL'
            state.account_id = '';
        },
        loginFailure: (state, action: PayloadAction<UserPayload>) => {
            state.token = '';
            state.status = 'LOGIN_FAIL';
            state.account_id = '';

        },
        logout: (state) => {
            state.token = '';
            state.status = 'NOT_LOGGED';
            state.account_id = '';
        },
        registerStart: (state, action: PayloadAction<UserPayload>) => {
            state.status = 'REGISTERING';
        },
        registerSuccess: (state, action: PayloadAction<UserPayload>) => {
            state.status = 'REGISTER_SUCCESS';
        },
        registerFailure: (state, action: PayloadAction<UserPayload>) => {
            state.status = 'REGISTER_FAIL'

        }
    },
    /* extraReducers: {
         [HYDRATE]: (state, action) => {
             return {
                 ...state,
                 ...action.payload.carrinho,
             };
         },
     },*/
})

export const { loginStart, loginSuccess, loginFailure, incorrectLoginOrPassword, registerStart, registerSuccess, registerFailure } = userSlice.actions

export default userSlice.reducer;


/* THUNKS: */


export const loginThunk = (login: string, password: string, successCallback?: Function, incorrectLoginCallback?: Function): AppThunk => {

    return async dispatch => {

        const url = `http://localhost:3001/login/`;

        dispatch(loginStart({ url }));

        //await waitForSeconds(3);
        let response = await fetch(url,
            {
                method: 'POST',
                body: JSON.stringify({ login, password }),
                headers: {
                    'Content-Type': 'application/json',
                }
            });

        try {
            const text = await response.text()
            const data = JSON.parse(text);

            if ('auth' in data) {
                dispatch(loginSuccess({
                    token: data.token, account_id: data.id, email: login
                }));

                if (successCallback)
                    successCallback();

            } else {
                dispatch(incorrectLoginOrPassword({ url, email: login, password, response: text }));

                if (incorrectLoginCallback)
                    incorrectLoginCallback();
            }
        } catch (err: any) {
            dispatch(loginFailure({ status: response.status, url, error: err.stack }));
        }
    }
}


export const logoutThunk = (): AppThunk => {

    return async dispatch => {

        dispatch(userSlice.actions.logout());
        dispatch(resetChart());

    }
}

export const registerThunk = (data: any, callBackOnSucess?: Function, callbackOnFailure?: Function, callBackOnAlreadyRegistered?: Function): AppThunk => {
    return async dispatch => {


        const url = "http://localhost:3001/register/";

        dispatch(registerStart({ url }));
        const response = await fetch(url, { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });

        const text = await response.text();
        try {
            const responseBody = JSON.parse(text);
            if (responseBody["register"] === true) {
                dispatch(registerSuccess({ url, response: text }))
                if (callBackOnSucess)
                    callBackOnSucess();

            } else {
                dispatch(registerFailure({ url, response: text, error: "email já registrado" }))
                if (callBackOnAlreadyRegistered)
                    callBackOnAlreadyRegistered();
            }

        } catch (err: any) {
            dispatch(registerFailure({ url, response: text, error: err.stack }))
            if (callbackOnFailure)
                callbackOnFailure();

        }

    }
}



