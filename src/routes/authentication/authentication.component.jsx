import SignUp from "../../components/sign-up/sign-up.component";
import "./authentication.styles.css";
import SignIn from "../../components/sign-in/sign-in.component";

const Authentication = () => {
  
  return (
    <div className="sign-container">
      <div className="sign-in">
        <SignIn />
      </div>
      <div className="sign-up">
        <SignUp />
      
      </div>
    </div>
  );
};

export default Authentication;
