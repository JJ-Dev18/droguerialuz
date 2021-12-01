import styled from 'styled-components'

export const ContentMenuUser = styled.div`
  position: absolute;
  top: 45px;
  left: 0;
  padding: 10px;
  width: 100vw;
  height: auto;
  background: white;
  padding: 15px;
  z-index: 9999999;
  li{
    color: var(--color--terciary);
    margin-top: 10px;
    svg{
      color: var(--color--secondary) !important;
      margin-right: 5px;
    }
    &:hover{
      color:var(--color--secondary)
    }
  }
  @media (min-width: 900px) {
    width: 17vw;
  }
`;