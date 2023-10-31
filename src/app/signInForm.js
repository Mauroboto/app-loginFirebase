import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-auth.js";
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signInForm = document.querySelector("#login-form");

signInForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = signInForm["login-email"].value;
  const password = signInForm["login-password"].value;

  try {
    const credentials = await signInWithEmailAndPassword(auth, email, password);
    console.log(credentials);
    const modal = bootstrap.Modal.getInstance(
      document.querySelector("#signInModal")
    );
    modal.hide();

    showMessage(
      "Bienvenido a las fuerzas del cielo!!!" + credentials.user.email
    );
  } catch (error) {
    if (error.code === "auth/wrong-password") {
      showMessage("Contraseña incorrecta");
    }
    if (error.code === "auth/user-not-found") {
      showMessage("Usuario no encontrado");
    } else {
      showMessage(error.message, "Error al iniciar sesion");
    }
  }
});
