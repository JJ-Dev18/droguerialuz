import styled from 'styled-components'

export const ContainCard = styled.div ` 
position: absolute;
top: 45px;
left: 0;
padding: 10px;
width: 100vw;
height: auto;
background: white;

@media (min-width:900px){
  width: 17vw;
}
`

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