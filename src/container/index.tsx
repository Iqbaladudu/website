import * as React from "react";

type Props = {
  children: React.ReactNode | React.ReactNode[];
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <section className="max-w-[90%] md:max-w-[60%] mx-auto prose">
      {children}
    </section>
  );
};

export default Container;
