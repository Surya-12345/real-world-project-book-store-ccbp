import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Books from "./components/Books";
import LoginForm from "./components/LoginForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" Component={LoginForm} />
        <Route exact path="/" Component={Home} />
        <Route exact path="/books" Component={Books} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
