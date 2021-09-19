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

