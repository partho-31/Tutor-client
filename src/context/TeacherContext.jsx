import { createContext } from "react";
import useTeachers from "../hooks/useTeachers";

const TeacherContext = createContext();

export const TeacherProvider = ({ children }) => {
  const allData = useTeachers();
  return (
    <TeacherContext.Provider value={allData}>
      {children}
    </TeacherContext.Provider>
  );
};

export default TeacherContext;
