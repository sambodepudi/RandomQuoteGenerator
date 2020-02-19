/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * Array of objects, each containing a quote, source, citatio and year 
***/
var quotes = [
  {quote : "The only people who see the whole picture are the ones who step out of the frame",
    source : "Salman Rushdie",
    citation : "The Ground Beneath Her Feet",
    year : "1999" },
  {quote : "And when all the wars are over, a butterfly will still be beautiful.",
    source : "Ruskin Bond"},
  {quote : "We were looking for the key for years, but the door was always open.",
    source : "Aravind Adiga",
    citation : "The White Tiger",
    year : "2008"},
  {quote : "The end of an OX is beef, the end of a lie is grief.",
    source : "Manu Joseph",
    citation : "Serious Men",
    year : "2010"},
  {quote : "Action expresses priorities.",
    source : "Mahatma Gandhi",
    tags : "Philosophy"}
];



/***
 * This function generates a random number between 1 and 5 (inclusive)
***/
function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * 5) +1;
  return randomNumber;
}


/***
 * This function uses the random number from getRandomQuote and gets that quote 
 * and other info from that positio in array and produces the html string to display
***/
function printQuote(){
  var randomNumber = getRandomQuote();
  var citation = "";
  var year = "";
  var tags = "";
  var quoteAndSource = '<p class="quote">'+quotes[randomNumber].quote+'</p>'
                    +'<p class="source">'+quotes[randomNumber].source;
  
  if(typeof(quotes[randomNumber].citation) !== "undefined"){
    citation =  '<span class="citation">'+ quotes[randomNumber].citation+'</span>';
  }
  if(typeof(quotes[randomNumber].year) !== "undefined"){
    year = '<span class="year">'+quotes[randomNumber].year+'</span>';
  }
  if(typeof(quotes[randomNumber].tags) !== "undefined"){
    tags = '<span class="tags">'+quotes[randomNumber].tags+'</span>';
  }
  var end = '</p>'
  var fullWord = quoteAndSource+citation+year+tags+end;
  document.getElementById('quote-box').innerHTML = fullWord; 

}

/***
 * set interval used to hit "Show Another quote button" for every 5 secs
 */
setInterval(function () {
  document.getElementById("load-quote").click();
  document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
}, 5000);

/**
 * onclick function changes color when button is clicked
 */
function changeColor(){
  document.body.style.backgroundColor = "#"+((1<<24)*Math.random()|0).toString(16);
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);