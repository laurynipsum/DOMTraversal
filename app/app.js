/**
 * ONE: create a new branch with the name develop-{your name}
 * 
 * TWO: write some JavaScript to find the article element with an id that has your name.
 * Using that element as a starting point, select the element with class="title" and change the innertext to be 
 * your full name. Next, Select the element with a class="subtitle" and add a class of "twitter-handle" to the classList.
 * Finally, select the img element and setAttribute src to the relative url string that loads your picture.
 * 
 * THREE: write some JavaScript that finds ALL articles with a class="professor". Loop through each element and set the child
 * img element src to the relative clown file. Change the title to 'Clown', and subtitle to '@arrayClown' 
 */

let lauryn = document.getElementById("lauryn");
 
 
let title = lauryn.querySelector('.title');

title.innerText = 'Lauryn Ryerse';

let subtitle = lauryn.querySelector('.subtitle');

subtitle.classList.add('twitter-handle');

let image = lauryn.querySelector('img');

image.setAttribute('src', 'images/lauryn.jpg');


 let professors =  document.querySelectorAll('.professor');

 professors.forEach(function(professor){
    let eachImage = professor.querySelector('img');
    eachImage.setAttribute('src', 'images/clown.jpg');
    let professorName = professor.querySelector('.title');
    professorName.innerText = 'Clown';
    let twitterClown = professor.querySelector('.subtitle');
    twitterClown.innerText = '@arrayClown';
 });
