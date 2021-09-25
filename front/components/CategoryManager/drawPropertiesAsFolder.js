import { nestedPropertySeletor } from "../../utils/nestedPropertySelector";
import { FolderBackground, ThumbnailSelector, NewCategory } from "./style";
import Link  from "next/link";
import { ButtonFlat } from "../../globalStyleds";
import assets from "../../assets";
import CategoryItem from './CategoryItem';

function drawPropertiesAsFolder_(obj, pathAsString, pathAsArray) {
    if (obj === undefined)
        return <></>;

    const currentFolder = nestedPropertySeletor(obj, pathAsString).get();

    if (currentFolder === undefined)
        return <></>;

    return (
        <>
            <FolderBackground>

                {
                    Object.keys(currentFolder)
                        .filter(key => key.charAt(0) !== '_')
                        .map(key => (<CategoryItem key={key} name={key} pathAsArray={pathAsArray} pathAsString={pathAsString} categoryObject={currentFolder[key]} />))

                }
                <hr />
                <NewCategory><Link href='/'>Adicionar Nova Categoria</Link></NewCategory>
            </FolderBackground>
            <ThumbnailSelector>
                <h4>Thumbnail:</h4>
                <img src={assets.imagePlaceholder} />
                <ButtonFlat>Change</ButtonFlat>
            </ThumbnailSelector>
        </>
    )
}

export const drawPropertiesAsFolder = drawPropertiesAsFolder_;