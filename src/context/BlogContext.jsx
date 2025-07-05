import { createContext } from "react";
import useBlogs from "../hooks/useBlogs";


const BlogContext = createContext();

export const BlogProvider = ({ children }) => {
  const allData = useBlogs();
  return (
    <BlogContext.Provider value={allData}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;