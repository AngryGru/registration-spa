import React, { useState, useEffect } from "react";
import "./SignUpInfoForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signupUser } from "../../redux/reducers/signupReducer";
import { schema } from "../../common/json-schema";

function SignUpInfoForm() {
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  const [phoneDirty, setPhoneDirty] = useState(false);
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [repeatedPasswordDirty, setRepeatedPasswordDirty] = useState(false);

  const [phoneError, setPhoneError] = useState("This field is required");
  const [emailError, setEmailError] = useState("This field is required");
  const [passwordError, setPasswordError] = useState("This field is required");
  const [repeatedPasswordError, setRepeatedPasswordError] = useState(
    "This field is required"
  );

  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (phoneError || emailError || passwordError || repeatedPasswordError) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [phoneError, emailError, passwordError, repeatedPasswordError]);

  const onPhoneChange = (event: any) => {
    const value = event.target.value;
    setPhone(value);
    const regExp = new RegExp(schema.mobilePhone.regExp);
    if (!regExp.test(String(value))) {
      setPhoneError("Required format +375991234567");
    } else {
      setPhoneError("");
    }
  };

  const onEmailChange = (event: any) => {
    const value = event.target.value;
    setEmail(value);
    const regExp = new RegExp(schema.email.regExp);
    if (!regExp.test(String(value))) {
      setEmailError("Invalid email adress");
    } else {
      setEmailError("");
    }
  };

  const onPaswordChange = (event: any) => {
    const value = event.target.value;
    setPassword(value);
    const minLength = +schema.password.minLength;
    const maxLength = +schema.password.maxLength;
    if (value.length < minLength || value.length > maxLength) {
      setPasswordError(
        `Password must be from ${minLength} to ${maxLength} characters`
      );
    } else {
      setPasswordError("");
    }
  };

  const confirmPasswordHandle = (event: any) => {
    const value = event.target.value;
    setRepeatedPassword(value);
    if (repeatedPassword && value !== password) {
      setRepeatedPasswordError("Passwords don't match");
    } else {
      setRepeatedPasswordError("");
    }
  };

  const onBlur = (event: any) => {
    switch (event.target.name) {
      case "phone":
        setPhoneDirty(true);
        break;
      case "email":
        setEmailDirty(true);
        break;
      case "password":
        setPasswordDirty(true);
        break;
      case "repeatedPassword":
        setRepeatedPasswordDirty(true);
        break;
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    const form = event.target;
    event.preventDefault();
    dispatch(signupUser({ phone, email, password, repeatedPassword }));
    form.reset();
    setEmail("");
    setPhone("");
    navigate("/personal");
  };

  return (
    <div className="formContainer">
      <div className="signUpFormTitle">Sign Up</div>
      <Form id="signupForm" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicPhone">
          <Form.Label>Mobile phone</Form.Label>
          <div>
            {phoneDirty && phoneError && (
              <span style={{ color: "red" }}>{phoneError}</span>
            )}
          </div>
          <Form.Control
            name="phone"
            type="tel"
            placeholder="Enter phone number"
            value={phone}
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onPhoneChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <div>
            {emailDirty && emailError && (
              <span style={{ color: "red" }}>{emailError}</span>
            )}
          </div>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            value={email}
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onEmailChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <div>
            {passwordDirty && passwordError && (
              <span style={{ color: "red" }}>{passwordError}</span>
            )}
          </div>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onPaswordChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Repeat password</Form.Label>
          <div>
            {repeatedPasswordDirty && repeatedPasswordError && (
              <span style={{ color: "red" }}>{repeatedPasswordError}</span>
            )}
          </div>
          <Form.Control
            name="repeatedPassword"
            type="password"
            placeholder="Repeat password"
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => confirmPasswordHandle(event)}
          />
        </Form.Group>

        <Button
          disabled={!isValid}
          className="nextBtn"
          variant="primary"
          type="submit"
        >
          Next
        </Button>
      </Form>
    </div>
  );
}

export default SignUpInfoForm;
