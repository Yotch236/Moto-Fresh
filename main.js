const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      sidebarClose = document.querySelector(".sidebarClose");

      let getMode = localStoraage.getItem("mode");
         if (getMode && getMode === "dark-mode"){
            body.classList.add("dark");
         }

        modeToggle.addEventListener("click", () =>{
            modeToggle.classList.toggle("active");
            body.classList.toggle("dark");
            
            if(!body.classList.contains("dark")){
                localStorage.setItem("mode", "light-mode");
            }else{
                localStorage.setItem("mode", "dark-mode");
            }
        });

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
