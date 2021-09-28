import Link from 'next/link';
import React from 'react';
import { PathBreadcrumbs }from './style';

function CategoryBreadcrumbs_({ objectPath, rootPath }) {

    let pathArray = objectPath.split('.');
    let exitFolderClasses = pathArray.length === 0 || pathArray[0] === '' ? 'exitFolder disabled' : 'exitFolder';
   // console.log(pathArray);
    return (
        <PathBreadcrumbs>
            <Link className={exitFolderClasses} href={'/categoryManager/' + pathArray.slice(0, pathArray.length - 1).join('/')}><a></a></Link>
            <Link key='0' href='/categoryManager/'>Todas</Link>

            {pathArray.map((item, index) => {

                let href = '/categoryManager/' + pathArray.slice(0, index + 1).join('/');

                return (
                    <React.Fragment key={index}>
                        <span className='separator'>{'>'}</span>
                        <Link href={href}>{item}</Link>
                    </React.Fragment>
                )
            }
            )}
            {objectPath.length > 0 && <span className='separator'>{':'}</span>}
        </PathBreadcrumbs>
    );
}

export const CategoryBreadcrumbs = CategoryBreadcrumbs_;