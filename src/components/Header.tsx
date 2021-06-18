import styles from '../styles/components/Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.divHeader}>
        <div className={styles.left}> 
          <h1 className={styles.h1} id="h1"><span className={styles.span}>&lt;</span> Guilherme Lawisch <span className={styles.span}>/&gt;</span></h1>
        </div>
        <div className={styles.right}>
          <nav className={styles.nav}>
            <ul className={styles.ul}>
              <li className={styles.li}><a href="#about" className={styles.a}>Sobre</a></li>
              <li className={styles.li}><a href="#skills" className={styles.a}>Habilidades</a></li>
              <li className={styles.li}><a href="#projects" className={styles.a}>Projetos</a></li>
              <li className={styles.li}><a href="#contact" className={styles.a}>Contato</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
} 