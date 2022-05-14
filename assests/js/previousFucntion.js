function per1() {
    document.getElementsByClassName('question_container')[0].style.display = "none";
    document.getElementsByClassName('question_container')[1].style.display = "none";
    document.getElementsByClassName('question_container')[2].style.display = "none";
    document.getElementsByClassName('question_container')[3].style.display = "none";
    document.getElementsByClassName('question_container')[4].style.display = "block";

    return false;
}

function per2() {
    document.getElementsByClassName('question_container')[0].style.display = "none";
    document.getElementsByClassName('question_container')[1].style.display = "block";
    document.getElementsByClassName('question_container')[2].style.display = "none";
    document.getElementsByClassName('question_container')[3].style.display = "none";
    document.getElementsByClassName('question_container')[4].style.display = "none";

    return false;

}

function per3() {
    document.getElementsByClassName('question_container')[0].style.display = "none";
    document.getElementsByClassName('question_container')[1].style.display = "none";
    document.getElementsByClassName('question_container')[2].style.display = "block";
    document.getElementsByClassName('question_container')[3].style.display = "none";
    document.getElementsByClassName('question_container')[4].style.display = "none";

    return false;

}

function per4() {
    document.getElementsByClassName('question_container')[0].style.display = "none";
    document.getElementsByClassName('question_container')[1].style.display = "none";
    document.getElementsByClassName('question_container')[2].style.display = "none";
    document.getElementsByClassName('question_container')[3].style.display = "block";
    document.getElementsByClassName('question_container')[4].style.display = "none";
    document.getElementsByClassName('submitClass')[0].style.display = "block";

    return false;

}