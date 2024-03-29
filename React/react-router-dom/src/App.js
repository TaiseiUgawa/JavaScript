import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./route/Router";
import "./styles.css";

export function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Link to="/">Home Page</Link>
      <br />
      <Link to="/page1">Page1</Link>
      <br />
      <Link to="/page2">Page2</Link>  
    </div>

    <Router />
    </BrowserRouter>
  );
}
