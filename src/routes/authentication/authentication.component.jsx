import "./authentication.styles.scss";

import SingInForm from "../../components/sing-in-form/sing-in-form.component";
import SingUpForm from "../../components/sing-up-form/sing-up-form.component";

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SingInForm />
      <SingUpForm />
    </div>
  );
};

export default Authentication;
