percentage = 0;
remark = " ";

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
}