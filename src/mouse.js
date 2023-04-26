game.mouse = game.mouse || {};

game.mouse.x=1;
game.mouse.y=1;

game.mouse.move = function(direction) {
    var e = document.getElementsByClassName("player")
    var player = Array.from(e)[0];
    Array.from(e).forEach(element => {
        element.classList.remove("player")
    });
    var ID = player.id.split(",")
    if (direction == "UP") {
        var newplayer = 
        document.getElementById(`${ID[0]-1},${ID[1]}`)
        newplayer.classList.add("player")
    } else if (direction == "DOWN") {
        var newplayer = 
        document.getElementById(`${parseInt(ID[0])+1},${ID[1]}`)
        newplayer.classList.add("player")
    } else if (direction == "LEFT") {
        var newplayer = 
        document.getElementById(`${ID[0]},${ID[1]-1}`)
        newplayer.classList.add("player")
    } else if (direction == "RIGHT") {
        var newplayer = 
        document.getElementById(`${ID[0]},${parseInt(ID[1])+1}`)
        newplayer.classList.add("player")
    } else throw new SyntaxError();
    if (game.cells.danger.includes(newplayer.id)) {
        console.log("Failed puzzle. 10 points deducted.");
        newplayer.classList.remove("player")
        newplayer = document.getElementById("1,1")
        newplayer.classList.add("player")
    }
}