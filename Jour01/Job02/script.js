function myCountChar(chaine, char){
    résultat = 0
    for(i = 0; i < length(chaine) ; i++){
        if(chaine[i] === char){
            résultat++
        }
    }
    return résultat
}




function length(str){
    let compteur = 0
    for(let i = 0; str[i] != undefined; i++){
        compteur++
    }
    console.log(compteur)
    return compteur
}

console.log(myCountChar("Bonjour","o"))