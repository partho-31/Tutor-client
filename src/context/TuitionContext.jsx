import { createContext } from "react";
import useTuitions from "../hooks/useTuitions";

const TuitionContext = createContext();

export const TuitionProvider = ({ children }) => {
  const allData = useTuitions();
  return (
    <TuitionContext.Provider value={allData}>
      {children}
    </TuitionContext.Provider>
  );
};

export default TuitionContext;
