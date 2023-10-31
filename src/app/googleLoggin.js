import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const googleButton = document.querySelector("#google-login");

googleButton.addEventListener("click", async () => {
  const provider = new GoogleAuthProvider();

  try {
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);

    const modal = bootstrap.Modal.getInstance("#signInModal");
    modal.hide();
    showMessage(
      "Bienvenido a las fuerzas del cielo!!!" + credentials.user.displayName
    );
  } catch (error) {
    console.log(error);
  }
});
