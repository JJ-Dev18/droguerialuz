import styled from 'styled-components'

export const ContentHeader = styled.div `
display: flex;
flex-direction: column;
height: 60px;
width: 100vw;

`

export const ContentPregunta = styled.div `
background-color: var(--color--terciary);
height: 60px;
display: flex;
justify-content: center;
align-items: center;
color: white;
`

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
export const Navigator = styled.nav`
  height: 40px;
  width: 100vw;
  display: ${(props) => (props.open ? "flex" : "none")};

  @media (min-width: 768px) {
    display: flex;
  }
`;
export const ListLinks = styled.ul`
  display: ${(props) => (props.open ? "flex" : "none")};
  flex-direction: column;
  list-style: none;
  background-color: var(--color--terciary);

  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0;
  margin: 0;
  padding: 40px;
  color: white;
  transition: display 3s ease;
  animation: alternate 1s;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 32%;
    height: 100%;
    position: relative;
    background: none;
    align-items: center;
    justify-content: space-around;
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
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media (min-width: 768px) {
    display: none;
   
  }
`;
export const Enlaces = styled.li`
  margin-top: 10px;
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

export const ContentButtons = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
  @media (min-width: 768px) {
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
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;