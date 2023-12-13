import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import BookList from "./components/BookList"
import BookDetails from "./components/BookDetails"
import Cart from "./components/Cart"
import Checkout from"./components/Checkout"
import NotFound from "./components/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/books" Component={BookList} />
        <Route exact path="/books/:id" Component={BookDetails} />
        <Route exact path="/cart" Component={Cart} />
        <Route exact path="/checkout" Component={Checkout} />
        <Route exact path="/not-found" Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
