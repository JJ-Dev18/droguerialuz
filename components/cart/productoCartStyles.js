import styled from 'styled-components'

export const ContainCard = styled.div`
  position: absolute;
  left: -105px;
  top: -345px;
  width: 370px;
  padding: 10px;
  height: auto;
  background: white;
  span {
    color: var(--color--secondary) !important;
  }
  @media (min-width: 768px) {
    width: 17vw;
    top: 45px;
    left: 0;
    padding: 10px;
  }
`;

export const CardProductoCart = styled.div ` 
width: 100%;

border-radius: 15px;
background: #f5f5f5;
display: flex;

img{
  width: 80px;
  object-fit: contain;
}

`

export const ContentButtonComprar = styled.div ` 
display: flex;
justify-content: space-between;
margin-top: 10px;
`