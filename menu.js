function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "none" || menu.style.display === "" ? "block" : "none";
}

window.onclick = function(event) {
    const menu = document.getElementById("dropdownMenu");
    if (!event.target.closest('.menu-container')) {
        menu.style.display = "none";
    }
}

