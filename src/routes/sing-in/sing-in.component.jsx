import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase.utils";

import SingUpForm from "../../components/sing-up-form/sing-up-form.component";

const Singin = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sing-in Page</h1>
      <button onClick={logGoogleUser}>Sing-In with Google Popup</button>
      <SingUpForm />
    </div>
  );
};

export default Singin;
