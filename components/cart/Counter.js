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

const Counter = () => {
  const { counter, increment, decrement, reset } = useCounter(0);
  return (
    <ContentCounter>
      <span>Cantidad</span>

      <ContentBotones>
        <button onClick={decrement} className="cursor">
          <FontAwesomeIcon
            icon={faMinus}
            size="1x"
            color="#EF1837"
          ></FontAwesomeIcon>
        </button>

        <Cantidad> {counter}</Cantidad>
        <button onClick={increment} className="cursor">
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
