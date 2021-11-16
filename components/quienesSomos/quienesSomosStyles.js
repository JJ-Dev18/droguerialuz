import styled from 'styled-components'

export const ContentQuienes = styled.div`
  padding: 25px;
  h1 {
    color: var(--color--secondary);
  }
  p {
    font-family: "Sancoale";
  }
  @media (min-width: 900px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 2.5rem;
    }
    p{
      font-size: 1.3rem;
    }
  }
`;
export const ContentLogo = styled.div`
  height: 100px;
  width: 100%;
  img {
    height: 100%;
    width: 80%;
    object-fit: contain;
  }
  @media (min-width: 900px) {
    display: flex;
    justify-content: center;
    height: 130px;
  }
  @media (min-width: 1300px) {
    justify-content: flex-start;
    margin-bottom: 30px;
    margin-top: 30px;
   img{
   
   }
  }
`;
export const ContentInfo = styled.div`
  @media (min-width: 900px) {
    width: 80%;
  }
  @media (min-width: 1300px) {
    width: 70%;
    margin-top: 30px;
  }
  @media (min-width: 1600px) {
    width: 60%;
  }
`;
export const ContentCards = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
    width: 90%;
    justify-content: space-around;
  }
  @media (min-width: 1600px) {
    width: 60%;
  }
`;
export const ContentCard = styled.div ` 

border-radius: 20px;
background: var(--color--secondary);
padding: 20px;
margin-top: 25px;
width: 370px;
h1{
  color: white;
}
p{
  color: white;
}
`