//import { CKEditor } from '@ckeditor/ckeditor5-react';

import { ButtonFlat, Row } from '../../../globalStyleds';
import { colorTheme } from '../../../theme';
import { DescricaoPgProduto, SaveOrDiscard } from './styles';
//import Editor from ;
import { useEffect, useLayoutEffect, useRef } from 'react';
import { editarQuantidadeDoProdutoAoCarrinho } from '../../../store/actions/carrinho';
import Script from 'next/script';

export const ProductDescription = ({ product, handleChanges, draftStatus, discardChanges, draftProduct }) => {


    useEffect(() => {

        if (window.ckeEditor) {
            window.ckeEditor.setData(product.description);
        }

    }, [product]);

    useEffect(() => {

        //Devido ao react atualizar os handlers toda hora, para não perder a referencia, é preciso reatribuir um change handler toda vez que há uma mudança no draft product.
        const editor = window.ckeEditor;

        if (editor) {
            const handleChangesCallback = () => {
                handleChanges({ target: { name: 'description', value: window.ckeEditor.getData() } });
            }
            editor.model.document.on('change:data', handleChangesCallback);

            return () => editor.model.document.off('change:data', handleChangesCallback);
        }

    }, [draftProduct]);

    const editorRef = useRef(null);

    useEffect(() => {

        ClassicEditor.create(document.querySelector('#editor-container'), {
            toolbar: {
                items: [
                    'heading',
                    '|',
                    'bold',
                    'italic',
                    'fontFamily',
                    'fontSize',
                    'fontColor',
                    'highlight',
                    'alignment',
                    'bulletedList',
                    'numberedList',
                    '|',
                    'outdent',
                    'indent',
                    '|',
                    'link',
                    'imageInsert',
                    'imageUpload',
                    'blockQuote',
                    'insertTable',
                    'mediaEmbed',
                    'undo',
                    'redo'
                ]
            },
            language: 'pt-br',
            image: {
                toolbar: [
                    'imageTextAlternative',
                    'imageStyle:full',
                    'imageStyle:side'
                ]
            },
            table: {
                contentToolbar: [
                    'tableColumn',
                    'tableRow',
                    'mergeTableCells'
                ]
            },
            licenseKey: '',


        })
            .then(editor => {
                window.ckeEditor = editor;

            })
            .catch(error => {
                console.error('Oops, something went wrong!');
                console.error('Please, report the following error on https://github.com/ckeditor/ckeditor5/issues with the build id and the error stack trace:');
                console.warn('Build id: wtt8a2of6jcy-gykna9cnvy8a');
                console.error(error);
            });

        return () => {
            if (window.ckeEditor)
                window.ckeEditor.destroy().catch(error => console.log(error));
        }

    }, [])


    return (
        <DescricaoPgProduto>

            <div><h3 >Descrição do produto</h3></div>
            <div id='editor-container'></div>
            <SaveOrDiscard>
                <ButtonFlat bgColor={colorTheme.warning()} disabled={draftStatus !== 'modified'} onClick={discardChanges}>Descartar alterações</ButtonFlat>
                <ButtonFlat type='submit' disabled={draftStatus !== 'modified'}>Salvar Alterações</ButtonFlat>
            </SaveOrDiscard>

        </DescricaoPgProduto>
    )
}
