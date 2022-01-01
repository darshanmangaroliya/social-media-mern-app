import "./login.css";
import{useContext, useRef} from "react";
import{ loginCall} from "../../apiCalls";
import {AuthContext}  from "../../contex/AuthContext";
import{CircularProgress} from "@material-ui/core"



export default function Login() {

  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Sasta Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Sasta facebook.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox"   onSubmit={handleClick}>
            <input placeholder="Email" required type="email"  className="loginInput"  ref={email} />
            <input placeholder="Password" required type="password" className="loginInput"  ref={password} minLength="6" />
            <button className="loginButton"  disabled={isFetching}>
            {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Log In"
              )}
              </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}