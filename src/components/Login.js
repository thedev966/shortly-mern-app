import React, { useState } from "react";
import "../css/Login.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import validateLoginInput from "../validation/validateLogin";
import axios from "../axios";
import Alert from "./Alert";
import { useDispatch } from "react-redux";
import { loginUser } from "../features/userSlice";

const Login = ({ closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const [formErrors, setFormErrors] = useState(null);
  const [isProccessing, setIsProccessing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOpenedAlert, setIsOpenedAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  const showAlert = (msg) => {
    setAlertMessage(msg);
    setIsOpenedAlert(true);
    setTimeout(() => {
      setIsOpenedAlert(false);
    }, 5000);
  };

  const onSubmit = async (data) => {
    const validationStatus = validateLoginInput(data);
    console.log(validationStatus);
    if (validationStatus.isValid) {
      setIsProccessing(true);
      setIsDisabled(true);
      // validation passed
      setFormErrors(null);
      // send api registration call using axios
      const res = await axios.post(
        "/api/auth/login",
        JSON.stringify({
          email: data.email,
          password: data.password,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      if (res.data.loggedIn) {
        setIsLoggedIn(true);
        dispatch(loginUser(res.data.user));
        history.push("/");
      } else if (res.data.error) {
        setIsLoggedIn(false);
        showAlert(res.data.error);
      } else {
        setFormErrors(res.data.errors);
      }
      setIsProccessing(false);
      setIsDisabled(false);
      reset({});
      return;
    } else {
      // show errors
      setFormErrors(validationStatus.errors);
    }
  };

  return (
    <div className="login">
      <h3 className="login__heading">Get Started</h3>
      <form className="login__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="login__formInput"
          placeholder="e.g demo@gmail.com"
          {...register("email")}
          style={formErrors?.email && { border: "1px solid var(--red)" }}
        />
        <span className="loginEmailErr">{formErrors && formErrors?.email}</span>
        <input
          type="password"
          className="login__formInput"
          placeholder="Type your password.."
          {...register("password")}
          style={formErrors?.password && { border: "1px solid var(--red)" }}
        />
        <span className="loginPassErr">
          {formErrors && formErrors?.password}
        </span>
        <button className="login__formBtn" type="submit" disabled={isDisabled}>
          {isProccessing ? "Logging In.." : "Log In"}
        </button>
      </form>
      <CloseIcon onClick={closeModal} style={{ fontSize: "2rem" }} />
      <p className="login__noAccount">
        Don't have an account? Sign Up{" "}
        <Link to="/register">
          <span className="login_goToLogin">here</span>
        </Link>{" "}
        for free.
      </p>
      {isOpenedAlert && (
        <Alert isSuccess={isLoggedIn} alertMessage={alertMessage} />
      )}
    </div>
  );
};

export default Login;
