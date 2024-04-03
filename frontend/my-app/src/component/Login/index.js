import { Link } from "react-router-dom";
import "./index.css";
const Login = () => (
  <div className="con">
    <div class="login-container">
      <form>
        <h1>Login</h1>
        <div class="input-box">
          <input class="input" type="text" placeholder="Username" />
          <i class="bx bxs-user bx-flip-horizontal"></i>
        </div>
        <div class="input-box">
          <input class="input" type="password" placeholder="Password" />
          <i class="bx bxs-lock-alt"></i>
        </div>
        <div class="remmember-forgot">
          <label class="remember">
            <input type="checkbox" />
            Remmember me
          </label>
          Forgot Password?
        </div>
        <button type="submit" class="button">
          Login
        </button>
        <Link to="/signup" className="signup-link">
          <p>
            Don't have any account? <span>Register</span>
          </p>
        </Link>
      </form>
    </div>
  </div>
);

export default Login;
