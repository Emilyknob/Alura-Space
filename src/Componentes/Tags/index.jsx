import styles from "./Tags.module.scss";

export default function Tags() {
    return(
       <section className={styles.tag}>
            <h1>Navegue pela galeria</h1>
        <div className={styles.tag__botoes}>   
            <p>Busque por tags:</p>
            <div>
                <button>Estrelas</button>
                <button>Galáxias</button>
                <button>Lua</button>
                <button>Planetas</button>
            </div>
        </div> 
       </section>
    )
}