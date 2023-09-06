function myUpperCase(str){
    const majuscule = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const minuscule = "abcdefghijiklmnopkrstuvwxyz"
    let chaine = ""
    
    for(let i = 0; i < length(str); i++) {
        for( let x = 0; x < length(minuscule); x++){
            console.log(str[i],minuscule[x])
            if(str[i] === minuscule[x]) {
                chaine += majuscule[x]
                console.log(chaine)
                break
            }
        }
    }
    console.log(str)
    return chaine
}



function length(str){
    let compteur = 0
    for(let i = 0; str[i] != undefined; i++){
        compteur++
    }
    console.log(compteur)
    return compteur
}

console.log(myUpperCase("hello"))