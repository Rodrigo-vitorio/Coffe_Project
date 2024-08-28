import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 120px auto;
  grid-template-areas: "header" "content";
  > main{
    grid-area: content;
    overflow-y: scroll;
    overflow-x: hidden;
  
}`;

export const Content = styled.div`
  background:${({theme})=>theme.COLORS.WHITE} ;

  >.showProdutos{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-items: center;
    grid-column-gap: 1px;
    grid-row-gap: 1px;

 
  
    margin: 30px 10px;
    >img{
      width: 90%;
      height: 90%;
    }
  }
  >.carrossel{
    width: 98VW;
    height: 500px;
    background-image: url("../../../imagens/backgroundBlogs.png");
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    >h1{
      color: black;
      font-size: 52px;
      margin-bottom: 50px;
      
      font-family: ${({theme})=>theme.FONTS.ABHAYA_LIBRE};
    }
  }
`
