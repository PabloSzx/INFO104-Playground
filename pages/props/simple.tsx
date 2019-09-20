const A = (props: { name: string }) => {
  return <h1>{props.name}</h1>;
};

const B = () => {
  return (
    <div>
      <A name="Hello world" />
    </div>
  );
};

export default B;
