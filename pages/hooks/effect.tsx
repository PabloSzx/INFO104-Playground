import { useEffect, useState } from "react";

const B = () => {
  useEffect(() => {
    console.log("Componente B montado!");
    return () => {
      console.log("Componente B desmontado!");
    };
  });

  return <div style={{ border: "3px solid green" }}>Componente B</div>;
};

const A = () => {
  const [one, setOne] = useState(1);
  const [two, setTwo] = useState(1);
  const [three, setThree] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (three === 0) {
      setShow(false);
    } else {
      setShow(true);
    }
  }, [three]);

  useEffect(() => {
    setThree(one * two);
  }, [one, two]);

  return (
    <div>
      <h1>{one}</h1>
      <h1>{two}</h1>
      <br />
      <h1>{three}</h1>

      <button
        onClick={() => {
          setOne(Math.round(Math.random() * 5));
        }}
      >
        Cambiar valor del primero
      </button>
      <button
        onClick={() => {
          setTwo(Math.round(Math.random() * 5));
        }}
      >
        Cambiar valor del segundo
      </button>
      <button onClick={() => setShow(!show)}>
        {show ? "Esconder" : "Mostrar"}
      </button>

      {show && <B />}
    </div>
  );
};

export default A;
