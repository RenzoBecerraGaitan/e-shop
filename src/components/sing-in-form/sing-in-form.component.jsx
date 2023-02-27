import { useState } from "react";

import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase.utils";

import ButtonStyles from "../button/button.component";

import "./sing-in-form.styles.scss";

import FormInput from "../form-input/form-input.component";
import { async } from "@firebase/util";

const logGoogleUser = async () => {
  const { user } = await signInWithGooglePopup();
  await createUserDocumentFromAuth(user);
};

const defaultFormFields = {
  email: "",
  password: "",
};

const SingInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);

  const { email, password } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formFields);

    try {
      const respose = await signInAuthUserWithEmailAndPassword(email, password);
      console.log(respose);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("User donot exist");
          break;
        default:
          console.error(error);
      }
    }
  };

  return (
    <div className="sing-in-container">
      <h2>Already have an account</h2>
      <span>Sing in with your email and password</span>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
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
        <div className="buttons-container">
          <ButtonStyles buttonType="" type="submit">
            Sing-In
          </ButtonStyles>
          <ButtonStyles
            buttonType="google"
            type="button"
            onClick={logGoogleUser}
          >
            Google Sing-In
          </ButtonStyles>
        </div>
      </form>
    </div>
  );
};

export default SingInForm;
