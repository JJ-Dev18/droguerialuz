import styled from 'styled-components'  
import Rate from "rc-rate";

export const ContentProducto = styled.div`
  width: 100%;
  display: flex;
  justify-items: center;
  align-items: center;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
  @media (min-width:900px){
   img{
     width: 300px;
     height: 300px;
   }
  }
`;
export const NavegacionImg = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
export const CardProducto = styled.div`
  width: 50%;
  background: #f5f5f5;
  padding: 25px 20px 10px;
  position: relative;
  border-radius: 0px 15px 15px 15px;
`;
export const ContentDetalleProducto = styled.div ` 
display: flex;
width: 100vw;
padding: 20px;
`

export const ContentInfoProducto = styled.div ` 
padding: 20px;
width: 100%;
h1{
  color: var(--color--button);
  font-size: 1.1rem;
}
p{
 font-family: 'Sancoale';
}
span{
  color: gray;
  font-size: .8rem;
  text-decoration: line-through;
}
@media (min-width:900px){
  h1{
    font-size: 1.8rem;
  }
  p{
    font-size: 1.4rem;
  }
  span{
    font-size: 1.4rem;
  }
}
`

export const StyledRate = styled(Rate)`
  &.rc-rate {
    font-size: 23px;
    margin-top: 10px;

    @media (min-width:900px){
      font-size: 35px;
    }
  }
`;