import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style/index.css";
import App from "./pages/App.jsx";
import Home from "./pages/Home.jsx";
import Task1 from "./pages/Task1.jsx";
import Task2 from "./pages/Task2.jsx";
import Task3 from "./pages/Task3.jsx";
import Task4 from "./pages/Task4.jsx";
import Task5 from "./pages/Task5.jsx";
import Task6 from "./pages/Task6.jsx";
import Task7 from "./pages/Task7.jsx";
import Task8 from "./pages/Task8.jsx";
import Task9 from "./pages/Task9.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" Component={Home} />
      <Route path="/Task1" Component={Task1} />
      <Route path="/Task2" Component={Task2} />
      <Route path="/Task3" Component={Task3} />
      <Route path="/Task4" Component={Task4} />
      <Route path="/Task5" Component={Task5} />
      <Route path="/Task6" Component={Task6} />
      <Route path="/Task7" Component={Task7} />
      <Route path="/Task8" Component={Task8} />
      <Route path="/Task9" Component={Task9} />
      <Route path="/app" Component={App} />
    </Routes>
  </BrowserRouter>
  // </React.StrictMode>
);
