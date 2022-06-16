import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>This is HOME PAGE</p>
      <p>
        Go&nbsp;
        <Link className="App-link" to="/away">
          Away
        </Link>
      </p>
    </header>
  );
}

export default Home;
