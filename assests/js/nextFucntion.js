document.getElementsByClassName('bigContainer')[0].style.display = "block";

function next1() {

    if (document.getElementById('t1').checked ||
        document.getElementById('af1').checked ||
        document.getElementById('bf1').checked ||
        document.getElementById('cf1').checked) {

    } else {
        alert("Please answer Question 1 ");
        return false;
    }

    document.getElementsByClassName('bigContainer')[0].style.display = "none";
    document.getElementsByClassName('bigContainer')[1].style.display = "block";
    document.getElementsByClassName('bigContainer')[2].style.display = "none";
    document.getElementsByClassName('bigContainer')[3].style.display = "none";
    document.getElementsByClassName('bigContainer')[4].style.display = "none";

    return false;
}

function next2() {

    if (document.getElementById('t2').checked ||
        document.getElementById('af2').checked ||
        document.getElementById('bf2').checked ||
        document.getElementById('cf2').checked) {

    } else {
        alert("Please answer question 2 ");
        return false;
    }

    document.getElementsByClassName('bigContainer')[0].style.display = "none";
    document.getElementsByClassName('bigContainer')[1].style.display = "none";
    document.getElementsByClassName('bigContainer')[2].style.display = "block";
    document.getElementsByClassName('bigContainer')[3].style.display = "none";
    document.getElementsByClassName('bigContainer')[4].style.display = "none";

    return false;

}

function next3() {

    if (document.getElementById('t3').checked ||
        document.getElementById('af3').checked ||
        document.getElementById('bf3').checked ||
        document.getElementById('cf3').checked) {

        var q3 = document.getElementById('t3').checked;

    } else {
        alert("Please answer Question 3 ");
        return false;
    }

    document.getElementsByClassName('bigContainer')[0].style.display = "none";
    document.getElementsByClassName('bigContainer')[1].style.display = "none";
    document.getElementsByClassName('bigContainer')[2].style.display = "none";
    document.getElementsByClassName('bigContainer')[3].style.display = "block";
    document.getElementsByClassName('bigContainer')[4].style.display = "none";

    return false;

}

function next4() {

    if (document.getElementById('t4').checked ||
        document.getElementById('af4').checked ||
        document.getElementById('bf4').checked ||
        document.getElementById('cf4').checked) {


    } else {
        alert("Please answer Question 4 ");
        return false;
    }

    document.getElementsByClassName('bigContainer')[0].style.display = "none";
    document.getElementsByClassName('bigContainer')[1].style.display = "none";
    document.getElementsByClassName('bigContainer')[2].style.display = "none";
    document.getElementsByClassName('bigContainer')[3].style.display = "none";
    document.getElementsByClassName('bigContainer')[4].style.display = "block";

    return false;

}