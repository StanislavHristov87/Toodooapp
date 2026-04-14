import { ref, set } from "firebase/database";
//import { database } from "./firebase";

export const saveUserData = async (userId, url) => {
    await set(ref( "users/" + userId), {
        photoURL: url,
    })
};