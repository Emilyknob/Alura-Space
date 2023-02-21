import React from 'react'
import home from '../../assets/icones/home-ativo.png'
import vistas from '../../assets/icones/mais-vistas-inativo.png'
import curtida from '../../assets/icones/mais-curtidas-inativo.png'
import novas from '../../assets/icones/novas-inativo.png'
import surpreenda from '../../assets/icones/surpreenda-me-inativo.png'
import styles from './Menu.module.scss'

export default function Menu() {
  return (
    <nav className={styles.menu}>
        <ul className={styles.menu__lista}>
            <li className={styles.menu__item}>
                <img src={home} alt=''/>
                <a href=''>Início</a>
            </li>
            <li className={styles.menu__item}>
                <img src={vistas} alt=''/>
                <a href=''>Mais visitas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={curtida} alt=''/>
                <a href=''>Mais curtidas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={novas} alt=''/>
                <a href=''>Novas</a>
            </li>
            <li className={styles.menu__item}>
                <img src={surpreenda} alt=''/>
                <a href=''>Surpreenda-me</a>
            </li>
        </ul>
    </nav>
  )
}

