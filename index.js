document.getElementById("hamburgerMenu").style.display = "none";
window.addEventListener("resize", function(){
    if (window.innerWidth >= "801" ) {
        document.getElementById("hamburgerMenu").style.display = "none";
    }

})
function toggleHamburger() {
    let hamburger = document.getElementById("hamburgerMenu");
    let hamburgerSymbol = document.getElementById("hamburgerSymbol");
    let headerLine = document.getElementsByTagName("header")[0];

    if (hamburger.style.display == "none") {
        hamburger.style.display = "flex";
        headerLine.style.borderRadius = "0px";

        hamburgerSymbol.classList.remove("fa-bars")
        hamburgerSymbol.classList.add("fa-times")

    }
    else {
        hamburger.style.display = "none";
        headerLine.style.borderBottomLeftRadius = "16px";
        headerLine.style.borderBottomRightRadius = "16px";


        hamburgerSymbol.classList.remove("fa-times")
        hamburgerSymbol.classList.add("fa-bars")

    }
}
