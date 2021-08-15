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

  .icon {
    flex: none;

    width: 300px;
    height: 120px;

    scroll-snap-align: start; 
    transition: 0.2s;
  }

  .icons.one .icon {
    transform: translate(0px)
  }
  .icons.two .icon {
    transform: translate(-300px)
  }
  .icons.three .icon {
    transform: translate(-600px)
  }
  .icons.four .icon {
    transform: translate(-900px)
  }
  .icons.five .icon {
    transform: translate(-1200px)
  }

  @media (max-width: 500px) {
    .icon {
      width: 45vw;
    }

    .icons.one .icon {
      transform: translate(0vw)
    }
    .icons.two .icon {
      transform: translate(-45vw)
    }
    .icons.three .icon {
      transform: translate(-90vw)
    }
    .icons.four .icon {
      transform: translate(-135vw)
    }
    .icons.five .icon {
      transform: translate(-180vw)
    }
  }
`;