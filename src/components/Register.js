import React, { useState } from "react";
import "../css/Register.css";
import CloseIcon from "@material-ui/icons/Close";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import validateRegisterInput from "../validation/validateRegister";
import axios from "axios";
import Alert from "./Alert";

const Register = ({ closeModal }) => {
  const { register, handleSubmit, reset } = useForm();
  const [formErrors, setFormErrors] = useState(null);
  const [isOpenedAlert, setIsOpenedAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [isRegistered, setIsRegistered] = useState(false);
  const [isProccessing, setIsProccessing] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const showAlert = (msg) => {
    setAlertMessage(msg);
    setIsOpenedAlert(true);
    setTimeout(() => {
      setIsOpenedAlert(false);
    }, 5000);
  };

  const onSubmit = async (data) => {
    const validationStatus = validateRegisterInput(data);
    console.log(validationStatus);
    if (validationStatus.isValid) {
      setIsProccessing(true);
      setIsDisabled(true);
      // validation passed
      setFormErrors(null);
      // send api registration call using axios
      const res = await axios.post(
        process.env.REACT_APP_API_URI + "/api/auth/register",
        JSON.stringify({
          full_name: data.full_name,
          email: data.email,
          pass1: data.pass1,
          pass2: data.pass2,
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(res.data);
      if (res.data.success) {
        setIsRegistered(true);
        showAlert(res.data.success);
      } else if (res.data.error) {
        setIsRegistered(false);
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
    <div className="register">
      <h3 className="register__heading">Register Now</h3>
      <form className="register__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          className="register__formInput"
          placeholder="Your Full Name"
          {...register("full_name")}
          style={formErrors?.full_name && { border: "1px solid var(--red)" }}
        />
        <span className="registerNameErr">
          {formErrors && formErrors?.full_name}
        </span>
        <input
          type="text"
          className="register__formInput"
          placeholder="Your Email"
          {...register("email")}
          style={formErrors?.email && { border: "1px solid var(--red)" }}
        />
        <span className="registerEmailErr">
          {formErrors && formErrors?.email}
        </span>
        <input
          type="password"
          className="register__formInput"
          placeholder="Type your password.."
          {...register("pass1")}
          style={formErrors?.password && { border: "1px solid var(--red)" }}
        />
        <span className="registerPassErr">
          {formErrors && formErrors?.password}
        </span>
        <input
          type="password"
          className="register__formInput"
          placeholder="Re-type your password.."
          {...register("pass2")}
          style={formErrors?.password2 && { border: "1px solid var(--red)" }}
        />
        <span className="registerPass2Err">
          {formErrors && formErrors?.password2}
        </span>
        <button
          className="register__formBtn"
          type="submit"
          disabled={isDisabled}
        >
          {isProccessing ? "Processing.." : "Sign Up"}
        </button>
      </form>
      <CloseIcon onClick={closeModal} style={{ fontSize: "2rem" }} />
      <p className="register__noAccount">
        Already have an account? Log In{" "}
        <Link to="/login">
          <span className="register_goToLogin">here.</span>
        </Link>
      </p>
      {isOpenedAlert && (
        <Alert isSuccess={isRegistered} alertMessage={alertMessage} />
      )}
    </div>
  );
};

export default Register;
