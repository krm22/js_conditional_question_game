//quiz begins, no answers correct
var correct =0;

// ask question1
var answer1 = prompt('What is the capital of New Zealand?');
if (answer1.toUpperCase() === 'WELLINGTON') {
  correct += 1;    
}
// ask question2    
var answer2 = prompt ('What is the capital of Australia?');  
if (answer2.toUpperCase() === 'CANBERRA') {
   correct += 1; 
    } 
// ask question3
var answer3 = prompt ('What is the capital of France'); 
if (answer3.toUpperCase() === 'PARIS') {
    correct += 1;
}
// ask question4    
var answer4 = prompt('What is the capital of the United States of America?')
if (answer4.toUpperCase() ===  'WASHINGTON') {
    correct += 1;  
 }
 // ask question5
 var answer5 = prompt('What is the capital of Samoa')
 if (answer5.toUpperCase() === 'APIA') {
    correct += 1; 
 }
     
//output results
 document.write ('<p>You got ' + correct + ' out of 5      questions correct.</p>');
  
//output rank
if (correct === 5) {
  document.write ('<p><strong> You earned a gold crown!<strong></p>');
} else if (correct >= 3) {
  document.write ('<p><strong> You earned a silver crown!<strong></p>')
} else if (correct >=1 ) {
  document.write ('<p><strong> You earned a bronze crown!<strong></p>')
} else {
  document.write('<p><strong>No crown! for you. You need to study!<strong></p>')
}
















