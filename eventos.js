document.addEventListener("DOMContentLoaded", function () {

    const miDiv = document.querySelector("#container");
    miDiv.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });


    const miBoton = document.querySelector("button");
    miBoton.addEventListener("click", (event) => {
        alert("Hola!");
        event.stopPropagation();
    });

});