import styled from 'styled-components'

export const ContentFooter = styled.footer`

  width: 100vw;
`;

export const LogoFooter = styled.div`
  text-align: left;
  display: flex;
  position: absolute;
  top: -90px;
  left: 0;
  width: 180px;

  @media (min-width: 900px) {
    width: auto;
  }
  img {
    width: 180px;
    height: 80px;
    margin-right: auto;
    @media (min-width: 900px) {
      width: 250px;
    }
  }
`;
export const ContentBeneficios = styled.div`
  padding: 30px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    padding: 20px 100px;
  }
  @media (min-width: 1300px) {
    padding: 20px 250px;
  }
  @media (min-width: 1600px) {
    padding: 20px 500px;
  }
`;
export const Titulo = styled.div`
  width: 100%;
  h1 {
    text-align: left;
    color: var(--color--secondary);
  }
`;
export const Beneficios = styled.div ` 

display: flex;
flex-wrap:wrap;
justify-content: space-around;
width: 100%;

`

export const Beneficio = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 85px;
  height: 125px;
  @media (min-width: 900px) {
    width: 170px;
    height: 195px;
  }
  /* padding: 10px; */
  img {
    width: 70%;
    @media (min-width: 900px) {
     
    }
  }
`;
export const InfoBeneficio = styled.div`
  background: var(--color--secondary);
  border-radius: 20px;
  color: white;
  font-size: 10px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 85px;
  padding: 15px;
  @media (min-width: 900px) {
    width: 100%;
    font-size: 16px;
    padding: 20px;
    border-radius: 13px;
  }
`;

export const ContentInfoFooter = styled.div ` 
background-color: var(--color--button);
padding: 20px;
padding-top: 90px;
color: white;
display: flex;
flex-direction: column;
align-items: center;


`
export const GridInfo = styled.div ` 
display: flex;
position: relative;

`
export const Mapa = styled.div`
 
  /* width: 100%; */
  display: none;
  @media(min-width:900px){
    display: flex;
    width: 300px;
    height: 150px;
    img{
      width: 100%;
    }
  }
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 9px;
  border-left: 3px solid white;
  /* justify-content: space-around; */
  height: auto;

  @media (min-width: 900px) {
    border-left: 1px solid white;
    width: 200px;
  }
  @media (min-width: 1300px) {
    border-left: 1px solid white;
    width: 250px;
  }
 
  h1 {
    font-size: 14px;
    margin: 0;
    @media (min-width: 900px) {
      font-size: 20px;
    }
    @media (min-width: 1600px) {
      font-size: 18px;
    }
  }
  span {
    margin-top: 10px;
    font-family: "Sancoale";
    font-size: 12px;
    @media (min-width: 900px) {
      font-size: 16px;
    }
    @media (min-width: 1600px) {
      font-size: 18px;
    }
  }
`;

export const Copyrigth = styled.div`
  text-align: center;
  background: var(--color--button);
  color: white;
  font-size: 10px;
  font-family: "Sancoale";
  padding-top: 45px;

  @media (min-width: 900px) {
    font-size: 13px;
  }
`;