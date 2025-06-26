import { createContext, useContext, type ReactNode } from "react";
import type { Course, School } from "../mock/types";
import { courseList, schoolList } from "../mock/mockdata";

type SchoolContextType = {
  schools: School[];
  courses: Course[];
};

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const useSchoolContext = () => {
  const context = useContext(SchoolContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
};

export const SchoolProvider = ({ children }: { children: ReactNode }) => {
  const schools: School[] = schoolList;
  const courses: Course[] = courseList;

  const value = { schools, courses };

  return (
    <SchoolContext.Provider value={value}>{children}</SchoolContext.Provider>
  );
};
