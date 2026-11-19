
let count = 0;

// Enroll Course
function enroll(course) {
    alert("You enrolled in " + course);

    count = count + 1;

    document.getElementById("total").innerHTML = count;
}

// Search Course
document.getElementById("search").addEventListener("input", function() {

    let value = this.value.toLowerCase();

    let courses = document.getElementsByClassName("course");

    for (let i = 0; i < courses.length; i++) {

        let name = courses[i].innerText.toLowerCase();

        if (name.includes(value)) {
            courses[i].style.display = "block";
        }
        else {
            courses[i].style.display = "none";
        }
    }
});

// Registration Form
document.getElementById("registerForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Registration Successful!");

    this.reset();
});

// Login Form
document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Login Successful!");

    this.reset();
});

// Feedback Form
document.getElementById("feedbackForm").addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you for your feedback!");

    this.reset();
});
