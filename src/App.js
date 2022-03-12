import { useState } from "react";
import Global from "./global";
import { Display, Main, Wrapper } from "./styles";

function App() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);

  const clear = () => {
    setExpression("");
    setResult(null);
  };

  const addValue = (value) => {
    setExpression(expression + value);
    setResult(null);
  };

  const getResult = () => {
    setExpression("");
    setResult(eval(expression));
  };

  return (
    <>
      <Global />
      <Main>
        <Display>{result || expression}</Display>
        <Wrapper>
          <button onClick={clear}>AC</button>
          <button>X</button>
          <button>%</button>
          <button onClick={() => addValue("/")}>/</button>
          <button onClick={() => addValue(7)}>7</button>
          <button onClick={() => addValue(8)}>8</button>
          <button onClick={() => addValue(9)}>9</button>
          <button onClick={() => addValue("*")}>*</button>
          <button onClick={() => addValue(4)}>4</button>
          <button onClick={() => addValue(5)}>5</button>
          <button onClick={() => addValue(6)}>6</button>
          <button onClick={() => addValue("-")}>-</button>
          <button onClick={() => addValue(1)}>1</button>
          <button onClick={() => addValue(2)}>2</button>
          <button onClick={() => addValue(3)}>3</button>
          <button onClick={() => addValue("+")}>+</button>
          <button>#</button>
          <button onClick={() => addValue(0)}>0</button>
          <button>,</button>
          <button onClick={getResult}>=</button>
        </Wrapper>
      </Main>
    </>
  );
}

export default App;
