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

  const removeLast = () => {
    const newNumber = expression.slice(0, -1);
    setExpression(newNumber);
  };

  return (
    <>
      <Global />
      <Main>
        <Display>{result || expression}</Display>
        <Wrapper>
          <button className="darkgrey" onClick={clear}>
            AC
          </button>
          <button
            style={{ fontSize: 36 }}
            className="darkgrey"
            onClick={removeLast}
          >
            ⌫
          </button>
          <button className="darkgrey">%</button>
          <button className="colored" onClick={() => addValue("/")}>
            ÷
          </button>
          <button className="lightgrey" onClick={() => addValue(7)}>
            7
          </button>
          <button className="lightgrey" onClick={() => addValue(8)}>
            8
          </button>
          <button className="lightgrey" onClick={() => addValue(9)}>
            9
          </button>
          <button className="colored" onClick={() => addValue("*")}>
            ×
          </button>
          <button className="lightgrey" onClick={() => addValue(4)}>
            4
          </button>
          <button className="lightgrey" onClick={() => addValue(5)}>
            5
          </button>
          <button className="lightgrey" onClick={() => addValue(6)}>
            6
          </button>
          <button className="colored" onClick={() => addValue("-")}>
            -
          </button>
          <button className="lightgrey" onClick={() => addValue(1)}>
            1
          </button>
          <button className="lightgrey" onClick={() => addValue(2)}>
            2
          </button>
          <button className="lightgrey" onClick={() => addValue(3)}>
            3
          </button>
          <button className="colored" onClick={() => addValue("+")}>
            +
          </button>
          <button className="lightgrey">#</button>
          <button className="lightgrey" onClick={() => addValue(0)}>
            0
          </button>
          <button className="lightgrey" onClick={() => addValue(".")}>
            .
          </button>
          <button className="colored" onClick={getResult}>
            =
          </button>
        </Wrapper>
      </Main>
    </>
  );
}

export default App;
