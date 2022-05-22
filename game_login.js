function adduser() {
    player1name= document.getElementById("player1nameinput").value;
    player2name= document.getElementById("player2nameinput").value;
    localStorage.setItem("player1", player1name);
    localStorage.setItem("player2", player2name);
    window.location= "game_page.html"
}