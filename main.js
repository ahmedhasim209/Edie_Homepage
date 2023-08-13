let icon = document.getElementById("burger");
let ul = document.getElementById("ul");
let ex = document.getElementById("ex");


icon.onclick = function () {
    ul.style.display = "block"
    icon.style.display = "none"
    ex.style.display = "block"
}
ex.onclick = function () {
    ul.style.display = "none"
    icon.style.display = "block"
    ex.style.display = "none"
}