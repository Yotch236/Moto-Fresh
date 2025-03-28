const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

sidebarOpen.addEventListener('click', () => {
    nav.classList.add('active');
});

// Close sidebar when clicking outside of it
body.addEventListener('click', e => {
    let clickedElm = e.target;

    if (!clickedElm.classList.contains('sidebarOpen') && !clickedElm.classList.contains("menu")) {
        nav.classList.remove('active');
    }
});
