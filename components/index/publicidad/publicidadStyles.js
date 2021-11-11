import styled from 'styled-components'

export const ContentPublicidad = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: 100vw;
  margin-top: 20px;
  img {
    width: 120px;
    height: 150px;
    object-fit: contain;
  }
  @media (min-width: 768px) {
    img {
      width: 300px;
      height: 200px;
    }
  }
  @media (min-width: 1000px) {
    margin-top: 45px;
    img {
      width: 300px;
      height: 300px;
    }
  }
  @media (min-width: 1300px) {
    margin-top: 45px;
    img {
      width: 400px;
      height: 400px;
    }
  }
  @media (min-width: 1600px) {
    margin-top: 45px;
    img {
      width: 500px;
      height: 500px;
    }
  }
`;