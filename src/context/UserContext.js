import React, { useState, createContext } from "react";
import app from './../helper/Firebase'

export const UserContext = createContext();

export const UserProvider = props => {
  const [user, setUser] = useState("aa"); 

  return (
    <UserContext.Provider value={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};