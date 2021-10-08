function circle(){
    window.scrollTo(0,0)
}

window.addEventListener("scroll",function () {
    info = document.getElementsByClassName("info")[0]

    const rect_info = info.getBoundingClientRect();

    if (
        rect_info.top >= 0 &&
        rect_info.left >= 0 &&
        rect_info.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect_info.right <= (window.innerWidth || document.documentElement.clientWidth)
    )
    {
        document.getElementsByClassName("circle")[0].style.animation = "none" 
    }
    else{
        document.getElementsByClassName("circle")[0].style.animation = "MoveUpDown 1s linear infinite" 
    }
}
)

window.onresize = function(){

    width = window.innerWidth
    height = window.innerHeight
  
    // Particles to be reloaded on resize -> 767 x 1500
    if(width>=767 && width<=1500)
    {
      particles.particles["number"].value = 30
      location.reload()
    }
    else if(width>=1501)
    {
      particles.particles["number"].value = 60
      location.reload()
    }
    }
  
// Window Reload hamburger option
window.onload = function() {

    width = window.innerWidth
    height = window.innerHeight

    if(width>=375 && width<767)
    {
        console.log("Mobile Screen Detected")
        var nav = document.getElementsByClassName("nav-items")[0]
        nav.innerHTML = ""
        var hamburger = document.createElement("img");
        hamburger.src = "./Assets/img/hamburger.svg"
        nav.appendChild(hamburger);
        console.log("Hamburger Added")
        var nav_items = document.getElementsByClassName("nav-items")[0];
        nav_items.setAttribute("class", "transparent-layer");
    }

}

