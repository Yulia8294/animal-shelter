import { FC, ReactNode } from "react";

interface ComponentProps {
  children: ReactNode;
  classOverrides?: string;
}

const Section: FC<ComponentProps> = ({ children, classOverrides }) => {
  return (
    <section
      className={` min-h-80 flex flex-col justify-center px-10 py-20 bg-no-repeat bg-cover ${classOverrides ?? ""}`}
    >
      {children}
    </section>
  );
};

export default Section;
