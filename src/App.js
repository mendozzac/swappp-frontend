import path from "../src/path/path";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import SwimmerForm from "./components/SwimmerForm/SwimmerForm";
import SwimmersPage from "./pages/SwimmersPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={path.register} element={<SwimmerForm />}></Route>
          <Route path={path.swimmers} element={<SwimmersPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
