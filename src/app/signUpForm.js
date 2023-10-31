import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";
console.log("signUpFormLoaded");

const signUpForm = document.querySelector("#signUp-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signUpForm["signUp-email"].value;
  const pass = signUpForm["signUp-pass"].value;

  try {
    const userData = await createUserWithEmailAndPassword(auth, email, pass);
    console.log(userData);

    //close signUpModal
    const signUpModal = document.querySelector("#signUpModal");
    const modal = bootstrap.Modal.getInstance(signUpModal);
    modal.hide();

    showMessage("Bienvenido a las fuerzas del Cielo" + userData.user.email);
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      showMessage("El email ingresado se encuentra en uso");
    } else if (error.code === "auth/invalid-email") {
      showMessage("email invalido");
    } else if (error.code === "auth/weak-password") {
      showMessage(
        "La contraseña es demasiado debil, ingrese al menos seis caracteres"
      );
    } else if (error.code) {
      showMessage("Ocurrio un error");
    }
  }
});
