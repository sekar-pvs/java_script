// Get input from the user
let player = prompt("enter stone paper scissor");
console.log(`player :${player}`);

// creating random one 

let ran= Math.ceil(Math.random()*3)
console.log(ran);
{
    var computer;
if (ran===1){
   var computer="stone";
    console.log(`computer :${computer}`);
}
else if(ran===2) 
{
    var computer="paper";
    console.log(`computer :${computer}`);
}
else if(ran===3) 
{
   var computer="scissor";
    console.log(`computer :${computer}`);
}
else {
    console.log("invalid input");
}

// main logic
{

if(player===computer){
    alert("Tie:)");
}
else if(player==="paper"){
    if(player==="paper" && computer==="stone")
    {
        alert("player win:)");
    }
    else{
        alert("computer wins:)");
    }
}
 else if(player==="stone"){
        if(player==="stone" && computer==="paper")
        {
            alert("computer win:)");
        }
        else{
            alert("player wins:)");
        }   

}
else if(player==="scissor"){
    if(player==="scissor" && computer==="paper")
    {
        alert("player win:)");
    }
    else{
        alert("computer wins:)");
    }   

}
else{
    alert('invalid inputs')
}
}
}