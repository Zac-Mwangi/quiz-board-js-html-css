per = 0;
present = " ";

function submitToJs() {

    marks = 0;

    // The checked property sets or returns the checked state of a checkbox.

    // check inputs if selected

    // question 1
    if (document.getElementById('t1').checked ||
        document.getElementById('af1').checked ||
        document.getElementById('bf1').checked ||
        document.getElementById('cf1').checked) {

        var q1 = document.getElementById('t1').checked;
        if (q1 == true) {
            marks = marks + 1;
        } else {
            marks = marks + 0;
        }
    } else {
        alert("Please answer Question 1 ");
        return false;
    }

    // question2
    if (document.getElementById('t2').checked ||
        document.getElementById('af2').checked ||
        document.getElementById('bf2').checked ||
        document.getElementById('cf2').checked) {

        var q2 = document.getElementById('t2').checked;

        if (q2 == true) {
            marks = marks + 1;
        } else {
            marks = marks + 0;
        }

    } else {
        alert("Please answer question 2 ");
        return false;
    }

    // question3
    if (document.getElementById('t3').checked ||
        document.getElementById('af3').checked ||
        document.getElementById('bf3').checked ||
        document.getElementById('cf3').checked) {

        var q3 = document.getElementById('t3').checked;

        if (q3 == true) {
            marks = marks + 1;
        } else {
            marks = marks + 0;
        }

    } else {
        alert("Please answer Question 3 ");
        return false;
    }

    // question4
    if (document.getElementById('t4').checked ||
        document.getElementById('af4').checked ||
        document.getElementById('bf4').checked ||
        document.getElementById('cf4').checked) {

        var q4 = document.getElementById('t4').checked;

        if (q4 == true) {
            marks = marks + 1;
        } else {
            marks = marks + 0;
        }

    } else {
        alert("Please answer Question 4 ");
        return false;
    }

    // question5
    if (document.getElementById('t5').checked ||
        document.getElementById('af5').checked ||
        document.getElementById('bf5').checked ||
        document.getElementById('cf5').checked) {

        var q5 = document.getElementById('t5').checked;

        if (q5 == true) {
            marks = marks + 1;
        } else {
            marks = marks + 0;
        }

    } else {
        alert("Please answer Question 5 ");
        return false;
    }

    var per = (marks / 5) * 100;

}