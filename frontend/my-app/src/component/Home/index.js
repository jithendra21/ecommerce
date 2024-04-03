import { Link } from "react-router-dom";
import "./index.css";
import Navbar from "../Navbar";
const Home = () => (
  <>
    <Navbar />
    <div className="home-container">
      <div className="home-content">
        <h1>Fashion is not a word. It's the way you live.</h1>
        <p>
          Fashion is part of the daily air and it does not quite help that it
          changes all the time. Clothes have always been a marker of the era and
          we are in a revolution. Your fashion makes you been seen and heard
          that way you are. So, celebrate the seasons new and exciting fashion
          in your own way.
        </p>
        <Link to="/product" className="button-link">
          <button>Shop now</button>
        </Link>
      </div>
      <img
        className="home-image"
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="home"
      />
    </div>
  </>
);

export default Home;
