function checkGrade() 
    {    var percentage = parseInt(document.getElementById("percentage").value);
    var grade;
    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 70) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else {
        grade = "F";
    }

    document.getElementById("result").textContent = "Your Grade is: " + grade; }
    
