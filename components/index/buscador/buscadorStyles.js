import styled from 'styled-components'

export const ContentBuscador = styled.div`
  display: flex;
  justify-content: space-between;
  /* align-items: space-between; */
  background: url(${(props) => props.fondo}) center no-repeat;
  background-size: cover;
  position: relative;
  height: 320px;
  padding: 20px;

  @media (min-width: 900px) {
    justify-content: center;
    height: 480px;
    padding-bottom: 0;
  }
`;
export const InfoBuscador = styled.div`
  display: flex;
  justify-content: space-between;
  @media (min-width: 900px) {
    justify-content: center;
  }
`;
export const ContentInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: var(--color--secondary);
  text-align: start;
  width: 100%;
  @media (min-width: 900px) {
    justify-content: center;
  }
  h2 {
    width: 70%;
  }
  @media (min-width: 900px) {
    font-size: 25px;
    width: 30%;
    h2 {
      width: 100%;
    }
  }
  /* z-index: 2; */
`;

export const ContentImagen = styled.div`
  position: absolute;
  bottom: 0;
  right: -35px;
  width: 328px;
  @media (min-width: 900px) {
    position: static;
    display: flex;
    justify-content: center;
    width: 50%;
   
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const BuscadorInput = styled.input`
  border-radius: 20px;
  width: 100%;
  padding: 15px;
  text-align: center;
  z-index: 999;
  border: none;
  outline: none;
  @media (min-width: 900px) {
    
  }

  &:focus {
    outline: none;
  }
  ::placeholder {
    color: gray;
  }
`;
