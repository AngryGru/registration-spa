import React, { useState, useEffect } from "react";
import "./PersonalInfoForm.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormCheck from "react-bootstrap/esm/FormCheck";
import { setUserInfo } from "../../redux/reducers/userInfoReducer";
import { schema } from "../../common/json-schema";
import Modal from "../Modal";

function PersonalInfoForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [sex, setSex] = useState("");
  const [birthday, setBirthday] = useState("");
  const [ocean, setOcean] = useState("");
  const hobbies: string[] = [];
  const [hobby, setHobby] = useState(hobbies);

  const [firstNameDirty, setFirstNameDirty] = useState(false);
  const [lastNameDirty, setLastNameDirty] = useState(false);
  const [sexDirty, setSexDirty] = useState(false);
  const [birthdayDirty, setBirthdayDirty] = useState(false);
  const [oceanDirty, setOceanDirty] = useState(false);
  const [hobbyDirty, setHobbyDirty] = useState(false);

  const [firstNameError, setFirstNameError] = useState(
    "This field is required"
  );
  const [lastNameError, setLastNameError] = useState("This field is required");
  const [sexError, setSexError] = useState("This field is required");
  const [birthdayError, setBirthdayError] = useState("This field is required");
  const [oceanError, setOceanError] = useState("This field is required");
  const [hobbyError, setHobbyError] = useState("This field is required");

  const [isValid, setIsValid] = useState(false);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    if (
      firstNameError ||
      lastNameError ||
      sexError ||
      birthdayError ||
      oceanError ||
      hobbyError
    ) {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, [
    firstNameError,
    lastNameError,
    sexError,
    birthdayError,
    oceanError,
    hobbyError,
  ]);

  const onNameChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "firstName") {
      setFirstName(value);
      const minLength = +schema.firstName.minLength;
      const maxLength = +schema.firstName.maxLength;
      if (value.length < minLength || value.length > maxLength) {
        setFirstNameError(
          `First name must be from ${minLength} to ${maxLength} characters`
        );
      } else {
        setFirstNameError("");
      }
    }
    if (name === "lastName") {
      setLastName(value);
      const minLength = +schema.lastName.minLength;
      const maxLength = +schema.lastName.maxLength;
      if (value.length < minLength || value.length > maxLength) {
        setLastNameError(
          `Last name must be from ${minLength} to ${maxLength} characters`
        );
      } else {
        setLastNameError("");
      }
    }
  };

  const onChange = (event: any) => {
    const name = event.target.name;
    const value = event.target.value;

    switch (true) {
      case name === "sex":
        setSex(value);
        !value ? setSexError("This field is required") : setSexError("");
        break;
      case name === "birthday":
        setBirthday(value);
        !value
          ? setBirthdayError("This field is required")
          : setBirthdayError("");
        break;
      case name === "ocean":
        setOcean(value);
        !value ? setOceanError("This field is required") : setOceanError("");
        break;
      case name === "hobby":
        setHobby(value);
        !value ? setHobbyError("This field is required") : setHobbyError("");
        break;
    }
  };

  const onBlur = (event: any) => {
    switch (event.target.name) {
      case "firstName":
        setFirstNameDirty(true);
        break;
      case "lastName":
        setLastNameDirty(true);
        break;
      case "sex":
        setSexDirty(true);
        break;
      case "birthday":
        setBirthdayDirty(true);
        break;
      case "ocean":
        setOceanDirty(true);
        break;
      case "hobby":
        setHobbyDirty(true);
        break;
    }
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (event: any) => {
    const form = event.target;
    event.preventDefault();
    dispatch(setUserInfo({ firstName, lastName, sex, birthday, ocean, hobby }));
    form.reset();
    setFirstName("");
    setLastName("");
    setModalActive(true);
  };

  const onBackBtnClick = () => {
    navigate("/signup");
  };

  return (
    <div className="formContainer">
      <div className="signUpFormTitle">Personal Information</div>
      <Form id="personalInfoForm" onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label>First name</Form.Label>
          <div>
            {firstNameDirty && firstNameError && (
              <span style={{ color: "red" }}>{firstNameError}</span>
            )}
          </div>
          <Form.Control
            name="firstName"
            type="text"
            placeholder="Enter first name"
            value={firstName}
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onNameChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <div>
            {lastNameDirty && lastNameError && (
              <span style={{ color: "red" }}>{lastNameError}</span>
            )}
          </div>
          <Form.Control
            name="lastName"
            type="text"
            placeholder="Enter last name"
            value={lastName}
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onNameChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSex">
          <Form.Label>Sex</Form.Label>
          <div>
            {sexDirty && sexError && (
              <span style={{ color: "red" }}>{sexError}</span>
            )}
          </div>
          <div
            id="sex"
            className="mb-3"
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onChange(event)}
          >
            {["male", "female", "other"].map((sex) => {
              return (
                <FormCheck
                  inline
                  name="sex"
                  key={`option-${sex}`}
                  type="radio"
                  id={`inline-radio-${sex}`}
                  label={sex}
                  value={sex}
                />
              );
            })}
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicBirthday">
          <Form.Label>Birthday</Form.Label>
          <div>
            {birthdayDirty && birthdayError && (
              <span style={{ color: "red" }}>{birthdayError}</span>
            )}
          </div>
          <Form.Control
            name="birthday"
            type="date"
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onChange(event)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicOcean">
          <Form.Label>Favorite ocean</Form.Label>
          <div>
            {oceanDirty && oceanError && (
              <span style={{ color: "red" }}>{oceanError}</span>
            )}
          </div>
          <Form.Select
            className="oceanSelect"
            name="ocean"
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onChange(event)}
          >
            <option>Pick your favorite ocean</option>
            {schema.ocean.oneOf.map((ocean) => {
              return (
                <option key={`option-${ocean}`} value={ocean}>
                  {ocean}
                </option>
              );
            })}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicHobby">
          <Form.Label>Hobby</Form.Label>
          <div>
            {hobbyDirty && hobbyError && (
              <span style={{ color: "red" }}>{hobbyError}</span>
            )}
          </div>
          <div
            id="hobby"
            className="mb-3"
            onBlur={(event: any) => onBlur(event)}
            onChange={(event: any) => onChange(event)}
          >
            {schema.hobby.anyOf.map((hobby) => {
              return (
                <FormCheck
                  inline
                  name="hobby"
                  key={`option-${hobby}`}
                  type="checkbox"
                  id={`inline-check-${hobby}`}
                  label={hobby}
                  value={hobby}
                />
              );
            })}
          </div>
        </Form.Group>

        <div className="personalInfoActions">
          <Button
            className="backBtn"
            variant="secondary"
            type="button"
            onClick={onBackBtnClick}
          >
            Back to SignUp
          </Button>

          <Button
            disabled={!isValid}
            className="nextBtn"
            variant="primary"
            type="submit"
          >
            Complete
          </Button>

          <Modal show={modalActive} setShow={setModalActive}></Modal>
        </div>
      </Form>
    </div>
  );
}

export default PersonalInfoForm;
