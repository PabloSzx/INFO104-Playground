import { useState } from "react";

const A = (props: { setData: (n: number) => void }) => {
  return (
    <button onClick={() => props.setData(Math.round(Math.random() * 100))}>
      Cambiar Valor
    </button>
  );
};

const B = (props: { data: number; setData: (n: number) => void }) => {
  return (
    <div>
      <h1>{props.data}</h1>
      <A setData={props.setData} />
    </div>
  );
};

const C = (props: { data: number }) => {
  return (
    <div>
      <h2>{props.data}</h2>
    </div>
  );
};

const D = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <B data={state} setData={setState} />

      <C data={state} />
    </div>
  );
};

export default D;
