const menu = document.getElementById("menu");
const menuContent = '<a href="./index.html" id="menu-link">Sobre nós</a><br><a href="./acontece.html" id="menu-link">Acontece no Noturno</a><br><a href="./vestibulares.html" id="menu-link">Vestibulares</a><br><a href="./entrevistas.html" id="menu-link">Entrevistas</a>';

const logo = document.getElementById("logo");
logo.onclick = () => {
    window.location.href = "./index.html";
}

function showMenu() {
    if (menu.innerHTML == '') menu.innerHTML = menuContent;
    else menu.innerHTML = '';
}
