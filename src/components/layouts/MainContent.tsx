import type { ReactNode } from "react";

type MainProps = {
  children: ReactNode;
};

const MainContent = ({ children }: MainProps) => {
  return (
    <main className="bg-white">
      <div className="mx-auto bg-gradient-to-tr from-pink-300 via-indigo-300 to-purple-300 opacity-30 rounded-full">
        {children}
      </div>
    </main>
  );
};

export default MainContent;
