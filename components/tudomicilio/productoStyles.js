import styled from 'styled-components'

export const CardProductoDomicilios = styled.div`
  background: #f5f5f5;
  width: ${(props) => props.widthCel};
  height: ${(props) => props.heightCel};
  border-radius: 15px;
  padding: ${(props) => (props.padding ? "20px" : "10px")};
  margin-top: 20px;
  display: flex;
  margin-left: ${(props) => (props.marginleft ? "20px" : "0")};
  position: relative;
  img {
    width: ${(props) => props.widthImg};
    object-fit: contain;
  }
  @media (min-width: 900px) {
    height: ${(props) => props.heightPc};
    width: ${(props) => props.widthPc};

    h1 {
      font-size: ${(props) => props.h1};
    }
    p {
      font-size: ${(props) => props.p};
    }
  }
`;
export const TituloProducto = styled.h1 `
  color: var(--color--secondary);
  text-align: left;
  margin-left: 20px;
  font-size: 1.8rem;
  @media (min-width:900px){
    font-size: 2.5rem;
  }
`;
export const InfoProductoDomicilios = styled.div `  
display: flex;
flex-direction: column;
padding: 0 10px;

p{
  font-family: 'Sancoale';
  margin: 0;
}
`
export const ContentInfoProductDomicilios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  

`;
export const CantidadProductoCarrito = styled.span`
 
    position: absolute;
    bottom: 0;
    color: red;
    right: 10px;
  
`;
export const ContentButtonsProductDomicilios = styled.div ` 
padding: 5px;
display: flex;
justify-items: space-between;
`

export const Delete = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;