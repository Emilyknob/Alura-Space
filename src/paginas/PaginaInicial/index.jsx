import Cabecalho from "../../Componentes/Cabeçalho";
import Galeria from "../../Componentes/Galeria";
import Menu from "../../Componentes/Menu";
import Rodape from "../../Componentes/Rodape";
import banner from './banner.png';
import styles from './PaginaInicial.module.scss'

export default function PaginaInicial(){
    return (
        <>
            <Cabecalho/>
            <main className={styles.main}>
                <section className={styles.principal}>
                    <Menu />
                    <div className={styles.principal__imagem}>
                        <img src={banner} alt="A imagem da terra"/>
                        <h1>A galeria mais completa de fotos do espaço!</h1>
                    </div>
                </section>
                <Galeria />
            </main>
            <Rodape />
        </>
    )
}