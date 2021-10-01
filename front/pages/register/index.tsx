import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement, useEffect, useState } from 'react';
import { ButtonFlat, Center, CenterContainer, LoaderWheel } from '@globalStyleds';
import { RegisterContainer, Flex, InputBlock, RegisterButton, EnderecoFieldSet, ErrorLabel } from '../../components/Register/style';
import { useFormik, FormikProps } from "formik";


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

interface ViaCEPResponseType {

    cep: string,
    logradouro: string,
    complemento: string,
    bairro: string,
    localidade: string,
    uf: string,
    ibge: number,
    gia: number,
    ddd: number,
    siafi: number

}


type AllPropsAsString<T> = {
    [P in keyof T as string]: string
}
function Login() {


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
            onSubmit: (): void => { },
            validateOnMount: true
        });



    async function autoFillWithViaCEP(e: React.ChangeEvent<HTMLInputElement>) {

        if (IsValidCEP(e.target.value)) {
            const url = 'https://viacep.com.br/ws/' + e.target.value + '/json/unicode/';
            const response = await fetch(url);
            if (response.status === 200) {
                const responseText = await response.text();

                try {
                    const data = JSON.parse(responseText) as ViaCEPResponseType;

                    if (data.logradouro) {

                        console.log("deu certo", data);

                        formik.setFieldValue('street', data.logradouro);
                        formik.setFieldValue('district', data.bairro);
                        formik.setFieldValue('city', data.localidade);

                    } else {
                        console.error('Resposta inesperada para ' + url, responseText);
                    }

                } catch (err) {
                    console.error('JSON: Não foi possível parsear a resposta da rota ' + url)
                }
            } else {
                console.error('Bad request para ' + url)
            }
        }
    }

    return (
        <RegisterContainer>
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
                                autoFillWithViaCEP(e);
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

                <RegisterButton disabled={!formik.isValid} type='submit'>Cadastrar</RegisterButton>
                            
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


function isValidCPF(strCPF: string) {

    if (!strCPF)
        return false;

    strCPF = strCPF.replace(/[^\d]/g, ""); //remove caracteres repetidos

    let Soma;
    let Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (let i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function isValidEmail(email: string) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
}


function IsValidCEP(strCEP: string) {

    const objER = /^\d{5}-\d{3}$/;

    if (strCEP.length > 0) {
        if (objER.test(strCEP.replace(/(\d{5})(\d{3})/, "$1-$2")))
            return true;
        else
            return false;
    }
    else
        return false;
}

function isValidName(name: string) {
    const pattern = /[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,99}\s[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{2,99}/gi;
    return pattern.test(name);

}


export function formatCPF(cpf: string) {
    cpf = cpf.replace(/[^\d]/g, ""); //remove caracteres especiais e letras

    cpf = cpf.substr(0, 11);

    if (cpf.length < 7 && cpf.length > 3) {
        return cpf.replace(/(\d{3})/, "$1.");
    }
    if (cpf.length < 10 && cpf.length > 6) {
        return cpf.replace(/(\d{3})(\d{3})/, "$1.$2.");
    }
    if (cpf.length > 9) {

        return cpf.replace(/(\d{3})(\d{3})(\d{3})/, "$1.$2.$3-");
    }

    return cpf;
}

export function maskTelephone(e: { target: HTMLInputElement }) {

    let onlyNumbers = e.target.value.replace(/[^\d]/g, "");//remove caracteres especiais e letras

    let cursorStart = e.target.selectionStart;

    if (cursorStart === 1) {
        if (onlyNumbers.length === 1)
            cursorStart++;
    }

    if (cursorStart === 4) {
        if (onlyNumbers.length >= 3)
            cursorStart++;
        else
            cursorStart--;
    }

    if (cursorStart === 10) {
        if (onlyNumbers.length >= 8)
            cursorStart++;
        else
            cursorStart--;
    }

    let maxCursorStart =
        onlyNumbers.length > 7 ? onlyNumbers.length + 3 :
            onlyNumbers.length > 2 ? onlyNumbers.length + 2 :
                onlyNumbers.length + 1;

    if (cursorStart! > maxCursorStart)
        cursorStart = maxCursorStart;


    let placeHolderArray = Array.from("(__)_____-____");

    let dddArray = Array.from(onlyNumbers.substr(0, 2));

    let secondGroup = Array.from(onlyNumbers.substr(2, 5));

    let thirdGroup = Array.from(onlyNumbers.substr(7, 4));

    placeHolderArray.splice(1, dddArray.length, ...dddArray);

    placeHolderArray.splice(4, secondGroup.length, ...secondGroup);

    placeHolderArray.splice(10, thirdGroup.length, ...thirdGroup);

    e.target.value = placeHolderArray.join('');

    e.target.selectionStart = cursorStart;
    e.target.selectionEnd = cursorStart;

    return e.target.value;
}


export function formatCEP(cpf: string) {



    if (cpf === "undefined" || typeof cpf === 'undefined')
        return "";
    //retira os caracteres indesejados...
    cpf = cpf.replace(/[^\d]/g, "").substring(0, 8);

    //realizar a formatação...
    return cpf.replace(/(\d{5})(\d+)/, "$1-$2");
}

