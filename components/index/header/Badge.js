import styled from 'styled-components'

const ContentBadge = styled.div` 
width: 15px;
height: 15px;
border-radius: 50%;
position: absolute;
top: -5px;
right: 0;
color: white;

background: var(--color--secondary);
`

const Badge = () => {
  return ( 
    <ContentBadge>
      3
    </ContentBadge>
   );
}
 
export default Badge;
