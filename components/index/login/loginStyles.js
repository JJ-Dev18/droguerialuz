import styled from 'styled-components'

export const LoginContent = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 325px;
  height: ${(props)=> props.height};
  background: white;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;
  padding: 15px;
  z-index: 9999;
  margin: auto;
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    color: var(--color--button);
  }
  h4 {
    text-align: center;
    color: var(--color--secondary);
    &:hover {
      text-decoration: underline;
    }
  }
`;
export const FormLogin = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* height: 150px; */
  padding: 20px;

  input {
    border-radius: 8px;
    background: #f5f5f5;
    outline: none;
    border: none;
    padding: 5px;
  }
  label {
    color: var(--color--button);
    margin-top: 10px;
  }
  button {
    width: 100%;
    /* height: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
    color: white !important;
    font-weight: bold !important;
    background: var(--color--secondary);
    border: 1px solid var(--color--secondary);
    border-radius : 10px;
    margin-top : 10px;
    cursor: pointer;
    &:hover{
      background: var(--color--terciary);
    }
  }
`;

export const ButtonCerrar = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 20px;
  right: 10px;
  cursor: pointer;
  
`;
export const GoogleWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: space-around;
  
  button {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white !important;
    font-weight: bold !important;
    background: var(--color--secondary);
    border: 1px solid var(--color--secondary);
    border-radius : 10px;
    margin-top : 10px;
    cursor: pointer;
    &:hover{
      background: var(--color--terciary);
    }
  }
`;