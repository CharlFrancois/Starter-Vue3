import { defineStore } from "pinia";
import { ref } from 'vue'
 import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {
//   getFirestore
// } from "firebase/firestore";
import { firebaseApp } from "../db/index";

export const useAuthentificationStore = defineStore("authentification", () => {
  const auth = getAuth(firebaseApp);
  // const db = getFirestore(firebaseApp);

  const currentUser = ref('')
  const sessionId = ref('')

  function registerUser(user) {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then(() => {
          console.log("create account");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
  }

  function stateChanged(user) {
    if (user) {
      currentUser.value = user.uid;
    }
  }


  return {
    registerUser,
    stateChanged,
    sessionId,
  };
});
