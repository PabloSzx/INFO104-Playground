const objeto = { name: "Hola mundo" };

const A = (props: { objeto: { name: string } }) => {
  return <h1>{props.objeto.name}</h1>;
};

const B = () => {
  return (
    <div>
      <A objeto={objeto} />
    </div>
  );
};

export default B;
