console.log("Reference ->", "https://youtu.be/lvKUtbP1XLA?si=w1pQmM5cRHI2_lMd");

const d = document;
let grados = 0;

d.addEventListener("click", (e) => {
  if (e.target.matches(".pencil")) {
    grados -= 40;

    let padre = e.target.parentElement;
    padre.style.setProperty("--g", grados + "deg");
    padre.style.setProperty(
      "transform",
      `translate(-50%, -50%) rotate(${grados}deg)`
    );
  }
});
