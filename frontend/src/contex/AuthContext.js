import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "61792fdcc1738a3ff5bdcafd",
    username: "darshan",
    email: "darshan@gmail.com",
    password: "$2b$10$4rjPDcR9H4Y0Mu2YjIz1n.e9G5YBpjjvgpE.zIVm18e6QuJWylf3G",
    profilePicture: "",
    coverPicture: "",
    followers: ["6179393d003aad4a6018d5c8"],
    followings: ["61792fe9c1738a3ff5bdcaff"],
  },
  isFetching: false,
  error: false,
};

// export const AuthContext =  createContex(INITIAL_STATE);
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
