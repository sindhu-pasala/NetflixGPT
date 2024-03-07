import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    let message = checkValidData(email.current.value, password.current.value);
    setErrorMsg(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMsg(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMsg(errorCode + "-" + errorMessage);
        });
    }
  };
  return (
    <div>
      <Header />
      <img className="absolute" alt="" src={BG_URL} />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="bg-black text-white absolute p-16 m-10 w-3/12 my-24 mx-auto right-0 left-0 opacity-85"
      >
        <div className="text-3xl font-bold m-3">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-3 m-3 w-full bg-transparent border rounded-sm border-gray-500"
          ></input>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or phone number"
          className="p-3 m-3 w-full bg-transparent border rounded-sm border-gray-500"
        ></input>
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-3 m-3 w-full bg-transparent border rounded-sm border-gray-500"
        ></input>
        <p className="py-1 pl-2 text-red-500 font-bold text-md">{errorMsg}</p>
        <button
          className="p-2 w-full m-2 bg-red-600 rounded-l"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-6 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Existing User? Click Here to Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
