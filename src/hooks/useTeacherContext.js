import { useContext } from "react";
import TeacherContext from "../context/TeacherContext";

const useTeacherContext = () => useContext(TeacherContext);

export default useTeacherContext;
