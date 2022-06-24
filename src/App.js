import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import SigninPage from "./pages/SigninPage";
import SignUpPage from "./pages/SignUpPage";
import Layout from "./Component/UI/Layout";
import NotFound from "./pages/NotFound";
import UserHome from "./pages/UserHome";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to={"/sign-in"} />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-in" element={<SigninPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/home/:userid" element={<UserHome/>}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
