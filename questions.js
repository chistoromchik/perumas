function toggleContent(id) {
    var content = document.getElementById(id);
    var button = content.previousElementSibling.querySelector('.toggle-button');

    if (content.style.display === "none") {
        content.style.display = "block";
        button.innerHTML = "-";
    } else {
        content.style.display = "none";
        button.innerHTML = "+";
    }
}