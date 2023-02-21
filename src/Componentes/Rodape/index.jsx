import styles from "./Rodape.module.scss";
import facebook from "../../assets/icones/facebook.svg"
import twitter from "../../assets/icones/twitter.svg"
import instagram from "../../assets/icones/instagram.svg"

export default function Rodape () {
    return(
        <footer className={styles.rodape}>
            <div className={styles.rodape__icones}>
                <a 
                    href="https://www.facebook.com/AluraCursosOnline/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={facebook} alt="Ícone do facebook"/>
                </a>
                <a 
                    href="https://twitter.com/aluraonline?lang=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={twitter} alt="Ícone do twitter"/>
                </a>
                <a 
                    href="https://www.instagram.com/aluraonline/?hl=en"
                    target="_blank"
                    rel="noreferrer"
                >
                    <img src={instagram} alt="Ícone do instagram"/>
                </a>
            </div>
            <p>Desenvlvido por Alura.</p>
        </footer>
    )
};