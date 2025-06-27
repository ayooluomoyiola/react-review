import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Homepage from "./components/basic/0/Homepage";
import StudentProfileCard from "./components/basic/1/StudentProfileCard";
import Homework from "./components/basic/2/Assignment";
import LoginForm from "./components/basic/3/LoginForm";
import CartSummary from "./components/basic/4/CartSummary";
import { ProductProvider } from "./components/basic/4/ProductContext";
import ProductList from "./components/basic/4/ProductList";
import Courses from "./components/basic/5/Courses";
import ProductPage from "./components/advanced/0/ProductPage";
import { ProductAPIProvider } from "./components/advanced/0/ProductContext";
import StudentDashboard from "./components/advanced/1/StudentDashboard";
import ProductMain from "./components/advanced/2/ProductMain";
import ProductSecondMain from "./components/advanced/2.5/ProductMain";
import Landing from "./components/advanced/3/Public/Landing";
import Login from "./components/advanced/3/Public/Login";
import Dashboard from "./components/advanced/3/Public/Dashboard";
import Users from "./components/advanced/3/Protected/Users";
import Settings from "./components/advanced/3/Protected/Settings";
import { SchoolProvider } from "./components/advanced/3/Public/SchoolContext";
import CoursePage from "./components/advanced/3/Public/CoursePage";
import CoursesPage from "./components/advanced/3/Public/CoursesPage";
import Assignments from "./components/advanced/3/Public/Assigments";
import SchoolLayout from "./components/advanced/3/Public/SchoolLayout";
import ProtectedRoute from "./components/advanced/3/Protected/ProtectedRoute";

function App() {
  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <ProductAPIProvider>
            <SchoolProvider>
              <Routes>
                <Route path="" element={<Home />} />
                <Route path="/homepage" element={<Homepage />} />
                <Route
                  path="/student-profile"
                  element={<StudentProfileCard />}
                />
                <Route path="/login-form" element={<LoginForm />} />
                <Route path="/assignment" element={<Homework />} />
                <Route path="/product-list" element={<ProductList />} />
                <Route path="/cart" element={<CartSummary />} />
                <Route path="/courses" element={<Courses />} />
                <Route path="/product-page" element={<ProductPage />} />
                <Route
                  path="/student-dashboard"
                  element={<StudentDashboard />}
                />
                <Route path="/product-main" element={<ProductMain />} />
                <Route
                  path="/product-second-main"
                  element={<ProductSecondMain />}
                />

                <Route path="/schools" element={<Landing />} />
                <Route path="/schools/login" element={<Login />} />

                <Route path="/schools/:schoolId" element={<SchoolLayout />}>
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="courses" element={<CoursesPage />} />
                  <Route path="courses/:courseId" element={<CoursePage />} />
                  <Route
                    path="courses/:courseId/assignments"
                    element={<Assignments />}
                  />
                  <Route
                    path="users"
                    element={
                      <ProtectedRoute requiredRole="admin">
                        <Users />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="settings"
                    element={
                      <ProtectedRoute requiredRole="admin">
                        <Settings />
                      </ProtectedRoute>
                    }
                  />
                </Route>
              </Routes>
            </SchoolProvider>
          </ProductAPIProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
