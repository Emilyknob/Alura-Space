import styles from "./Populares.module.scss";

export default function Populares(props) {
    return(
        <section>
            <img className={styles.imagem} src={props.imagem} alt={props.alt}/>
        </section>
    )
}