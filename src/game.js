game = {};
game.cells = game.cells || {};

game.cells.danger = [
    // Walls
    "0,0", "0,1", "0,2", "0,3", "0,4", "0,5", "0,6", "0,7", "0,8", "0,9","0,10","0,11","0,12","0,13","0,14",
    "1,0", "2,0", "3,0", "4,0", "5,0", "6,0", "7,0", "8,0", "9,0","10,0","11,0","12,0","13,0","14,0",
    "14,1", "14,2", "14,3", "14,4", "14,5", "14,6", "14,7", "14,8", "14,9","14,10", "14,11", "14,12","14,13","14,14",
    "1,14", "2,14", "3,14", "4,14", "5,14", "6,14", "7,14", "8,14", "9,14","10,14","11,14","12,14","13,14",

    // Maze Walls
    "1,6",
    "2,1","2,2","2,3","2,4","2,6","2,7","2,8","2,9","2,11","2,12",
    "3,6","3,11",
    "4,2","4,3","4,4","4,5","4,6","4,8","4,9","4,10", "4,11","4,13",
    "5,2","5,8","5,11",
    "6,2","6,4","6,5","6,6","6,7","6,8","6,10","6,11","6,12",
    "7,4","7,8","7,12",
    "8,2","8,3","8,4","8,6","8,7","8,8","8,9","8,10","8,12",
    "9,4","9,7","9,12",
    "10,2","10,4","10,5","10,7","10,9","10,10","10,12",
    "11,1","11,2","11,4","11,10",
    "12,2","12,4","12,5","12,6","12,7","12,8","12,9","12,10","12,12","12,13",
    "13,4"
]


game.cells.finish = {x:7, y:7}

game.SetupBoard = function(cols, rows) {
    var board = document.getElementById("board")
    for (var i=0; i!=rows; i++) {
        var row = document.createElement("tr");
        for (var ii=0; ii!= cols; ii++) {
            var cell = document.createElement("td");
            cell.id = `${i},${ii}`

            if ((game.mouse.x == i) && (game.mouse.y == ii)) cell.classList.add("player");
            if ((game.cells.finish.x == i) && (game.cells.finish.y == ii)) cell.classList.add("finish");
            if (game.cells.danger.includes(`${i},${ii}`)) cell.classList.add("danger")


            cell.innerHTML = `${i},${ii}`
            row.appendChild(cell);
        }
        board.appendChild(row)
    }
}