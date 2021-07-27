import { useState, useEffect } from 'react';
import styles from '../styles/components/Projects.module.css'
import { Divider } from './Divider';

export const Projects = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 500);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 500);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

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
          <a href="http://yourneus.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.card} data-aos={ isDesktop ? "fade-up-right" : "fade-up" }>
            <div className={styles.layoutOutside} />
            <div className={styles.cardBackground}>
              <img src="images/YourneuS-home-lighttheme.png" alt="site de notícias" className={styles.image}/>
              <h3 className={styles.h3}>YourneuS</h3>
              <p className={styles.p}>
                Site de Notícias, frontend construído em NextJS e backend em NodeJS, integrados via API, utilizando como Banco de Dados MongoDB, hospedados na Vercel e Heroku respectivamente.
              </p>
            </div>
          </a>
          <a href="https://imagebynasa.vercel.app/" target="_blank" rel="noopener noreferrer" className={styles.card} data-aos="fade-up">
            <div className={styles.layoutOutside} />
            <div className={styles.cardBackground}>
              <img src="images/Image-by-NASA.png" alt="site de notícias" className={styles.image}/>
              <h3 className={styles.h3}>Image by NASA</h3>
              <p className={styles.p}>
                Website que consome uma API disponibilizada pela NASA, que todo dia disponibiliza uma imagem e um texto explicando e descrevendo em que local do universo está localizado.
              </p>
            </div>
          </a>
          <a href="https://boanerges.vercel.app" target="_blank" rel="noopener noreferrer" className={styles.card} data-aos={ isDesktop ? "fade-up-left" : "fade-up" }>
            <div className={styles.layoutOutside} />
            <div className={styles.cardBackground}>
              <img src="images/boanerges.jpg" alt="site da padaria boanerges" className={styles.image}/>
              <h3 className={styles.h3}>Padaria Boanerges</h3>
              <p className={styles.p}>
                Site com a intenção de promover uma padaria, mostrando um pouco da história e sempre divulgando novidades, passando credibilidade para o cliente.
              </p>
            </div>
          </a>
        </div>
      </section>
      <Divider position="2"/>
    </>
  )
}