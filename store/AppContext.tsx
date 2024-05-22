import React, { FC, createContext, useRef, useState } from "react";

interface Props {
  children?: any;
  year?: string;
  setYear?: any;
  make?: string;
  setMake?: any;
  model?: string;
  setModel?: any;
}
const AppContext = createContext<Props>({});
const ContextProvider: FC<Props> = ({ children }) => {
  const [year, setYear] = useState<string>("");
  const [make, setMake] = useState<string>("");
  const [model, setModel] = useState<string>("");

  return (
    <AppContext.Provider
      value={{
        year,
        setYear,
        make,
        setMake,
        model,
        setModel,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, ContextProvider };
