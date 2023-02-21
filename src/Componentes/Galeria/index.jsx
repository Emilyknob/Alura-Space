import Cards from "../Cards";
import styles from "./Galeria.module.scss";
import info from "../Cards/Informacoes";
import infoImagem from "../Populares/ImgPopulares";
import Populares from "../Populares/Populares";
import { filtrar } from "../../service";
import { useState } from "react";

export default function Galeria() {
    const [informacao, setInformacao] = useState(info);

    return(
        <section className={styles.galeria}>
            <div className={styles.galeria__tag}>
                <h1>Navegue pela galeria</h1>
            <div className={styles.galeria__tagbotoes}>   
                <p>Busque por tags:</p>
                <div>
                    <button onClick={() => setInformacao(filtrar(info, "Estrelas"))}>Estrelas</button>
                    <button onClick={() => setInformacao(filtrar(info, "Galáxias"))}>Galáxias</button>
                    <button onClick={() => setInformacao(filtrar(info, "Lua"))}>Lua</button>
                    <button onClick={() => setInformacao(filtrar(info, "Planetas"))}>Planetas</button>
                </div>
            </div> 
            </div>
            <div className={styles.galeria__main}>
                <div className={styles.galeria__cards}>
                    {informacao.map(item => <Cards nome={item.nome} imagem={item.imagem} fonte={item.fonte} key={item.id}/>)}
                </div>
                <div className={styles.galeria__populares}>
                    <h2>Populares</h2>
                    {infoImagem.map(item => <Populares imagem={item.imagem} alt={item.alt} key={item.id}/>)}
                    <div className={styles.populares__button}>
                        <button>Ver mais</button>
                    </div>
                </div>
            </div>
        </section>
    )
}