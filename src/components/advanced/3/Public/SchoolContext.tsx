import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { Account, Course, School } from "../mock/types";
import { courseList, loginDetails, schoolList } from "../mock/mockdata";

type SchoolContextType = {
  schools: School[];
  courses: Course[];
  handleLogin: () =>
    | { schId: number; role: Account["role"] }
    | "Invalid email or password";
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  currentAccount: Account | null;
};

const SchoolContext = createContext<SchoolContextType | undefined>(undefined);

export const useSchoolContext = () => {
  const context = useContext(SchoolContext);

  if (!context) {
    throw new Error("useSchoolContext must be used within a SchoolProvider");
  }
  return context;
};

export const SchoolProvider = ({ children }: { children: ReactNode }) => {
  const schools: School[] = schoolList;
  const courses: Course[] = courseList;
  const accounts: Account[] = loginDetails;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentAccount, setCurrentAccount] = useState<Account | null>(null);

  const handleLogin = () => {
    const acc = accounts.find(
      (acc) =>
        acc.email.toLowerCase() === email.toLowerCase() &&
        acc.password === password
    );
    if (acc) {
      setCurrentAccount(acc);
      console.log("Logged in:", acc);
      return { schId: acc.schId, role: acc.role };
    } else {
      return "Invalid email or password";
    }
  };

  const value = useMemo(
    () => ({
      schools,
      courses,
      handleLogin,
      email,
      setEmail,
      password,
      setPassword,
      currentAccount,
    }),
    [schools, courses, email, password, currentAccount]
  );

  return (
    <SchoolContext.Provider value={value}>{children}</SchoolContext.Provider>
  );
};
