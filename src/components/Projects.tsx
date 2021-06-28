import styles from '../styles/components/Projects.module.css'

export const Projects = () => {
  return (
    <>
      <section className={styles.outside} id="projects">
        <div className={styles.title}>
          <div className={styles.icon}>
            <svg height="50" width="50">
              <polygon points="25,5 5,25 25,45 45,25" className={styles.outsideIcon}/>
              <polygon points="25,14 14,25 25,36 36,25" className={styles.insideIcon}/>
            </svg>
          </div>
          <h2 className={styles.h2}>Projetos</h2>
        </div>
        <div className={styles.cards}>
          <a href="https://boanerges.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.layoutOutside} />
            <div className={styles.cardBackground}>
              <img src="images/boanerges.jpg" alt="site da padaria boanerges" className={styles.image}/>
              <h3 className={styles.h3}>Website - Padaria Boanerges</h3>
              <p className={styles.p}></p>
            </div>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.layoutOutside} />
            <div className={styles.cardBackground}>

            </div>
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer" className={styles.card}>
            <div className={styles.layoutOutside} />
            <div className={styles.cardBackground}>
              <img src="images/jobscalc.jpg" alt="" className={styles.image}/>
              <h3 className={styles.h3}>Website - Cálculo de Salário</h3>
              <p className={styles.p}></p>
            </div>
          </a>
        </div>
      </section>
      <div className="divider">
        <div className="divider-2" />
      </div>
    </>
  )
}