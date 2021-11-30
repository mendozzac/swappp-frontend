import path from "../src/path/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/media.scss";
import "./App.scss";
import SwimmerForm from "./components/SwimmerForm/SwimmerForm";
import SwimmersPage from "./pages/SwimmersPage/SwimmersPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import OneSwimmerPage from "./pages/OneSwimmerPage/OneSwimmerPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginForm from "./components/LoginForm/LoginForm";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="out-box">
          <div className="inside-box">
            <Routes>
              <Route path={path.home} element={<HomePage />}></Route>
              <Route path={path.register} element={<SwimmerForm />}></Route>
              <Route path={path.login} element={<LoginForm />}></Route>
              <Route path={path.swimmers} element={<SwimmersPage />}></Route>
              <Route path={path.oneSwimmer} element={<OneSwimmerPage />} />
              <Route path={path.notFound} element={<NotFoundPage />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
