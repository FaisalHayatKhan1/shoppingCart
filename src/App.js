/** @format */

import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { AuthContextData } from "./Context/Auth-Context";
import SigninPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./Component/UI/Layout";
import NotFound from "./pages/NotFound";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
function App() {
  return (
    <AuthContextData>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to={"/sign-in"} />} />
          <Route path='/sign-in' element={<SigninPage />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/home/:userid' element={<UserHome />}></Route>
          <Route path='/admin' element={<AdminHome />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Layout>
    </AuthContextData>
  );
}

export default App;
