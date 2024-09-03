import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    padding: 0px;
    margin: 0px;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
  
body{
     background: ${({ theme }) => theme.COLORS.BLUE_800};
     color: ${({ theme }) => theme.COLORS.WHITE};
}

a,li{
    text-decoration: none;
    
}
button,a{
    cursor: pointer;
  
    
    


}


}`;
