/** @format */

import { useState } from "react";
import useInput from "../../hooks/user-input";
import axios from "axios";
import useData from "../../hooks/users-data";
const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@") && value.trim() !== "";
const ispass = (value) => value.trim() !== "";
const LogIn = (props) => {
  const { isAdminLog: adminStatus } = useData();
  const [isAdmin, setIsAdmin] = useState(false);
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);
  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);
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

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passIsValid) {
    formIsValid = true;
  }
  const adminShowToggle =
    adminStatus === undefined || adminStatus.admin === false ? (
      <div className='form-check form-switch'>
        <input
          onChange={() => setIsAdmin(true)}
          className='form-check-input'
          type='checkbox'
        />
        <label className='form-check-label text-white fw-bold'>is Admin</label>
      </div>
    ) : (
      ""
    );
  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log(firstNameValue, lastNameValue, emailValue, passValue, isAdmin);
    axios
      .post(`https://react-app-d64b7-default-rtdb.firebaseio.com/users.json`, {
        firstNameValue,
        lastNameValue,
        emailValue,
        passValue,
        isAdmin,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
    resetFirstName();
    resetLastName();
    resetEmail();
    resetpass();
  };

  const firstNameClasses = firstNameHasError
    ? "form-control-my invalid"
    : "form-control-my";
  const lastNameClasses = lastNameHasError
    ? "form-control-my invalid"
    : "form-control-my";
  const emailClasses = emailHasError
    ? "form-control-my invalid"
    : "form-control-my";
  const passClasses = passHasError
    ? "form-control-my invalid"
    : "form-control-my";

  return (
    <div className='d-flex justify-content-center mt-5 pt-5'>
      <form onSubmit={submitHandler}>
        <div className='control-group'>
          <div className={firstNameClasses}>
            <label htmlFor='name'>First Name</label>
            <input
              type='text'
              id='name'
              value={firstNameValue}
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
            />
            {firstNameHasError && (
              <p className='error-text'>Please enter a first name.</p>
            )}
          </div>
          <div className={lastNameClasses}>
            <label htmlFor='name'>Last Name</label>
            <input
              type='text'
              id='name'
              value={lastNameValue}
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
            />
            {lastNameHasError && (
              <p className='error-text'>Please enter a last name.</p>
            )}
          </div>
        </div>
        <div className='control-group'>
          <div className={emailClasses}>
            <label htmlFor='name'>E-Mail Address</label>
            <input
              type='text'
              id='name'
              value={emailValue}
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
            />
            {emailHasError && (
              <p className='error-text'>Please enter a valid email address.</p>
            )}
          </div>
          <div className={passClasses}>
            <label htmlFor='name'>Password</label>
            <input
              type='text'
              id='name'
              value={passValue}
              onChange={passChangeHandler}
              onBlur={passBlurHandler}
            />
            {passHasError && (
              <p className='error-text'>Please enter a password</p>
            )}
          </div>
        </div>
        {adminShowToggle}
        <div className='form-actions'>
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
