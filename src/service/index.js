import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";

export function filtrar(lista, tag){
    const filtro = lista.filter(list => (list.nome === tag));
    return filtro;
}

export function click(id, info){
    const cardFavoritado = info.map( item => {
        if(item.id === id){
            if(item.favorito === false){
                item.favorito = true;
            } else {
                item.favorito = false;
            }
        }
    })
    console.log(cardFavoritado);
}