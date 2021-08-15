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
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
  }

  .icon {
    flex: none;

    width: 300px;
    height: 120px;

    scroll-snap-align: start;
  }

  /* .front {
    grid-area: front;
  }
  .backDatabase {
    grid-area: backdatabase;
  }

  .outside {
    color: var(--title);

    display: grid;
    grid-template-areas:
      'front'
      'backdatabase';
    row-gap: 20px;

    padding: 20px 50px 0;
    margin: auto;
  }

  .front,
  .backDatabase {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .icons {
    width: 125px;
  }

  .h3 {
    font-family: 'Roboto';
    font-size: 1.6rem;
    font-weight: 300;
    color: var(--title);
  }

  @media (max-width: 500px) {
    .icons {
      width: 110px;
    }
  }

  @media (max-width: 320px) {
    .outside {
      padding: 20px;
    }

    .icons {
      width: 90px;
    }
  } */

`;