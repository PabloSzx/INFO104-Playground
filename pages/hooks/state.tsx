import { useState } from "react";

const A = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <h1>{Math.round(state)}</h1>
      <button onClick={() => setState(Math.random() * 100)}>
        Cambiar valor
      </button>
    </div>
  );
};

export default A;
