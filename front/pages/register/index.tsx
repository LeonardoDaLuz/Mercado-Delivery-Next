import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useEffect, useState } from 'react';
import { ButtonFlat, Center, CenterContainer, LoaderWheel } from '@globalStyleds';
import { RegisterContainer, Flex, InputBlock, RegisterButton, EnderecoFieldSet, ErrorLabel, SubmissionAlert } from '@components/Register/style';
import { useFormik, FormikProps } from "formik";
import { useDispatch } from 'react-redux';
import { registerThunk } from '@slices/userSlice';
import { useRouter } from 'next/router';
import { autoFillWithViaCEP, formatCEP, formatCPF, IsValidCEP, isValidCPF, isValidEmail, isValidName, maskTelephone } from '@utils/formUtils';


interface LoginValues {
    email: string,
    password: string,
    password2: string,
    name: string,
    cpf: string,
    genero: 'masculino' | 'feminino' | 'não informado',
    birthday: string,
    telefone: string,
    cep: string,
    street: string,
    city: string,
    number: string,
    district: string,
    complement: string,

}



type AllPropsAsString<T> = {
    [P in keyof T as string]: string
}
function Login() {

    const dispatch = useDispatch();
    const router = useRouter();
    const [registerStatus, setRegisterStatus] = useState("");

    const validate = (values: LoginValues) => {

        const errors: AllPropsAsString<LoginValues> = {};

        if (!values.name)
            errors.name = 'Requerido';
        else if (!isValidName(values.name))
            errors.name = 'Deve conter nome completo';
        else if (values.name.length < 7)
            errors.name = 'Deve conter pelo menos 7 caracteres';


        if (!values.cpf)
            errors.cpf = 'Requerido';
        else if (values.cpf.length != 14) {
            errors.cpf = 'Deve conter 11 numeros';
        }
        else if (!isValidCPF(values.cpf)) {

            errors.cpf = 'CPF inválido';
        }

        if (!values.email)
            errors.email = 'Requerido';
        else if (!isValidEmail(values.email))
            errors.email = 'Email inválido';

        if (!values.cep)
            errors.cep = 'Requerido';
        else if (!IsValidCEP(values.cep))
            errors.cep = 'Cep invalido';

        if (!values.street)
            errors.street = 'Requerido';

        if (!values.district)
            errors.district = 'Requerido';

        if (!values.city)
            errors.city = 'Requerido';

        if (!values.number)
            errors.number = 'Requerido';

        if (!values.birthday)
            errors.birthday = 'Requerido';

        if (!values.telefone)
            errors.telefone = 'Requerido';

        if (values.password.length < 6)
            errors.password = 'A senha deve conter pelo menos 6 dígitos';

        if (!values.password2)
            errors.password2 = 'Requerido';


        else if (values.password2 !== values.password)
            errors.password2 = 'Senha não corresponde';



        return errors;
    }

    const formik = useFormik<LoginValues>(
        {
            initialValues: {
                email: '',
                password: '',
                password2: '',
                name: '',
                cpf: '',
                genero: 'não informado',
                birthday: '',
                telefone: '(__)_____-____',
                cep: '',
                street: '',
                number: '',
                district: '',
                complement: '',
                city: ''
            },
            validate,
            onSubmit: (values): void => {
                setRegisterStatus("REGISTERING");
                dispatch(registerThunk(
                    values,
                    () => router.push("/register/success"),
                    () => setRegisterStatus("REGISTER_FAILURE"),
                    () => setRegisterStatus("EMAIL_ALREADY_REGISTERED")
                ))
            },
            validateOnMount: true
        });



    
    return (
        <RegisterContainer disable={registerStatus==="REGISTERING"}>
            <form onSubmit={formik.handleSubmit}>
                <h1>Cadastro</h1>
                <EnderecoFieldSet>
                    <legend>Dados pessoais:</legend>
                    <Flex>
                        <InputBlock>
                            <label htmlFor='name'>Nome completo:</label>
                            {formik.errors['name'] && <ErrorLabel> {'  *' + formik.errors['name']}</ErrorLabel>}
                            <input id='name' name='name' type='text' onChange={formik.handleChange} value={formik.values.name} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='email'>Email:</label>
                            {formik.errors['email'] && <ErrorLabel> {'  *' + formik.errors['email']}</ErrorLabel>}
                            <input id='email' name='email' type='email' onChange={formik.handleChange} value={formik.values.email} />
                        </InputBlock>

                        <InputBlock>
                            <label htmlFor='cpf'>CPF:</label>
                            {formik.errors['cpf'] && <ErrorLabel> {'  *' + formik.errors['cpf']}</ErrorLabel>}

                            <input id='cpf' name='cpf' type='text' onChange={(e) => { e.target.value = formatCPF(e.target.value); formik.handleChange(e) }} value={formik.values.cpf} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='genero'>Gênero:</label>

                            <select name='genero' id='genero' value={formik.values.genero} onChange={formik.handleChange}>
                                <option value='masculino'>Masculino</option>
                                <option value='feminino'>Feminino</option>
                                <option value='nao informado'>Não informar</option>
                            </select>
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='birthday'>Data de nascimento:</label>
                            {formik.errors['birthday'] && <ErrorLabel> {'  *' + formik.errors['birthday']}</ErrorLabel>}
                            <input id='birthday' name='birthday' type='date' onChange={formik.handleChange} value={formik.values.birthday} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='telefone'>Telefone:</label>
                            {formik.errors['telefone'] && <ErrorLabel> {'  *' + formik.errors['telefone']}</ErrorLabel>}
                            <input id='telefone' name='telefone' type='tel' onChange={(e) => {
                                maskTelephone(e);
                                formik.handleChange(e);
                            }

                            } value={formik.values.telefone} />
                        </InputBlock>

                    </Flex>
                </EnderecoFieldSet>
                <EnderecoFieldSet>
                    <legend>Endereço:</legend>
                    <Flex>
                        <InputBlock>
                            <label htmlFor='cep'>CEP:</label>
                            {formik.errors['cep'] && <ErrorLabel> {'  *' + formik.errors['cep']}</ErrorLabel>}
                            <input id='cep' name='cep' type='text' onChange={(e) => {
                                e.target.value = formatCEP(e.target.value);
                                autoFillWithViaCEP(e, formik);
                                formik.handleChange(e)
                            }


                            } value={formik.values.cep} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='street'>Rua:</label>
                            {formik.errors['street'] && <ErrorLabel> {'  *' + formik.errors['street']}</ErrorLabel>}
                            <input id='street' name='street' type='text' onChange={formik.handleChange} value={formik.values.street} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='district'>Bairro:</label>
                            {formik.errors['district'] && <ErrorLabel> {'  *' + formik.errors['district']}</ErrorLabel>}
                            <input id='district' name='district' type='text' onChange={formik.handleChange} value={formik.values.district} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='city'>Cidade:</label>
                            {formik.errors['city'] && <ErrorLabel> {'  *' + formik.errors['city']}</ErrorLabel>}
                            <input id='city' name='city' type='text' onChange={formik.handleChange} value={formik.values.city} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='number'>Numero:</label>
                            {formik.errors['number'] && <ErrorLabel> {'  *' + formik.errors['number']}</ErrorLabel>}
                            <input id='number' name='number' type='text' onChange={(e) => {
                                e.target.value = (parseInt(e.target.value) || '').toString();
                                formik.handleChange(e)
                            }}
                                value={formik.values.number} />
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='complement'>Complemento:</label>
                            {formik.errors['complement'] && <ErrorLabel> {'  *' + formik.errors['complement']}</ErrorLabel>}
                            <input id='complement' name='complement' type='text' onChange={formik.handleChange} value={formik.values.complement} />
                        </InputBlock>
                    </Flex>
                </EnderecoFieldSet>
                <EnderecoFieldSet>
                    <legend>Segurança:</legend>
                    <Flex>
                        <InputBlock>
                            <label htmlFor='password'>Senha:</label>

                            <input id='password' name='password' type='password' onChange={formik.handleChange} value={formik.values.password} />
                            {formik.errors['password'] && <ErrorLabel> {'  *' + formik.errors['password']}</ErrorLabel>}
                        </InputBlock>
                        <InputBlock>
                            <label htmlFor='password2'>Confirme a senha:</label>

                            <input id='password2' name='password2' type='password' onChange={formik.handleChange} value={formik.values.password2} />
                            {formik.errors['password2'] && <ErrorLabel> {'  *' + formik.errors['password2']}</ErrorLabel>}
                        </InputBlock>
                    </Flex>
                </EnderecoFieldSet>
                {registerStatus === "EMAIL_ALREADY_REGISTERED" && <SubmissionAlert>Email já está registrado</SubmissionAlert>}
                {registerStatus === "REGISTER_FAILURE" && <SubmissionAlert>Erro ao registrar</SubmissionAlert>}
                <RegisterButton disabled={!formik.isValid} type='submit'>
                    {registerStatus === "REGISTERING" && <LoaderWheel />}
                    Cadastrar</RegisterButton>

            </form>
        </RegisterContainer>
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
