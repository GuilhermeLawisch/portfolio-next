import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');

  * {
    margin: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 1200px;
    width: 90%;
    margin: auto;
    background-image: url("../images/backgroundupdate.jpg");

    background-position: right;
    background-repeat: no-repeat;
    background-attachment: fixed;
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
  }
`;