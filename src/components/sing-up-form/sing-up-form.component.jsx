import { useState } from "react";

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import FormInput from "../form-input/form-input.component";
import "./sing-up-form.styles.scss";

import ButtonStyles from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  console.log(formFields);

  const reasetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
    if (password !== confirmPassword) {
      const error = console.error("Not match");
      return error;
    }
    if (password.includes(" ")) {
      const error = console.error("Have white spaces");
      return error;
    }
    if (password.length <= 5) {
      const error = console.error(
        "password too weak must contain at least 6 characters"
      );
      return error;
    }
    if (!email.includes("@") && !email.includes(".")) {
      const error = console.error("you must introduce a real email");
      return error;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      reasetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      }
      console.error(error);
    }
  };
  return (
    <div className="sing-up-container">
      <h2>Don't have an accont?</h2>
      <span>Sing Up with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <FormInput
          label="Display Name"
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
          required
        ></FormInput>

        <FormInput
          label="Email"
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
          required
        ></FormInput>

        <FormInput
          label="Password"
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
          required
        ></FormInput>

        <FormInput
          label="Confirm Password"
          type="password"
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          required
        ></FormInput>
        <ButtonStyles buttonType="" type="submit">
          Sing Up
        </ButtonStyles>
      </form>
    </div>
  );
};

export default SingInForm;
