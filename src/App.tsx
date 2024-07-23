import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SingleCharacterPage from "./pages/SingleCharacterPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="character" element={<Output />}></Route> */}
          <Route path="character/:id" element={<SingleCharacterPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
