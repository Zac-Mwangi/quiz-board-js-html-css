 document.getElementsByClassName('question_container')[0].style.display = "block";

 function next1() {
     document.getElementsByClassName('question_container')[0].style.display = "none";
     document.getElementsByClassName('question_container')[1].style.display = "block";
     document.getElementsByClassName('question_container')[2].style.display = "none";
     document.getElementsByClassName('question_container')[3].style.display = "none";
     document.getElementsByClassName('question_container')[4].style.display = "none";

     return false;
 }

 function next2() {
     document.getElementsByClassName('question_container')[0].style.display = "none";
     document.getElementsByClassName('question_container')[1].style.display = "none";
     document.getElementsByClassName('question_container')[2].style.display = "block";
     document.getElementsByClassName('question_container')[3].style.display = "none";
     document.getElementsByClassName('question_container')[4].style.display = "none";

     return false;

 }

 function next3() {
     document.getElementsByClassName('question_container')[0].style.display = "none";
     document.getElementsByClassName('question_container')[1].style.display = "none";
     document.getElementsByClassName('question_container')[2].style.display = "none";
     document.getElementsByClassName('question_container')[3].style.display = "block";
     document.getElementsByClassName('question_container')[4].style.display = "none";

     return false;

 }

 function next4() {
     document.getElementsByClassName('question_container')[0].style.display = "none";
     document.getElementsByClassName('question_container')[1].style.display = "none";
     document.getElementsByClassName('question_container')[2].style.display = "none";
     document.getElementsByClassName('question_container')[3].style.display = "none";
     document.getElementsByClassName('question_container')[4].style.display = "block";
     document.getElementsByClassName('submitClass')[0].style.display = "block";

     return false;

 }