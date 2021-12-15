import styled from 'styled-components'

export const ContainerDrops = styled.section`
  width: 80% !important;
  /* border: 1px dashed gray; */
`;
export const DropZones = styled.div `
  border: 1px dashed gray;
  p{
    text-align: center;
    font-size : 14px;
  }
`;
export const ThumbsContainer = styled.aside`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 16px;
  
`;
export const Thumb = styled.div`
  display: inline-flex;
  border-radius: 2px;
  border: 1px solid #eaeaea;
  width: 100px;
  height: 100px;
  padding: 4px;
  div {
    display: flex;
    min-width: 0;
    overflow: hidden;
  }
  img {
    display: block;
    width: auto;
    height: 100%;
  }
`;