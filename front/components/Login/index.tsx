import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useEffect, useRef, useState } from 'react';
import { ButtonFlat, CenterContainer, FadeBackground, LoaderWheel } from '@globalStyleds';
import { LoginWindow } from '../../components/Login/style';
import { useFormik, FormikProps } from "formik";
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '@slices/userSlice';
import { AppState } from '@store';
import { getUrlPathWithoutQuery } from '@utils/routerUtility';
import { combinePathWithQuery2 } from '@utils/combinePathWithQuery';


interface LoginValues {
    login: string,
    password: string
}

function Login() {

    const dispatch = useDispatch();
    const user = useSelector((rootState: AppState) => rootState.user);
    const router = useRouter();

    function loginExit() {
        delete router.query['login'];
        router.push(combinePathWithQuery2(getUrlPathWithoutQuery(router), router.query));
    }

    const formik = useFormik<LoginValues>(
        {
            initialValues: {
                login: '',
                password: '',
            },
            onSubmit: (values): void => {
                dispatch(loginThunk(
                    values.login,
                    values.password,
                    loginExit,
                    () => {
                        if (incorrectPasswordElement !== null) {
                            incorrectPasswordElement.current?.setAttribute('style', 'display: block;');
                        }
                    }


                ))
            },
        });

    const incorrectPasswordElement = useRef<HTMLElement>(null)

    if (!router.query['login'] || user.status === 'LOGGED') {
        return <></>
    }



    return (
        <LoginWindow>
            <FadeBackground onClick={loginExit}/>
            <form onSubmit={formik.handleSubmit}>
                <h1>Login</h1>
                <label htmlFor='login'>Email:</label>
                <input id='login' name='login' type='email' onChange={formik.handleChange} value={formik.values.login} disabled={(user.status === 'LOGGING')} />
                <label htmlFor='password'>Senha:</label>
                <input id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password} disabled={(user.status === 'LOGGING')} />
                <button type='submit'>
                    {user.status === 'LOGGING' && <LoaderWheel />}
                    Login</button>

                <span ref={incorrectPasswordElement} style={{display: 'none'}}>Login ou senha incorretos</span>
                <span>Ainda não tenho conta</span>
                <span>Esqueci minha senha</span>
            </form> 
        </LoginWindow>
    )
}




export default Login;