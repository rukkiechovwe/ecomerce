import React, { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { firestore, auth } from "../firebase";

export const UserContext = React.createContext();

function UserContextProvider({ children }) {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const user_id = localStorage.getItem("user_id");
        if (user_id === null) {
          localStorage.setItem("user_id", user.uid);
        }
        const docRef = doc(firestore, "users", user_id);
        await getDoc(docRef)
          .then((doc) => {
            if (doc.exists) {
              setUserData(doc.data());
            } else {
              console.log("No such document!");
            }
          })
          .catch((error) => {
            console.log("Error getting document:", error);
          });
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ userData }}>{children}</UserContext.Provider>
  );
}
export default UserContextProvider;
