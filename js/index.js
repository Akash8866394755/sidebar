window.onload = function() {
    count = 0;
    var toggleBtn = document.getElementById("toggle-btn");
    var section = document.getElementById("section");
    toggleBtn.onclick = function f1() {
        if(count == 0){

            var sidenav = document.getElementById("sidenav");
            sidenav.style.display = "flex";
            sidenav.className = "animate__animated animate__slideInLeft animate__faster";
            
            var topnav = document.getElementById("topnav");
            topnav.style.left = "280px";
            topnav.style.transition = "0.5s";

            section.style.background = "rgba(0, 0, 0, 0.5)";
            section.className = "animate__animated animate__fadeIn";
            count = 1;
        }
        else 
        {
            var sidenav = document.getElementById("sidenav");
            sidenav.className = "animate__animated animate__fadeOutLeftBig animate__slower";
            var topnav = document.getElementById("topnav");
            topnav.style.left = "0";
            topnav.style.transition = "0.5s";
            section.style.background = "";
            section.style.transition = "0.1s";

            count = 0;
        }
      

    }
}