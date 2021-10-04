import { useFormik } from "formik";


export function isValidCPF(strCPF: string) {

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

export function isValidEmail(email: string) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
}


export function IsValidCEP(strCEP: string) {

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

export function isValidName(name: string) {
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

type Formik = {
    initialValues: any;
    initialErrors: any;
    initialTouched: any;
    initialStatus: any;
    handleBlur: {
        (e: React.FocusEvent<any>): void;
        <T = any>(fieldOrEvent: T): T extends string ? (e: any) => void : void;
    };
    handleChange: {
        (e: React.ChangeEvent<any>): void;
        <T_1 = string | React.ChangeEvent<any>>(field: T_1): T_1 extends React.ChangeEvent<any> ? void : (e: string | React.ChangeEvent<any>) => void;
    };
    handleReset: (e: any) => void;
    handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
    resetForm: Function;
    setErrors: Function;
    setFormikState: Function;
    setFieldTouched: Function;
    setFieldValue: Function;
    setFieldError: (field: string, value: string | undefined) => void;
    setStatus: (status: any) => void;
    setSubmitting: (isSubmitting: boolean) => void;
    setTouched: Function;
    setValues: Function;
    submitForm: () => Promise<any>;
    validateForm: Function;
    validateField: (name: string) => Promise<void> | Promise<string | undefined>;
    isValid: boolean;
    dirty: boolean;
    unregisterField: (name: string) => void;
    registerField: (name: string, { validate }: any) => void;
    getFieldProps: Function;
    getFieldMeta: Function;
    getFieldHelpers: Function;
    validateOnBlur: boolean;
    validateOnChange: boolean;
    validateOnMount: boolean;
    values: any;
    errors: any;
    touched: any;
    isSubmitting: boolean;
    isValidating: boolean;
    status?: any;
    submitCount: number;
}
export async function autoFillWithViaCEP(e: React.ChangeEvent<HTMLInputElement>, formik: Formik) {

    
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
