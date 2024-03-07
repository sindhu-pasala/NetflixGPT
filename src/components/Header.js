import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/appConfigSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store?.gpt?.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {});
  };
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute w-screen z-10 bg-gradient-to-b from-black flex justify-between p-4">
      <img className="w-60 px-10" alt="" src={LOGO}></img>
      {user && (
        <div className="flex mx-2 items-center">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLangChange}
            >
              {SUPPORTED_LANGUAGES.map((item) => (
                <option value={item.identifier}>{item.name}</option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-2 m-2 bg-teal-600 text-white rounded-lg hover:bg-opacity-80"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img className="h-12 w-12" src={user?.photoURL} alt="logo" />
          <button className="text-white" onClick={handleSignOut}>
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
