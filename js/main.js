/*Variable Vinsmoke declares himself.*/
var userId = prompt("Welcome to Payninis! What's your name?");
var day = new Date();
var currentTime = day.getHours();
var greeting = "Welcome to Payninis "
var welcome;

//Welcome Prompt
if (currentTime > 18){
    welcome = greeting+userId+ ' are you looking to join us for Dinner'; 
}else if (currentTime > 12){
    welcome = greeting+userId+' are you looking to join us for Lunch';
}else if (currentTime > 0){
    welcome = greeting+userId+' are you looking to join us for Breakfast';
}

document.write('<h1>' + welcome + '</h1>');