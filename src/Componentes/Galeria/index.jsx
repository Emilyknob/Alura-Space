import Cards from "../Cards";
import Foto1 from '../../assets/imagens/galeria/foto-1.png';
import Foto2 from '../../assets/imagens/galeria/foto-2.png';
import Foto3 from '../../assets/imagens/galeria/foto-3.png';
import Foto4 from '../../assets/imagens/galeria/foto-4.png';
import Foto5 from '../../assets/imagens/galeria/foto-5.png';
import Foto6 from '../../assets/imagens/galeria/foto-6.png';
import styles from "./Galeria.module.scss";
import Tags from "../Tags";

const info = [
    {
        imagem: Foto1,
        nome: "galáxia",
        fonte: "Alura"
    },
    {
        imagem: Foto2,
        nome: "lua",
        fonte: "Alura"
    },
    {
        imagem: Foto3,
        nome: "terra",
        fonte: "Alura"
    },
    {
        imagem: Foto4,
        nome: "nuvem",
        fonte: "Alura"
    },
    {
        imagem: Foto5,
        nome: "meteoro",
        fonte: "Alura"
    },
    {
        imagem: Foto6,
        nome: "nuvem",
        fonte: "Alura"
    }
]

export default function Galeria() {
    return(
        <section className={styles.galeria}>
            <div><Tags /></div>
            <div className={styles.galeria__cards}>
                {info.map(item => <Cards nome={item.nome} imagem={item.imagem} fonte={item.fonte} key={item.nome}/>)}
            </div>
        </section>
    )
}