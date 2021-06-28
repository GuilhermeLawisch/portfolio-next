import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    scroll-behavior: smooth;

    max-width: 1200px;
    width: 90%;
    margin: auto;
    background-image: url("../images/background-low.jpg");
    background-size: 100%;
    background-position: right;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }

  .divider {
    margin: 150px 0;
  }

  .divider-1 {
    height: 2px;
    background: linear-gradient(
      270deg,
      hsla(272, 36%, 57%, 1) 0%,
      hsla(272, 65%, 88%, 0) 100%
    );
  }

  .divider-2 {
    height: 2px;
    background: linear-gradient(
      90deg,
      hsla(272, 36%, 57%, 1) 0%,
      hsla(272, 65%, 88%, 0) 100%
    );
  }

  :root {
    --background: #282a36;
    --current-line: #44475a;	
    --foreground:	#f8f8f2;	
    --comment: #6272a4;	
    --cyan:	#8be9fd;	
    --green:	#50fa7b;	
    --orange:	#ffb86c;	
    --pink:	#ff79c6;	
    --purple:	#bd93f9;	
    --red:	#ff5555;	
    --yellow:	#f1fa8c;

    --title: #ffffff;
    --text: #dfdfdf;
  }

  @media (max-width: 500px) {
    * {
      font-size: 75%; 
    }

    body {
      background-size: cover;
      background-position: center;
    }

    .divider {
      margin: 50px 0;
    }

    .menuSection #nav {
      display: none;
    }
  
    #one,
    #two,
    #three {
        background-color: var(--cyan);
        height: 5px;
        width: 100%;
        margin: 6px auto;
  
        transition-duration: 0.3s;
    }
  
    #menuToggle {
        width: 40px;
        height: 30px;
        margin-right: 20px;
    }
  
    .menuSection.on {
        position: absolute;
        top:0;
        left:0;
        
        width: 100vw;
        height: 100vh;
  
        background-color: var(--background);
        
        z-index: 10;
  
        display: flex;
        justify-content: center;
        align-items: center;
    }
  
    .menuSection.on #nav {
        display: block;
    }
  
    .menuSection.on #menuToggle {
        position: absolute;
        right: 22px;
        top: 15px;
    }
  
    .menuSection.on #menuToggle #one {
        transform: rotate(45deg) translate(7px, 7px);
    }
  
    .menuSection.on #menuToggle #two {
        opacity: 0;
    }
  
    .menuSection.on #menuToggle #three {
        transform: rotate(-45deg) translate(8px, -9px);
    }
  
    .menuSection.on #nav #ul {
        text-align: center;
        display: block;
    }
  
    .menuSection.on #nav #ul li a{
        transition-duration: 0.5s;
        font-size: 2rem;
        line-height: .6rem;
        display: block;
        padding: 2.2rem;
    }
  }
`;