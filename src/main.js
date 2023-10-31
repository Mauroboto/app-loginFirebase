document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM Loaded");
});

import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth, db } from "./app/firebase.js";
import "./app/firebase.js";
import "./app/signUpForm.js";
import "./app/logout.js";
import { loginCheck } from "./app/loginCheck.js";
import "./app/signInForm.js";
import "./app/googleLoggin.js";
import { setupList } from "./app/lists.js";

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const querySnapshot = await getDocs(collection(db, "Datos"));
    setupList(querySnapshot.docs);
  } else {
    setupList([]);
  }

  loginCheck(user);
});
