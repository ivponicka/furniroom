import { useState, useContext } from "react";
import "./sign-in.styles.css";
import {
  signInWithGooglePopUp, signInAuthWithUserAndPassword, createUserDocumentFromAuth
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input.component";
import { UserContext } from "../../contexts/user.context";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;
  
    const { setCurrentUser } = useContext(UserContext);
  
    const resetFormFields = () => {
      setFormFields(defaultFormFields);
    };
  
    const signInWithGoogle = async () => {
    await signInWithGooglePopUp();
     
    };
  
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const { user } = await signInAuthWithUserAndPassword(
          email,
          password
        );
        resetFormFields();
        setCurrentUser(user);
      } catch (error) {
        switch (error.code) {
          case 'auth/wrong-password':
            alert('incorrect password for email');
            break;
          case 'auth/user-not-found':
            alert('no user associated with this email');
            break;
          default:
            console.log(error);
        }
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormFields({ ...formFields, [name]: value });
    };
  

  return (
    <div>
      <form onSubmit={handleSubmit} className="sign-in-form">
        <h2>Already have an account? Sign in now!</h2>

        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <br />
        <div className="buttons">
        <button type="submit">Sign in</button>
        <button onClick={signInWithGoogle}>Sign in with google</button></div>
      </form>
    </div>
  );
};

export default SignIn;
