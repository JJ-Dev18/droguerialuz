import styled from 'styled-components'

export const LoginContent = styled.div ` 
position : fixed;
top : 0;
bottom: 0;
left: 0;
right: 0;
width: 375px;
height: 375px;
background: white;
border-radius : 20px;
padding: 15px;
z-index : 9999;
margin: auto;
display: flex;
flex-direction: column;
h2{
  text-align: center;
  color: var(--color--secondary);
}
`
export const FormLogin = styled.form ` 
display: flex;
flex-direction: column;
justify-content: center;
`

export const ButtonCerrar = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 40px;
  cursor: pointer;
  
`;
export const GoogleWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;

  button {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black !important;
    font-weight: bold !important;
  }
`;