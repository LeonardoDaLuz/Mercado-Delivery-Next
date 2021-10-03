import { RegisterSuccessContainer } from '@components/Register/style';
import DefaultHeaderAndFooter from '@layouts/DefaultHeaderAndFooter';
import { ReactElement } from 'react';



function RegisterSuccess() {

    
    return (
        <RegisterSuccessContainer>
            Seu cadastro foi realizado com sucesso, confirme seu email.
        </RegisterSuccessContainer>
        
    )
}


RegisterSuccess.getLayout = (page: ReactElement) => {
    return (
        <DefaultHeaderAndFooter>
            {page}
        </DefaultHeaderAndFooter>
    )
}

export default RegisterSuccess;

