import useInput from "../../hooks/user-input";
import { useDispatch } from "react-redux/es/exports";
import { useNavigate, Link } from "react-router-dom";
import useData from "../../hooks/users-data";
import "./Auth.css";
import { dispatchAction } from "../../store/Button";
import { useState } from "react";

const isEmail = (value) => value.includes("@") && value.trim() !== "";
const ispass = (value) => value.trim() !== "";
const SignUp = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { allUsers: usersAll } = useData();
  const [isUser, setIsUser] = useState(false);
  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);
  const {
    value: passValue,
    isValid: passIsValid,
    hasError: passHasError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
    reset: resetpass,
  } = useInput(ispass);

  let formIsValid = false;

  if (emailIsValid && passIsValid) {
    formIsValid = true;
  }
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    const values = usersAll.find((data) => data.email === emailValue);
    if (!values) {
      setIsUser(true)
      return; 
    }
    localStorage.setItem("users", emailValue);
    dispatch(
      dispatchAction.btnToogle({ email: emailValue, password: passValue })
    );
    navigate(`/home/${values.id}`);
    resetEmail();
    resetpass();
  };
  const emailClasses = emailHasError
    ? "form-control-my invalid"
    : "form-control-my";
  const passClasses = passHasError
    ? "form-control-my invalid"
    : "form-control-my";

  return (
    <div className="d-flex justify-content-center mt-5 pt-5">
      <form onSubmit={submitHandler} className="formSingUp">
      {isUser && <label className="text-danger">user does not exit</label>}
        <div className={emailClasses}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="name"
            value={emailValue}
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address.</p>
          )}
        </div>
        <div className={passClasses}>
          <label htmlFor="name">Password</label>
          <input
            type="text"
            id="name"
            value={passValue}
            onChange={passChangeHandler}
            onBlur={passBlurHandler}
          />
          {passHasError && (
            <p className="error-text">Please enter a password</p>
          )}
        </div>

        <div className="form-actions text-center">
          <button disabled={!formIsValid}>Submit</button>
        </div>
        <Link to="/sign-up">
          <div className="text-center my-2">Create a new Account</div>
        </Link>
      </form>
    </div>
  );
};

export default SignUp;
