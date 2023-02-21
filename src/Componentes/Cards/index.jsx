import styles from "./Cards.module.scss";
import {AiOutlineHeart} from "react-icons/ai";
import {TbArrowsDiagonal} from "react-icons/tb";

export default function Cards(props) {
    return(
        <section className={styles.card}>
            <img className={styles.card__img} src={props.imagem} alt={props.nome}/>
            <div className={styles.card__texto}>
                <div>
                    <h1>{props.nome}</h1>
                    <p>{props.fonte}</p>
                </div>
                <div className={styles.card__icone}>
                    <AiOutlineHeart/>
                    <TbArrowsDiagonal/>
                 </div>
             </div> 
        </section>
    )
}