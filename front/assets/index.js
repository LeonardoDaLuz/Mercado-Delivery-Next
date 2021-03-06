import heart from './svg/heart.svg'
import chart from './svg/chart.svg'
import mercado_delivery_default_logo from './svg/mercado_delivery_default_logo.svg';
import mercado_delivery_isolated_logo from './svg/mercado_delivery_isolated_logo.svg';
import logoAlpha from './png/LogoAlpha48px.png'
import logomonoWhite from './png/logomono-white.png';
import LogoExtended48px from './png/LogoExtended48px.png'
import sandwich_menu from './svg/sandwich_menu.svg'
import imagePlaceholder from './png/placeholder-image.png'
import edit from './svg/edit.svg';
import delete_ from './svg/trash.svg';
import offerTag from './svg/offerTag.svg';
import offerTag2 from './svg/offerTag2.svg';
import offerTag3 from './svg/offerTag3.svg';
import exitFolder from './svg/exitFolder.svg';
import editIcon from './svg/editIcon.svg';
import saveIcon from './svg/saveIcon.svg';
import searchIcon from './svg/searchIcon.svg';
import update_icon from './svg/update_icon.svg';
import mercado_delivery_monochrome_white_logo from './svg/mercado_delivery_monochrome_white_logo.svg';
import qrcode_placeholder from './png/QRCODE.jpg';

const assets = {
    heart,
    carrinho: chart,
    mercado_delivery_default_logo,
    mercado_delivery_isolated_logo,
    mercado_delivery_monochrome_white_logo,
    logoAlpha,
    logomonoWhite,
    LogoExtended48px,
    sandwich_menu,
    imagePlaceholder,
    edit,
    delete_,
    offerTag,
    offerTag2,
    offerTag3,
    exitFolder,
    editIcon,
    saveIcon,
    searchIcon,
    update_icon
}

Object.keys(assets).forEach(key => { //workaround porque o next por algum motivo importa com .src, diferente do react q importa o string do link direto.
    assets[key] = assets[key].src
})

export default assets;
