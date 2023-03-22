import "./styles/app.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";

import { Toaster } from "react-hot-toast";
import Cart from "./components/Cart";
import Erorr from "./components/Erorr";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Erorr />} />
        </Routes>
        <Toaster />
      </BrowserRouter> 
    </div>
  );
}

export default App;
