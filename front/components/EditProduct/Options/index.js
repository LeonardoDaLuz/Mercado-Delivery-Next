import { Options_ } from "./styles";
import { ButtonFlat } from "../../../globalStyleds";
import { colorTheme } from "../../../theme";
import { deleteProduct } from "/store/slices/productSlice";
import { useRouter } from "next/router";

export const Options__ = ({ product, draftStatus, saveChanges, discardChanges, deleteProduct }) => {

    const router = useRouter();
   
    return (
        <Options_>
            <ButtonFlat bgColor={colorTheme.neutral()} onClick={discardChanges}>Voltar</ButtonFlat>
            <ButtonFlat bgColor={colorTheme.warning()}  onClick={()=>deleteProduct(product, ()=>router.push('/produtos/'))}>Deletar</ButtonFlat>
            <ButtonFlat disabled={draftStatus !== 'modified'} onClick={saveChanges} >Salvar</ButtonFlat>
        </Options_>
    )
}

export const Options =Options__;