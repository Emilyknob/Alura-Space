export function filtrar(lista, tag){
    const filtro = lista.filter(list => (list.nome === tag));
    return filtro;
}