var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
//handle foem submission
form.addEventListener('submit', function (event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    //content dynamically by aliza
    var resumeHTML = "\n  <h2><b>Editable Resume</b></h2>\n  <h3>Personal Information</h3>\n  <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n  <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n  <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n  <h3>Education</h3>\n  <p <span contenteditable=\"true\">").concat(education, "</p>\n  <h3>Experience</h3>\n  <p <span contenteditable=\"true\">").concat(experience, "</p>\n  <h3>skills</h3>\n  <p <span contenteditable=\"true\">").concat(skills, "</p> \n  ");
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
