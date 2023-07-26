import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Menu from "./component/Menu";
import Home from "./component/Home";
import Pnf from "./component/Pnf";
import Ex1 from "./component/Ex1";
import Ex2 from "./component/Ex2";
import Ex3 from "./component/Ex3";
import Ex4 from "./component/Ex4";

function App(props) {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path={`/`} element={<Home />} /> {/* indexpath - home page */}
        <Route path={`/ex1`} element={<Ex1 />} />
        <Route path={`/ex2`} element={<Ex2 />} />
        <Route path={`/ex3`} element={<Ex3 />} />
        <Route path={`/ex4`} element={<Ex4 />} />
        <Route path={`/*`} element={<Pnf />} /> {/* default path (/*) - page not found */}
      </Routes>
    </BrowserRouter>


  )

}
export default App