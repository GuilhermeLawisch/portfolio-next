import styled from "styled-components";

export const Container = styled.div`
  .outsideIcon {
    fill: transparent;
    stroke: var(--purple);
    stroke-width: 2;
  }
  .insideIcon {
    fill: var(--pink);
    stroke: var(--purple);
    stroke-width: 1;
  }
  .title {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin-bottom: 50px;
  }
  h2 {
    color: var(--title);
    font-family: 'Roboto';
    text-transform: uppercase;

    margin: -5px 0 0 10px;
    font-size: 2.2rem;
    font-weight: 400;
  }

  .icons-wrapper {
    width: 100%;   
  }

  .icons {
    display: flex;

    overflow-x: auto;

    transition: 0.05s;
  }

  .icons::-webkit-scrollbar {
    width: 0px;
  }

  .outside-icon {
    flex: none;

    width: 80px;
    margin: 0 60px;

    scroll-snap-align: start; 
    transition: 0.05s;

    display: grid;
    grid-template-columns: 1fr;
  }

  .icons svg {
    width: 80px;
    height: 80px;

    margin: auto;
  }

  .barAll {
    width: 100%;
    height: 5px;
    margin: 32px 0 -5px; 

    background: rgba(100, 100, 255, 0.4);
    border-radius: 5px;
  }
  .barPercentCSS {
    height: 5px;
    margin-bottom: 16px;

    background: #3185fc;
    border-radius: 5px 0 0 5px;
  }

  .progressPercent {
    font-family: 'Roboto';
    font-size: 1.2rem;
    color: rgb(210, 234, 255);
    text-align: center;
  }

  .icons.one .outside-icon {
    transform: translate(0px)
  }
  .icons.two .outside-icon {
    transform: translate(-200px)
  }
  .icons.three .outside-icon {
    transform: translate(-400px)
  }
  .icons.four .outside-icon {
    transform: translate(-600px)
  }
  .icons.five .outside-icon {
    transform: translate(-800px)
  }
  .icons.six .outside-icon {
    transform: translate(-1000px)
  }
  .icons.seven .outside-icon {
    transform: translate(-1200px)
  }

  @media (max-width: 500px) {
    .outside-icon {
      width: 35vw;
      margin: 5vw;
    }

    .icons.one .outside-icon {
      transform: translate(0vw)
    }
    .icons.two .outside-icon {
      transform: translate(-45vw)
    }
    .icons.three .outside-icon {
      transform: translate(-90vw)
    }
    .icons.four .outside-icon {
      transform: translate(-135vw)
    }
    .icons.five .outside-icon {
      transform: translate(-180vw)
    }
    .icons.six .outside-icon {
      transform: translate(-225vw)
    }
    .icons.seven .outside-icon {
      transform: translate(-270vw)
    }
  }
`;