import { createContext, useContext, useState } from "react";

const Context = createContext({
  set: (_value: number) => {},
  value: 0,
});

const A = () => {
  const { set } = useContext(Context);

  return (
    <button onClick={() => set(Math.round(Math.random() * 100))}>
      Cambiar Valor
    </button>
  );
};

const B = () => {
  const { value } = useContext(Context);

  return (
    <div>
      <h1>{value}</h1>
      <A />
    </div>
  );
};

const C = () => {
  const { value } = useContext(Context);

  return (
    <div>
      <h2>{value}</h2>
    </div>
  );
};

const D = () => {
  const [state, setState] = useState(0);

  return (
    <Context.Provider value={{ value: state, set: setState }}>
      <B />
      <C />
    </Context.Provider>
  );
};

export default D;
