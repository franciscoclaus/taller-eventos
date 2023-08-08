document.addEventListener("DOMContentLoaded", function () {

    const miDiv = document.querySelector("#container");
    miDiv.addEventListener("click", () => {
        alert("Hola! Soy el div");
    });

});

/*    
    const miDiv = document.querySelector("#container");
    miDiv.addEventListener("click", function() {
        alert("Hola! Soy el div");
    });

*/