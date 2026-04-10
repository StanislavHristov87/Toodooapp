import { auth, db } from "./firebase";
import { ref, set } from "firebase/database";
import {
    createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

//register
export const register = async (email, password, firstName, lastName, handle) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    await set(ref(db, `users/${user.uid}`), {
        email: email,
        firstName: firstName,
        lastName: lastName,
        handle: handle,
    })
};

//login
export const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
    return signOut(auth);
};
