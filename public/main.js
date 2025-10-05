const toggleMenuIcon = document.getElementById("ct-top-menu-toggle")
const topMenu = document.getElementById("ct-top-menu")

document.addEventListener("click", (e) => {
    // topMenu.style.display = "flex"
    if (toggleMenuIcon.contains(e.target)) {
        // click vào toggle
        topMenu.classList.toggle("ct-top-menu-expanded")
        topMenu.classList.toggle("hidden")
    }
    else {
        //click ra ngoài toggle
        if (topMenu.classList.contains("ct-top-menu-expanded")) {
            topMenu.classList.remove("ct-top-menu-expanded")
            topMenu.classList.add("hidden")
        }
    }
})