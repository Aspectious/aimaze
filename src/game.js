game = {};
game.cells = game.cells || {};

game.cells.danger = [
    // Walls
    "0,0", "0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "0,8", "0,9","0,10","0,11","0,12","0,13","0,14",
    "1,0", "2,0", "3,0", "4,0", "5,0", "6,0", "7,0", "8,0", "9,0","10,0","11,0","12,0","13,0","14,0",
    "14,1", "14,2", "14,3", "14,4", "14,5", "14,6", "14,7", "14,8", "14,9","14,10", "14,11", "14,12","14,13","14,14",
    "1,14", "2,14", "3,14", "4,14", "5,14", "6,14", "7,14", "8,14", "9,14","10,14","11,14","12,14","13,14",

    // Maze Walls

]


game.cells.finish = {x:7, y:7}

game.SetupBoard = function(cols, rows) {
    var board = document.getElementById("board")
    for (var i=0; i!=rows; i++) {
        var row = document.createElement("tr");
        for (var ii=0; ii!= cols; ii++) {
            var cell = document.createElement("td");
            cell.id = `${i},${ii}`
            cell.addEventListener("click", () => {
                game.cells.danger.push(cell.id)
            })
            if ((game.cells.finish.x == i) && (game.cells.finish.y == ii)) cell.classList.add("finish");
            if (game.cells.danger.includes(`${i},${ii}`)) cell.classList.add("danger")
            cell.innerHTML = `${i},${ii}`
            row.appendChild(cell);
        }
        board.appendChild(row)
    }
}