import styled from "styled-components";

export const Container = styled.div`
  .title {
    display: flex;
    text-align: center;
    align-items: center;
    justify-content: center;

    margin: 30px 0;
  }

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

  .h2 {
    color: var(--title);
    font-family: 'Roboto';
    text-transform: uppercase;

    margin: -10px 0 0 10px;
    font-size: 2.2rem;
    font-weight: 400;
  }

  .cards {
    display: flex;
    justify-content: space-between;
    text-align: center;
    align-items: center;
    flex-wrap: wrap;

    position: relative;
  }

  .card.close {
    text-decoration: none;
    color: white;
    font-family: 'Roboto';
  }

  .layoutOutside {
    position: relative;

    background-color: var(--cyan);

    width: 360px;
    height: 20px;

    border-radius: 50px;
  }

  .cardBackground {
    position: relative;
    top: -38px;

    background-color: var(--current-line);

    margin-top: 25px;
    padding: 16px;

    width: 360px;
    height: 275px;

    border-radius: 0 0 10px 10px;
  }

  .image {
    position: relative;
    /* top: 17.5px; */

    width: 330px;
    height: 180px;

    border-radius: 10px;
    margin-bottom: 0px;
  }

  .h3 {
    font-weight: 500;
    font-size: 1.4rem;

    margin: 1.2rem;
  }

  .card.open {
    text-decoration: none;
    color: white;
    background: rgba(0,0,0,0.8);
    font-family: 'Roboto';

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;

    z-index: 10;
    border-radius: 5px;

    .exit {
      background: transparent;
      width: 50px;
      height: 50px;

      position: absolute;
      top: 12vh;
      left: 84vw;
      z-index: 11;
      transition: 0.2s;

      .one {
        width: 60px;
        height: 7px;
        position: relative;
        top: 21px;
        left: -5px;
        border-radius: 5px;

        background: var(--cyan);
        transform: rotate(45deg);
      }

      .two {
        width: 60px;
        height: 7px;
        position: relative;
        top: 15px;
        left: -5px;
        border-radius: 5px;

        background: var(--cyan);
        transform: rotate(135deg);
      }

      &:hover {
        cursor: pointer;
        opacity: 0.9;
      }
    }

    .layoutOutside {
      position: relative;

      background-color: var(--cyan);

      width: 84vw;
      height: 20px;
      margin-top: 6vh;
      margin-left: 8vw;  
      /* margin: 5vw 5vh 0 0; */

      border-radius: 50px;
    }

    .cardBackgroundOpen {
      position: relative;
      top: -38px;

      background-color: var(--current-line);

      margin-top: 25px;
      padding: 50px;
      margin-left: 8vw;

      width: 84vw;
      height: 84vh;

      border-radius: 0 0 10px 10px;

      font-family: "Raleway";
      color: #fff;
    }

    .image {
      position: relative;
      /* top: 17.5px; */

      width: 40vw;
      height: auto;

      border-radius: 10px;
      margin-bottom: 0px;
    }

    h3 {
      font-weight: 700;
      font-size: 2rem;
      margin: 3rem;
    }
    
    p {
      font-weight: 400;
      font-size: 1.6rem;
    }
  }

  @media (max-width: 500px) {
    .cards {
      justify-content: center;
    }

    .layoutOutside,
    .cardBackground {
      width: 100%;
    }

    .cardBackground {
      height: 220px;
    }

    .image {
      /* top: 15px; */

      width: 100%;
      height: 150px;

      border-radius: 5px;
      margin-bottom: 15px;
    }

    .h3 {
      margin: 0;
    }

    .card.open {
      .exit {
        top: 8%;
        left: 80%;
        width: 25px;
        height: 25px;

        .one,
        .two {
          width: 35px;
        }
      }

      .cardBackgroundOpen {
        padding: 15px;
      }

      .image {
        margin-top: 45px; 
        width: 100%;
      }
    } 
  }


  /*.card.open {
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, .6);
    width: 100vw;
    height: 100vh;

    .layoutOutside {
      position: relative;

      background-color: var(--cyan);

      width: 90%;
      height: 90%;
      margin: 10% 10%;

      border-radius: 50px;
    }

    .cardBackground {
      position: relative;
      top: -38px;

      background-color: var(--current-line);

      margin-top: 25px;

      width: 360px;
      height: 375px;

      border-radius: 0 0 10px 10px;
    }

    .image {
      position: relative;
      top: 17.5px;

      width: 330px;
      height: 180px;

      border-radius: 10px;
      margin-bottom: 15px;
    }

    .h3 {
      font-weight: 300;
      font-size: 1.4rem;

      margin: 1.4rem;
    }

  } */

`;