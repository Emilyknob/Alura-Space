import styles from "./Cards.module.scss";
import { AiOutlineHeart } from "react-icons/ai";
import { AiFillHeart } from "react-icons/ai";
import { TbArrowsDiagonal } from "react-icons/tb";
import { useState } from "react";
import { click } from "../../service";
import info from "./Informacoes";

export default function Cards(props) {
    function favoritar() {
        props.setInfo(click(props.id, info));
    }


    return(
        <section className={styles.card}>
            <img className={styles.card__img} src={props.imagem} alt={props.nome}/>
            <div className={styles.card__texto}>
                <div>
                    <h1>{props.nome}</h1>
                    <p>{props.fonte}</p>
                </div>
                <div className={styles.card__icone}>
                    {!props.favorito ? <AiOutlineHeart onClick={favoritar}></AiOutlineHeart> : <AiFillHeart onClick={favoritar}></AiFillHeart>}
                    <TbArrowsDiagonal/>
                 </div>
             </div> 
        </section>
    )
}