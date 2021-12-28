import React from "react";
import { useState } from "react";
import validator from "validator";

const FormValidation = () => {
  const [emailError, setEmailError] = useState("");

  const Namevalidation = (e) => {
    var letterNumber = /^[a-z0-9]+$/i;

    if ((e.target.value = letterNumber)) {
      // if (/^[a-zA-Z0-9]+$/.test("rrr")) {
      alert("sucess");
      return true;
    } else {
      alert("Please Enter Only alphabet :) ");
      return false;
    }
    // console.log(e.target.value);
  };

  const EamilValidation = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      //   setEmailError("Valid Email :)");
      alert("sucess email !");
    } else {
      alert("Enter valid Email!");
      setEmailError("Enter valid Email!");
    }
  };

  const PasswordValidate = (e) => {
    var pass = e.target.value;
    var reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var test = reg.test(pass);
    if (test) {
      alert("pass");
      //    this.setState({value: pass});
    } else {
      alert(
        "Assert a string has at least one number ,Assert a string has at least one special character."
      );
    }
  };

  const [passwordShown, setPasswordShown] = useState(false);

  // Password toggle handler
  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  return (
    <div>
      <h1> Validation Form </h1>
      <input
        className="my-3"
        type="text"
        placeholder="Name"
        onBlur={Namevalidation}
      />
      <br></br>
      <input type="text" placeholder="Email " onBlur={EamilValidation} />

      <br></br>

      <input
        className="my-3"
        type="password"
        placeholder="Password "
        onBlur={PasswordValidate}
      />
    </div>
  );
};

export default FormValidation;
