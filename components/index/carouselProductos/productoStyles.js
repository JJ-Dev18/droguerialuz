import styled from 'styled-components'

export const ContentProducto = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 2px solid var(--color--secondary);
  width: 150px;
  height: 220px;
  border-radius: 0 35px 35px 35px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  @media (min-width: 1000px) {
    width: 200px;
    height: 300px;
    border-radius: 10px;
  }
`;
export const Descuento = styled.div`
  background-color: var(--color--secondary);
  position: absolute;
  top: 0;
  left: 0;
  width: 25%;
  height: 13%;
  border-radius: 0px 0 35px 0;
  color: white;
  /* font-size: 12px; */
  font-size: ${(props) => props.cel};
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 2px;
  z-index: 99;

  @media (min-width: 900px) {
    font-size: ${({pc}) => pc};
    
    width: ${(props) => props.width};
    justify-content: center;
  }
`;

export const ContentImage = styled.div ` 
display: flex;
justify-content: center;
align-items: center;
width: 80%;
height: 80%;
span{
  width: 100% !important;
  height : 100% !important;
}
img{
  object-fit: contain;
  width: 100%;
  height: 100%;
}
`
export const InfoProducto = styled.div`
  display: flex;
  flex-direction: column;
  padding:10px ;
  h1 {
    color: var(--color--primary);
    font-size: 15px;
  }
  span {
    color: gray;
    font-size: 10px;
    text-decoration: line-through;
  }
  button {
    color: white;
  }
  @media (min-width:1000px){
    margin-top: 40px;
  h1{
    font-size: 18px;
  }
 span{
   font-size: 14px;
 }
    }
`;
export const ContentButtonsProductos = styled.div`
  display: flex;
  justify-content: ${(props)=> props.space ? 'flex-start' : 'space-around'};
  align-items: center;
  margin-top: 2px;
  
`;

export const ButtonComprar = styled.button`
  background: var(--color--secondary);
  border: 1px solid var(--color--secondary);
  border-radius: 20px;
  color: white;
  font-size: 10px;
  padding: 5px 15px;
  margin-right: 5px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  @media (min-width: 1000px) {
    font-size: 18px;
    margin-left: 5px;
  }
`;

export const ButtonCarrito = styled.button`
  background-color: var(--color--secondary);
  border-radius: 50%;
  
  border: none;
  width: 28px;
  height: 28px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width:1000px){
    width: 45px;
    height: 45px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;