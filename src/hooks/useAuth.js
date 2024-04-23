import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, gProvider, firestore } from "../firebase";

import { TOKEN } from "../config/constant";

export default function useAuth() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [authErr, setAuthErr] = useState("");
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const navigate = useNavigate();

  const handleReset = (type) => {
    type === "google" ? setGoogleLoading(true) : setLoading(true);
    setAuthErr("");
    setErrors({});
  };

  const handleLocalStorage = (type, id) => {
    switch (type) {
      case "set":
        setLoading(false);
        localStorage.setItem(TOKEN, id);
        navigate(`/orders`);
        break;
      case "get":
        break;
      case "clear":
        console.log("signout successful");
        localStorage.removeItem("user_id");
        navigate("/");
        break;

      default:
        break;
    }
  };

  const handleError = (type, error) => {
    setLoading(false);
    setGoogleLoading(false);
    console.log(`${type} Error:`, error);
    setAuthErr(error);
  };

  const signUpUser = async (name, email, password) => {
    handleReset();

    createUserWithEmailAndPassword(auth, email, password)
      .then(async (uc) => {
        await setDoc(doc(firestore, "users", uc.user.uid), {
          name,
          email,
          id: uc.user.uid,
        });
        handleLocalStorage("set", uc.user.uid);
      })
      .catch((error) => handleError("Sign up", error.message));
  };

  const signupWithGoogle = (e) => {
    e.preventDefault();
    handleReset("google");
    signInWithPopup(auth, gProvider)
      .then(async (result) => {
        console.log(result);
        await setDoc(doc(firestore, "users", result.user.uid), {
          name: result.user?.displayName,
          email: result.user?.email,
          id: result.user.uid,
        });

        handleLocalStorage("set", result.user.uid);
      })
      .catch((error) => handleError("Sign up", error.message));
  };

  const signInUser = (email, password) => {
    handleReset();
    signInWithEmailAndPassword(auth, email, password)
      .then((uc) => {
        console.log("you are signed in as", uc.user.email);
        handleLocalStorage("set", uc.user.uid);
      })
      .catch((error) => handleError("Sign in", error.message));
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    handleReset("google");

    signInWithPopup(auth, gProvider)
      .then((uc) => {
        console.log(uc);
        handleLocalStorage("set", uc.user.uid);
      })
      .catch((error) => handleError("Sign in", error.message));
  };

  const signUserOut = () => {
    signOut(auth)
      .then(() => handleLocalStorage("clear"))
      .catch((error) => console.log(error));
  };

  return {
    userName,
    setUserName,
    email,
    setEmail,
    password,
    setPassword,
    errors,
    setErrors,
    authErr,
    loading,
    googleLoading,
    signUpUser,
    signupWithGoogle,
    signInUser,
    signInWithGoogle,
    signUserOut,
  };
}
