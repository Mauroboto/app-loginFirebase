const list = document.querySelector(".datos");

export const setupList = (data) => {
  if (data.length) {
    let html = "";
    data.forEach((e) => {
      const post = e.data();
      const li = `<li class="list-group-item list-group-item-action bg-dark">

        <h5>${post.Titulo}</h5>
        <h5>${post.Nombre}</h5>
        <p>${post.Apellido}</p>

      </li>`;
      html += li;
    });
    list.innerHTML = html;
  } else {
    list.innerHTML = "<h1> Registrate para ver la informacion!</h1>";
  }
};
