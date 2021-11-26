import path from "../src/path/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import SwimmerForm from "./components/SwimmerForm/SwimmerForm";
import SwimmersPage from "./pages/SwimmersPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path={path.register} element={<SwimmerForm />}></Route>
          <Route path={path.swimmers} element={<SwimmersPage />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
