player1score = 0;
player2score = 0;
play1name = localStorage.getItem("name1")
play2name = localStorage.getItem("name2")
document.getElementById("questionplay") = "It is " + play1name + "'s turn for question";
document.getElementById("answerplay") = "It is " + play2name + "'s turn for answer";
function send() {
    var num1 = document.getElementById("num1input").value;
    var num2 = document.getElementById("num2input").value;
    var coranswer = parseInt(num1) * parseInt(num2);
    coranswer = coranswer;
    mulquestion = "<h4>" + num1 + " X " + num2 + "</h4>";
    inputbox = "<br>Answer : <input type='number' id='inputcheckbox'><br><br>";
    checkbutton = "<button class='btn btn-info' onclick='check()'>Check</button>";
    row = mulquestion + inputbox + checkbutton;
    document.getElementById("output").innerHTML = row;
    document.getElementById("num1input").value = "";
    document.getElementById("num2input").value = "";  
}

questionTurn = "player1";
answerTurn = "player2";

function check() {
    playerans = document.getElementById("inputbox").value;
    if (playerans == coranswer) {
        if (answerTurn == "player1") {
            player1score = player1score + 1;
            document.getElementById("nick1score").innerHTML = player1score;
        } else {
            player2score = player2score + 1;
            document.getElementById("nick2score").innerHTML = player2score;
        }
    }
    if (questionTurn == "player2") {
        questionTurn = "player1";
        document.getElementById("questionplay") = "It is " + play1name + "'s turn for question";
    } else {
        questionTurn = "player2";
        document.getElementById("questionplay") = "It is " + play2name + "'s turn for question";
    }
    if (answerTurn == "player2") {
        answerTurn = "player1";
        document.getElementById("answerplay") = "It is " + play1name + "'s turn for answer";
    } else {
        answerTurn = "player2";
        document.getElementById("answerplay") = "It is " + play2name + "'s turn for answer";
    }
}