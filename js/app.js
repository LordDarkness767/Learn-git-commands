window.addEventListener("DOMContentLoaded", () => {
  let btn = document.getElementById("btn_menu");
  let thingToHide = document.getElementById("hide");

  let pulsado = false;

  btn.addEventListener("click", () => {
    pulsado = !pulsado;
    btn.classList.toggle("activo");
    thingToHide.style.display = "block";

    if (pulsado == true) {
      btn.classList.toggle("activo");
      thingToHide.style.display = "none";
    }
  });
});
