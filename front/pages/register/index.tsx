import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useEffect, useState } from 'react';
import { ButtonFlat, CenterContainer, LoaderWheel } from '@globalStyleds';
import { LoginContainer } from '../../components/Login/style';
import { useFormik, FormikProps } from "formik";


interface LoginValues {
    login: string,
    password: string
}
function Login() {

    const formik = useFormik<LoginValues>(
        {
            initialValues: {
                login: '',
                password: '',
            },
            onSubmit: (): void => { },
        });

    return (
        <LoginContainer>
            <form onSubmit={formik.handleSubmit}>
                <h1>Login</h1>
                <label htmlFor='login'>Email:</label>
                <input id='login' name='login' type='email' onChange={formik.handleChange} value={formik.values.login} />
                <label htmlFor='password'>Senha:</label>
                <input id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password} />

            </form>
        </LoginContainer>
    )
}


Login.getLayout = (page: ReactElement) => {
    return (
        <DefaultHeaderAndFooter>
            {page}
        </DefaultHeaderAndFooter>
    )
}

export default Login;