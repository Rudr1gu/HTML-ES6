const btnDrawer =  document.getElementById("btnDrawer")
const menu =  document.getElementById("menu")
const btnToggled =  document.getElementById("toggled")

btnDrawer.addEventListener("click", ()=>{
    menu.style.display == "none" || menu.style.display == ""? menu.style.display = "flex" : menu.style.display = "none";
 })

 btnToggled.addEventListener("click", ()=>{


    if (btnToggled.value == "") {
        btnToggled.value = "toggled";
        btnToggled.innerHTML = "<i class='bx bx-toggle-right'></i>";
      } else {
        btnToggled.value = "";
        btnToggled.innerHTML = "<i class='bx bx-toggle-left'></i>";
      }
 })