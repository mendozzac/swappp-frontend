import path from "../src/path/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/media.scss";
import "./App.scss";
import SwimmerForm from "./components/SwimmerForm/SwimmerForm";
import SwimmersPage from "./pages/SwimmersPage/SwimmersPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { userLoginAction } from "./redux/actions/actionCreators";
import jwtDecode from "jwt-decode";
import OneSwimmerPage from "./pages/OneSwimmerPage/OneSwimmerPage";
import ThemeContext from "./contexts/ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE)
    );
    if (token) {
      dispatch(userLoginAction(jwtDecode(token.token)));
    }
  }, [dispatch]);

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <BrowserRouter>
        <Header className={darkMode ? "dark-header" : ""} />
        <div className="out-box">
          <div className="inside-box">
            <Routes>
              <Route path={path.home} element={<HomePage />} />
              <Route path={path.register} element={<SwimmerForm />} />
              <Route path={path.login} element={<LoginForm />} />
              <Route path={path.swimmers} element={<SwimmersPage />} />
              <Route path={path.oneSwimmer} element={<OneSwimmerPage />} />
              <Route path={path.notFound} element={<NotFoundPage />} />
              <Route path={path.logout} element={<LogoutPage />} />
            </Routes>
          </div>
        </div>
        <Footer className={darkMode ? "dark-footer" : ""} />
      </BrowserRouter>
    </div>
  );
}

export default App;
