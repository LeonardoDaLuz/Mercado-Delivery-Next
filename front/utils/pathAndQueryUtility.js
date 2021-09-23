


export function getParentPath(path) { //nao usada

    let splitedPath = path.split('/');
    //splitedPath.pop();
    let ultimaCategoria = splitedPath.pop();

    ultimaCategoria = ultimaCategoria == "search" ? "Todos" : ultimaCategoria;

    console.log(splitedPath.join('/'));
    return {
        ultimaCategoria,
        caminhoAcima: splitedPath.join('/')
    }
}

