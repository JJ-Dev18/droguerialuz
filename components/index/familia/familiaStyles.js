import styled from 'styled-components'

export const ContentFamilia = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #f5f5f5;
  padding: 15px;
  width: 100vw;
  height: 230px;

  @media (min-width:900px){
    height: 400px;
  }
`;

export const Empleado = styled.div`
  height: 70%;
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100% !important;
    height: 100% ;
    object-fit: contain;
  }
  h3 {
    color: var(--color--button);
    margin: 0;
    font-size: 0.8125rem;
  }
  h4 {
    font-size: 0.8125rem;
    margin: 0;
  }
  span{
    width: 100% !important;
    height: 100% !important;
  }

  @media (min-width: 900px) {
    height: 400px;
    img{
      height: 60% !important ;
    }
    span{
      height: 60% !important;
    }
    h3{
      font-size: 1.2rem;
    }
    h4{
     font-size: 1rem;
    }
  }
`;