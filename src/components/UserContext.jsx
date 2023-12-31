import React, { createContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "../fire.config";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [coffeeData, setCoffeeData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("+91 XXXX XXXX XX");
  const [viewPassword, setViewPassword] = useState("password");

  const [userName, setUserName] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          navigate("/myAccount");
          setUserId(user.uid);

          // Set the display name using the state value
          await updateProfile(auth.currentUser, {
            displayName: userName,
          });

          setUserName(auth.currentUser.displayName);
        }
      );
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    }
  };

  const Logout = async () => {
    try {
      await signOut(auth);
      setUserId("");
      setUserName("");
      navigate("/login"); // Redirect to the login page or any other page after logout
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };
  const Login = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        (userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setUserId(user.uid);
          setUserName(auth.currentUser.displayName);
          // setPhone(auth.currentUser.phoneNumber);

          navigate("/myAccount");
          // Retrieve and set the display name
          // setDisplayName(user.displayName);
          // ...
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const url = "https://fake-coffee-api.vercel.app/api";
  const getData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setCoffeeData(data);
      setIsDataLoaded(true);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsDataLoaded(false);
    }
  };

  useEffect(() => {
    getData(); // Call the function when the component mounts
  }, []); // Passing an empty dependency array ensures it runs only once when the component mounts

  return (
    <UserContext.Provider
      value={{
        userId,
        email,
        password,
        setEmail,
        setPassword,
        signUp,
        Login,
        setUserName,
        userName,
        Logout,
        setPhone,
        viewPassword,
        setViewPassword,
        searchQuery,
        setSearchQuery,
        searchResults,
        setSearchResults,
        coffeeData,
        setCoffeeData,
        isDataLoaded, setIsDataLoaded
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
