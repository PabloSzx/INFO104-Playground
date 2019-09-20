import { createContext, useContext } from "react";

const Context = createContext("default");

const A = () => {
  const contextData = useContext(Context);
  return <h1>{contextData}</h1>;
};

const B = () => {
  return (
    <div>
      <p>hello world</p>
      <A />
    </div>
  );
};

const C = () => {
  return (
    <div>
      <Context.Provider value="Valor Contexto">
        <B />
      </Context.Provider>
      <br />
      <A />
    </div>
  );
};

export default C;
