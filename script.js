window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("sidenVises");
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#sidebar").addEventListener("click", toggleMenu);
}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");
    document.querySelector("#haandvaerkere_sidebar").classList.toggle("hidden");


    let erSkjult = document.querySelector("#menu").classList.contains("hidden");
    let erSkjult2 = document.querySelector("#haandvaerkere_sidebar").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }

    if (erSkjult2 == true) {
        document.querySelector("#sidebar").textContent = "&rarr;";
    } else {
        document.querySelector("#sidebar").textContent = "X";
    }
}
