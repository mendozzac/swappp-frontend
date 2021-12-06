import path from "../src/path/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/media.scss";
import "./App.scss";
import SwimmersPage from "./pages/SwimmersPage/SwimmersPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import LogoutPage from "./pages/LogoutPage/LogoutPage";
import { useDispatch } from "react-redux";
import { useContext, useEffect } from "react";
import { userLoginAction } from "./redux/actions/actionCreators";
import jwtDecode from "jwt-decode";
import OneSwimmerPage from "./pages/OneSwimmerPage/OneSwimmerPage";
import ThemeContext from "./contexts/ThemeContext";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignUpSwimmerPage from "./pages/RegisterPages/SignUpSwimmerPage";
import LoginSwimmerPage from "./pages/RegisterPages/LoginSwimmerPage";
import RegisterSwimmerPage from "./pages/RegisterPages/RegisterSwimmerPage";
import SwimmerEditPage from "./pages/SwimmerEditPage/SwimmerEditPage";
import SeasonPage from "./pages/SeasonPage/SeasonPage";

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
              <Route path={path.season} element={<SeasonPage />} />
              <Route path={path.register} element={<SignUpSwimmerPage />} />
              <Route path={path.registerUser} element={<LoginSwimmerPage />} />
              <Route path={path.newSwimmer} element={<RegisterSwimmerPage />} />
              <Route path={path.swimmers} element={<SwimmersPage />} />
              <Route path={path.oneSwimmer} element={<OneSwimmerPage />} />
              <Route path={path.edit} element={<SwimmerEditPage />} />
              <Route path={path.login} element={<LoginPage />} />
              <Route path={path.logout} element={<LogoutPage />} />
              <Route path={path.notFound} element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
        <Footer className={darkMode ? "dark-footer" : ""} />
      </BrowserRouter>
    </div>
  );
}

export default App;
