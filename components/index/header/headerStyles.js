import styled from 'styled-components'

export const ContentHeader = styled.div `
display: flex;
flex-direction: column;
width: 100vw;
position: relative;

`

export const ContentPregunta = styled.div`
  background-color: var(--color--terciary);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
 
`;

export const HeaderPrincipal = styled.header` 
background-color: var(--color--primary);
height: 80px;
display: flex;
justify-content: space-between;
padding: 20px;
/* width: 415px; */
align-items: center;
 @media (min-width: 768px) {
   width: 100vw;
   justify-content: space-around;
   padding: 50px;
 }
`;

export const ListLinks = styled.ul`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  background-color: var(--color--terciary);
  /* opacity: ${(props) => (props.open ? "1" : "0")}; */
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  padding: 0;
  margin: 0;
  padding: 40px;
  color: white;
  /* transition: all 3s ease-in; */
  /* animation: alternate 1s; */
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: relative;
    background: none;
    height: 100%;
    align-items: center;
    justify-content: space-around;
  }
  @media (min-width: 1000px) {
    width: 40%;
  }
  @media (min-width: 1300px) {
    width: 32%;
  }
`;
export const ButtonCerrar = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 40px;
  cursor: pointer;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img`
  width: 60%;
  height: 50px;
  @media (min-width: 768px) {
    width: 25%;
    height: 80px;
  }
`;

export const ButtonHamburguesa = styled.button`
  background-color: #ef1837;
  border-radius: 50%;
  padding: 10px;
  border: none;
  width: 50px;
  height: 50px;
  cursor: pointer;
  /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
  @media (min-width: 768px) {
    display: none;
   
  }
`;
export const Enlaces = styled.li`
  margin-top: 30px;
  padding: 5px;
  &:hover {
    /* border-top: 3px solid var(--color--secondary); */
    border-bottom: 3px solid var(--color--secondary);
  }
  @media (min-width: 768px) {
    font-size: 20px;
    margin-top: 0;
  }
  @media (min-width: 1600px) {
    font-size: 25px;
  }
`;
export const ContentRestEnlaces = styled.div `
   display: flex;
   flex-direction: column;
  @media (min-width: 768px) {
    display: none;
  }
`;
export const ContentButtons = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
export const ButtonsHeader = styled.button`
  background-color: var(--color--button);
  border-radius: 50%;
  padding: 10px;
  border: none;
  width: 45px;
  height: 45px;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    color: white;
  }
  
  &:hover {
    background:${(props)=> props.background};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 50% 50% 0 0 ;
    svg{
     color :red ;
    }
  }
`;
export const Navigator = styled.nav`
  display: none;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 100vw;
    /* position:  static; */
    background-color: var(--color--secondary);
  }
`;
export const  Categories = styled.div`
 width: 50%;
  height: 50px;
 text-align: center;
 color:white;
 display: flex;
 justify-content: center;
 align-items: center;
 cursor: pointer;
 position: relative;
 span{
   svg{
     margin-right: 5px;
   }
 }
`;

export const ListEnlacesNavegacion = styled.ul`
  display: flex;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

`;
export const EnlacesNavegacion = styled.li`
  text-align: center;
  color: white;

  @media (min-width: 768px) {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  a {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    &[aria-current] {
      background-color: var(--color--terciary);
    }
  }
`;