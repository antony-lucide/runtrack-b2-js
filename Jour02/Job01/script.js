function myChangeBackgroundColor(){
    const screens = window.innerWidth
    if(screens <= 1337){
        document.documentElement.style.backgroundColor = "#ffb703"
    }
    else if(screens  <= 1336 &&  screens >= 505){
        document.body.style.backgroundColor = "#d90429"
    }
    else if( screens <= 504){
        document.documentElement.style.backgroundColor = "#003049"
    }
}

document.addEventListener("DOMContentLoaded", () =>{
}) 
window.addEventListener("resize", (event) =>{
    myChangeBackgroundColor()
})