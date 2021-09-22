
import { AdminOptions_ } from "./styles";
import { EditButton, DeleteButton } from "./styles";
import assets from "../../../assets";
import { deleteProduct } from "../../../store/actions/product";
import { useRouter } from "next/router";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import Link from "next/link";

export const AdminOptions__ = ({ product, deleteProduct }) => {
    const history = useRouter();
    return (
        <AdminOptions_>
            <Link href={'/editProduct/' + product._id} >
                <EditButton icon={assets.edit}><img src={assets.edit} /> Editar</EditButton>
            </Link>
            <DeleteButton href={'#'} icon={assets.edit} onClick={() => deleteProduct(product, () => history.push('/produtos/'))}><img src={assets.delete_} /> Deletar</DeleteButton>
        </AdminOptions_>
    );
}


const mapStateToProps = store => ({

})

const mapDispatchToProps = dispatch =>
    bindActionCreators({ deleteProduct }, dispatch);


export const AdminOptions = connect(mapStateToProps, mapDispatchToProps)(AdminOptions__);
