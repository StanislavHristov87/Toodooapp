import { auth } from "./firebase";
import {
    createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

//register
export const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

//login
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
    return signOut(auth);
};
