import auth from "../firebase/firebase";
import { useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const useAuth = () => {
    const [user, setUser] = useState(null);

    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);;
        } 
    });

    return user;
}

export default useAuth;