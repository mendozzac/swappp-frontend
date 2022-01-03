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
import RegisterSwimmerPage from "./pages/RegisterPages/RegisterSwimmerPage";
import SwimmerEditPage from "./pages/SwimmerEditPage/SwimmerEditPage";
import ProtectedRoute from "./ProtectedRoutes/ProtectedRoute";
import OneSessionPage from "./pages/OneSessionPage/OneSessionPage";
import SessionsPage from "./pages/SessionsPage/SessionsPage";

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
              <Route
                path={path.season}
                element={
                  <ProtectedRoute>
                    <SessionsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={path.session}
                element={
                  <ProtectedRoute>
                    <OneSessionPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={path.register}
                element={
                  <ProtectedRoute>
                    <SignUpSwimmerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={path.newSwimmer}
                element={
                  <ProtectedRoute>
                    <RegisterSwimmerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={path.swimmers}
                element={
                  <ProtectedRoute>
                    <SwimmersPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={path.oneSwimmer}
                element={
                  <ProtectedRoute>
                    <OneSwimmerPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path={path.edit}
                element={
                  <ProtectedRoute>
                    <SwimmerEditPage />
                  </ProtectedRoute>
                }
              />
              <Route path={path.login} element={<LoginPage />} />
              <Route
                path={path.logout}
                element={
                  <ProtectedRoute>
                    <LogoutPage />
                  </ProtectedRoute>
                }
              />
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
