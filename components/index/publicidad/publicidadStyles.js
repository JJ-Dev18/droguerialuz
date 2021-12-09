import styled from 'styled-components'

export const ContentPublicidad = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: 100vw;
  margin-top: 20px;
  img {
    width: 120px !important;
    height: 150px !important;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    img {
      width: 300px !important;
      height: 200px !important;
    }
  }
  @media (min-width: 1000px) {
    margin-top: 45px;
    img {
      width: 300px !important;
      height: 300px !important;
    }
  }
  @media (min-width: 1300px) {
    margin-top: 45px;
    img {
      width: 400px !important;
      height: 400px !important;
    }
  }
  @media (min-width: 1600px) {
    margin-top: 45px;
    img {
      width: 500px !important;
      height: 500px !important;
    }
  }
`;