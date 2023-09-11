class Board{
    constructor(grid, haswinner){
        this.grid = grid
        this.haswinner = haswinner
    }
    initializeBoard(grid,haswinner) {
        let grid = Array["-","-","-","-","-","-"]
        this.haswinner = false
    }
    displayboard(){
        let division = document.getElementById(".board")
        division += this.grid
    }
}