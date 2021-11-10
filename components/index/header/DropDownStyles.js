import styled from 'styled-components'

export const ContentDropDown = styled.div`
  border: 1px solid var(--color--secondary);
  background: var(--color--terciary);
  position: absolute;
  padding: 20px;
  top: 50px;
  left: 25%;
  width: 700px;
  height: 400px;
  z-index:9999;
  
  & [type="radio"] {
    margin: 0;
    position: absolute;
    z-index: 1;
    cursor: pointer;
    opacity: 0;
    height: 40px;
    width: 250px;
    left: 0;
  }
  
`;
export const Categoria = styled.li`
  width: 250px;
  height: 40px;
  text-align: start;
  background: ${(props) =>
    props.select ? `var(--color--secondary)` : "var(--color--terciary)"};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  &:hover {
    background: var(--color--secondary);
  }
  a {
    display: flex;
    align-items: center;
    
    width: 100%;
    svg{
      margin-right: 10px ;
    }
  }
`;
export const ListSubCategoria = styled.ul`
 
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    width: 100%;
    /* position: relative; */
    li {
      width: 50%;
    }
  
`;
export const SubCategoria = styled.div`
  position: absolute;
  background: var(--color--terciary);
  right: 0;
  top: 0;
  width: calc(100% - 250px);
  z-index: 1;
  padding: 0 10px;
  /* opacity: 1; */
  /* visibility: visible; */
  height: 100%;

  overflow-y: scroll;
  border-left: 1px solid #a8a8a8;
  transition: all ease 0.4s;
  display: ${(props) => (props.open ? "flex" : "none")};
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SubMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 10px;
  li {
    margin-top: 15px;
  
    &:not(:first-child) {
      &:hover {
        color: var(--color--secondary);
      }
    }
  }
  &:first-child {
    span {
      font-size: 1.2em;
      padding: 0.4em 0.3em;
      display: flex;
      justify-content: center;

      /* color: inherit !important; */
      border-bottom: 3px solid var(--color--button);
      /* color: var(--color--secondary); */
      text-align: center;
    }
  }
`;