
player1name = localStorage.getItem("player1");
player2name = localStorage.getItem("player2");

console.log(player1name);
console.log(player2name);

player1score = 0;
player2score = 0;

document.getElementById("player1").innerHTML = player1name + ":";
document.getElementById("player2").innerHTML = player2name + ":";

document.getElementById("player1score").innerHTML = player1score + ":";
document.getElementById("player2score").innerHTML = player2score + ":";

document.getElementById("player_question").innerHTML="Question turn :"+player1name;
document.getElementById("player_answer").innerHTML="Answer turn :"+player2name;

function send(){
   number1=document.getElementById("number1").value;
   number2=document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

 
    questionnumber="<h4>"+ number1 + "X" + number2 +"</h4>";
    inputbox="<br> Answer : <input type='text' id ='input_check_box'>";
    check_btn="<br><br> <button class='btn btn-success' onclick='check()'> Check </button>";
    row=questionnumber+inputbox+check_btn;
    document.getElementById("output").innerHTML=row;
    document.getElementById("number1").value="";
    document.getElementById("number2").value="";
}


var question_turn="player1";
var answer_turn="player2";

function check(){
    answer=document.getElementById("input_check_box").value;
    
    console.log(answer);
    if(answer==actual_answer){
        if (answer_turn=="player1") {
            player1score=player1score+1;
            document.getElementById("player1score").innerHTML=player1score;
        } else {
            player2score=player2score+1;
            document.getElementById("player2score").innerHTML=player2score;   
        }
    }
    if (question_turn=="player1") {
        question_turn="player2";
    } else {
        question_turn="player1";
    }
    if (answer_turn=="player1") {
        answer_turn="player2";
    } else {
        answer_turn="player1";
    }
    document.getElementById("output").innerHTML="";
}