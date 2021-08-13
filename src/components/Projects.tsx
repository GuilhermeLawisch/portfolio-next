import { useState, useEffect } from 'react';
import cx from 'classnames';
import { Divider } from './Divider';
import { Container } from '../styles/components/Projects';

export const Projects = () => {
  const [isDesktop, setDesktop] = useState<boolean>(false);
  const [model1, setModel1] = useState<boolean>(false);
  const [model2, setModel2] = useState<boolean>(false);
  const [model3, setModel3] = useState<boolean>(false);

  const toggleModel = (value: number) => {
    switch (value) {
      case 1:
        setModel1(!model1)
        break;
      case 2:
        setModel2(!model2)
        break;
      case 3:
        setModel3(!model3)
        break;
      default:
        break;
    }
  }

  const updateMedia = () => {
    if (typeof window !== "undefined") {
      setDesktop(window.innerWidth > 500);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateMedia);
      return () => window.removeEventListener("resize", updateMedia);
    }
  });

  return (
    <Container>
      <section className="outside" id="projects">
        <div className="title">
          <div className="icon">
            <svg height="50" width="50">
              <polygon points="25,5 5,25 25,45 45,25" className="outsideIcon"/>
              <polygon points="25,14 14,25 25,36 36,25" className="insideIcon"/>
            </svg>
          </div>
          <h2 className="h2">Projetos</h2>
        </div>
        <div className="cards">
          <a onClick={() => toggleModel(1)} className={cx(//(isDesktop ? "fade-up-right" : "fade-up")
            'card',
            model1 ? 'open' : 'close'
          )}> 
            { model1 ? (
              <>
                <div className="exit" onClick={() => toggleModel(1)}>
                  <div className="one" />
                  <div className="two" />
                </div>
                <a href="http://yourneus.vercel.app" target="_blank" rel="noopener noreferrer">
                  <div className="layoutOutside"/>
                  <div className="cardBackgroundOpen">
                    <img src="images/YourneuS-home-lighttheme.png" alt="site de notícias" className="image"/>
                    <h3 className="h3">YourneuS</h3>
                    <p className="p">
                      Site de Notícias, frontend construído em NextJS e backend em NodeJS, integrados via API, utilizando como Banco de Dados MongoDB, hospedados na Vercel e Heroku respectivamente.
                    </p>
                  </div>
                </a>
              </>
            ) : (
              <div onClick={() => toggleModel(1)} >
                <div className="layoutOutside"/>
                <div className="cardBackground">
                  <img src="images/YourneuS-home-lighttheme.png" alt="site de notícias" className="image"/>
                  <h3 className="h3">YourneuS</h3>
                </div>
              </div>
            )}
          </a>
          <a onClick={() => toggleModel(2)}className={cx( //data-aos="fade-up" 
            'card',
            model2 ? 'open' : 'close'
          )} >
            { model2 ? (
              <>
                <div className="exit" onClick={() => toggleModel(2)}>
                  <div className="one" />
                  <div className="two" />
                </div>
                <a href="https://imagebynasa.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <div className="layoutOutside" />
                  <div className="cardBackgroundOpen">
                    <img src="images/Image-By-NASA.png" alt="images da nasa" className="image"/>
                    <h3 className="h3">Image by NASA</h3>
                    <p className="p">
                      Website que consome uma API disponibilizada pela NASA, que todo dia disponibiliza uma imagem e um texto explicando e descrevendo em que local do universo está localizado.
                    </p>
                  </div>
                </a>
              </>
            ) : (
              <div onClick={() => toggleModel(2)} >
                <div className="layoutOutside" />
                <div className="cardBackground">
                  <img src="images/Image-By-NASA.png" alt="images da nasa" className="image"/>
                  <h3 className="h3">Image by NASA</h3>
                </div>
              </div>
            )}
          </a>
          <a onClick={() => toggleModel(3)} className={cx(  // data-aos={ isDesktop ? "fade-up-left" : "fade-up"}  
            'card',
            model3 ? 'open' : 'close'
          )}>
            { model3 ? (
              <>
                <div className="exit" onClick={() => toggleModel(3)}>
                  <div className="one" />
                  <div className="two" />
                </div>
                <a href="https://boanerges.vercel.app" target="_blank" rel="noopener noreferrer">
                  <div className="layoutOutside" />
                  <div className="cardBackgroundOpen">
                    <img src="images/boanerges.jpg" alt="site da padaria boanerges" className="image"/>
                    <h3 className="h3">Padaria Boanerges</h3>
                    <p className="p">
                      Site com a intenção de promover uma padaria, mostrando um pouco da história e sempre divulgando novidades, passando credibilidade para o cliente.
                    </p>
                  </div>
                </a>
              </>
            ) : (
              <div onClick={() => toggleModel(3)} >
                <div className="layoutOutside" />
                <div className="cardBackground">
                  <img src="images/boanerges.jpg" alt="site da padaria boanerges" className="image"/>
                  <h3 className="h3">Padaria Boanerges</h3>
                </div>
              </div>
            )}
          </a>
        </div>
      </section>
      <Divider position="2"/>
    </Container>
  )
}