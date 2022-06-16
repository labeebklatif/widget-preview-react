import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Away() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is AWAY PAGE</p>
      <p>
        Go&nbsp;
        <Link className="App-link" to="/">
          Home
        </Link>
      </p>
    </header>
  );
}

export default Away;
