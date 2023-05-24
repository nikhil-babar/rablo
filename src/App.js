import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Form from "./pages/form/Form";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Navbar />}>
          <Route path="details" element={<Home />} />
          <Route index element={<Form />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
