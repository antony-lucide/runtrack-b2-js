let compteur = 0

function myAddCount(){
    let paragraphe = document.querySelector("#count_displayer")
    compteur++
    paragraphe.innerHTML = compteur
}

document.addEventListener("DOMContentLoaded", () =>{
    const btn = document.querySelector("#add_count_bin")
    btn.addEventListener("click", () => {
        myAddCount()
    })
})