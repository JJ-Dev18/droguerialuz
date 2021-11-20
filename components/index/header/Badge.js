import styled from 'styled-components'

const ContentBadge = styled.div` 
width: 17px;
height: 17px;
border-radius: 50%;
position: absolute;
top: -5px;
right: 0;
color: white;
margin: auto;
background: var(--color--secondary);
display: flex;
justify-content: center;
align-items: center;
text-align: center;
span{
  font-size: 12px;
  margin: 0;
  height: auto;
  text-align: center;
}
`

const Badge = (props) => {
  return (
    <ContentBadge>
      <span> {props.cantidad} </span>
    </ContentBadge>
  );
}
 
export default Badge;
