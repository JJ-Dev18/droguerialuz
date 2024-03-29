import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useCounter } from "../../hooks/useCounter";

const ContentCounter = styled.div`
  width: 100px;
  /* height: 50px; */
`;
const ContentBotones = styled.div`
  display: flex;
`;
const Cantidad = styled.div`
  border-radius: 35%;
  background-color: var(--color--button);
  color: white;
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Counter = (props) => {

  const { counter, increment, decrement, reset } = useCounter(props.cantidad);
  
  return (
    <ContentCounter>
      <span>Cantidad</span>

      <ContentBotones>
        <button  disabled={(counter == 1)} onClick={()=> {
           props.decrement()
            decrement()
        }} className="cursor">
          <FontAwesomeIcon
            icon={faMinus}
            size="1x"
            color="#EF1837"
          ></FontAwesomeIcon>
        </button>

        <Cantidad> {counter}</Cantidad>
        <button 
        disabled={(counter == props.stock)}
        onClick={()=> {
         props.add()
         increment()
        }} className="cursor">
          <FontAwesomeIcon
            icon={faPlus}
            size="1x"
            color="#EF1837"
          ></FontAwesomeIcon>
        </button>
      </ContentBotones>
    </ContentCounter>
  );
};

export default Counter;
