import styled from 'styled-components'

export const ContentFamilia = styled.div`
  display: flex;
  flex-direction : column;
  justify-content: center;
  /* align-items: center; */
  background-color: #f5f5f5;
  /* padding: 15px; */
  /* width: 100vw; */
  /* height: 200px; */

  @media (min-width:900px){
    /* height: 500px; */
  }
`;

export const Empleado = styled.div`
  height: 100px !important ;
  width: 100px !important;
  display: flex !important;
  flex-direction: column !important;
  align-items: center !important;
  justify-content: center !important;
  img {
    width: 100% !important;
    height: 100% ;
    object-fit: cover;
    border-radius : 100%;
    /* border: 1px solid red !important; */
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
    height: 500px !important;
    width:300px !important ;
    /* img{
      height: 60% !important ;
    } */
    span{
      height: 60% !important;
    }
    h3{
      font-size: 1.6rem;
    }
    h4{
     font-size: 1.4rem;
    }
  }
`;