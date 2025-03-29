const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

let getMode = localStorage.getItem("mode");
if (getMode === "dark-mode") {
    body.classList.add("dark");
}

if (modeToggle) {
    modeToggle.addEventListener("click", () => {
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        localStorage.setItem("mode", body.classList.contains("dark") ? "dark-mode" : "light-mode");
    });
}

if (sidebarOpen) {
    sidebarOpen.addEventListener("click", () => {
        nav.classList.add("active");
    });
}

// Close sidebar when clicking outside of it
body.addEventListener("click", (e) => {
    let clickedElm = e.target;

    if (!clickedElm.closest("nav") && !clickedElm.classList.contains("sidebarOpen")) {
        nav.classList.remove("active");
    }
});
