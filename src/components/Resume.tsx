import styles from '../styles/components/Resume.module.css'

import { Divider } from './Divider'

export const Resume = () => {
  return (
    <>
      <div className={styles.resume} id="resume">
        <div className={styles.left}>
          <h3 className={styles.h3}>Desenvolvedor Full-Stack</h3>
          <h2 className={styles.h2}>Guilherme Lawisch</h2>
          <p className={styles.p}>Sempre em busca de agregar a equipe, tendo em vista que, nunca sabaremos tudo, por isso precisamos estar dispostos a aprender e ensinar.</p>
          <a href="images/curriculo-guilherme-lawisch.pdf" download><button className={styles.button}>Baixar Currículo</button></a>
        </div>
        <div className={styles.right}>
          <svg width="240" height="290" className={styles.svg}>
            <rect x="10" y="10" rx="10" ry="10" width="220" height="265" className={styles.backgroundSvg}/>
            <rect x="75" y="22" rx="5" ry="5" width="90" height="20" className={styles.titleSvg}/>
            <rect x="22" y="60" rx="5" ry="5" width="60" height="20" className={styles.subSvg}/>
            <rect x="22" y="95" rx="5" ry="5" width="130" height="20" className={styles.textSvg}/>
            <rect x="22" y="130" rx="5" ry="5" width="105" height="20" className={styles.textSvg}/>
            <rect x="22" y="165" rx="5" ry="5" width="80" height="20" className={styles.subSvg}/>
            <rect x="22" y="200" rx="5" ry="5" width="185" height="20" className={styles.textSvg}/>
            <rect x="22" y="235" rx="5" ry="5" width="155" height="20" className={styles.textSvg}/>
          </svg>      
        </div>
      </div>
      <Divider position="1" />
    </>
  )
}