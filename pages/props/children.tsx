import { FC } from "react";

const A: FC = ({ children }) => {
  return <p>{children}</p>;
};

const B = () => {
  return (
    <div>
      <A>Hello world</A>
    </div>
  );
};

export default B;
