import styles from '../styles/components/Header.module.css'
import { useState } from 'react';

export const Header = () => {
  const [show, setShow] = useState(true);

  const ToggleOpen = () => {
    document.body.style.overflow = show ? "hidden" : "initial"
    document.body.style.width = show ? "100%" : "90%"

    var element = document.getElementById("menuSection");
    element.classList.toggle("on");
      
    setShow(!show)
  }

  const ToggleClose = () => {
    document.body.style.overflow = "initial"
    document.body.style.width = "90%"

    var element = document.getElementById("menuSection");
    element.classList.toggle("on");
      
    setShow(true)
  }

  return (
    <header className={styles.header}>
      <div className={styles.divHeader}>
        <div className={styles.left}> 
          <h1 className={styles.h1} id="h1"><span className={styles.span}>&lt;</span> Guilherme Lawisch <span className={styles.span}>/&gt;</span></h1>
        </div>
        <div className="menuSection" id="menuSection">
          <div className={styles.menuToggle} id="menuToggle" onClick={() => ToggleOpen()}>
            <div className={styles.one} id="one" />
            <div className={styles.two} id="two" />
            <div className={styles.three} id="three" />
          </div>
          <nav className={styles.nav} id="nav">
            <ul className={styles.ul} id="ul">
              <li className={styles.li}><a href="#about" onClick={() => ToggleClose()} className={styles.a}>Sobre</a></li>
              <li className={styles.li}><a href="#skills" onClick={() => ToggleClose()} className={styles.a}>Habilidades</a></li>
              <li className={styles.li}><a href="#projects" onClick={() => ToggleClose()} className={styles.a}>Projetos</a></li>
              <li className={styles.li}><a href="#contact" onClick={() => ToggleClose()} className={styles.a}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
} 