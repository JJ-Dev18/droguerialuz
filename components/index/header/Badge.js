import styled from 'styled-components'

const ContentBadge = styled.div` 
width: 15px;
height: 15px;
border-radius: 50%;
position: absolute;
top: -5px;
right: 0;
color: white;
display: flex;
justify-content: center;
align-items: center;
background: var(--color--secondary);
`

const Badge = (props) => {
  return ( 
    <ContentBadge>
      {props.cantidad}
    </ContentBadge>
   );
}
 
export default Badge;
