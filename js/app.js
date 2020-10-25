// let FirstName = document.getElementById("first-name");
// let LastName = document.getElementById("last-name");
// let Email = document.getElementById("email");
// let Password = document.getElementById("pass");
// let ErrorI = document.getElementById("err-icon");

const regForm = document.querySelector('form#register')
const errors_el = document.querySelector('form#register .errors')

let firstname = document.querySelector('input#first-name');
let lastname = document.querySelector('input#last-name');
const email = document.querySelector('input#email');
const password = document.querySelector('input#pass');

let firstname1 = regForm.elements.namedItem("firstname");

regForm.addEventListener('submit', validateRegisterForm);

function  validateRegisterForm(e) {
    e.preventDefault();


    let errors = [];

    if (firstname.value == "") {
        errors.push({text: "first name", el: firstname});
    }
    if (lastname.value == "") {
        errors.push({text: "last name", el: lastname});
    }
    if (email.value == "") {
        errors.push({text: "email", el: email});
    }
    if (password.value == "") {
        errors.push({text: "password", el: password});
    }

    if (errors.length > 0) {
       handle_errors(errors);
        return false;
    }

    return true;
}



function handle_errors(errs) {
    let str = "You have errors with the following fields: ";

    errs.map((er) => {
        er.el.classList.add('invalid');
        er.el.previousElementSibling.style.display = "block";
        er.el.nextElementSibling.nextElementSibling.style.display = "block";
        
 });

 errs[0].el.focus();

 
}

const email_reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const pass_reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

firstname.addEventListener("input", validate);
lastname.addEventListener("input", validate);
password.addEventListener("input", validate);
email.addEventListener("input", validate);


function validate(e) {
    let target = e.target;

            if (target.name == "firstname") {
                    if (target.value.length >= 4) {
                    target.classList.add("valid");
                    target.classList.remove("invalid");
                    target.previousElementSibling.style.display = "none";
                    target.nextElementSibling.nextElementSibling.style.display = "none";
                } else {
                    target.classList.remove("valid");
                    target.classList.add("invalid");
                    target.previousElementSibling.style.display = "block";
                    target.nextElementSibling.nextElementSibling.style.display = "block";
              
                }
            }
    
            if (target.name == "lastname") {
                    if (target.value.length >= 4) {
                    target.classList.add("valid");
                    target.classList.remove("invalid");
                    target.previousElementSibling.style.display = "none";
                    target.nextElementSibling.nextElementSibling.style.display = "none";
                } else {
                    target.classList.remove("valid");
                    target.classList.add("invalid");
                    target.previousElementSibling.style.display = "block";
                    target.nextElementSibling.nextElementSibling.style.display = "block";
                }
            }

            if (target.name == "email") {
                if (email_reg.test(target.value)) {
                    target.classList.add("valid");
                    target.classList.remove("invalid");
                    target.previousElementSibling.style.display = "none";
                    target.nextElementSibling.nextElementSibling.style.display = "none";
                } else {
                    target.classList.remove("valid");
                    target.classList.add("invalid");
                    target.previousElementSibling.style.display = "block";
                    target.nextElementSibling.nextElementSibling.style.display = "block";
                }
            }

            if (target.name == "password") {
                if (pass_reg.test(target.value)) {
                    target.classList.add("valid");
                    target.classList.remove("invalid");
                    target.previousElementSibling.style.display = "none";
                    target.nextElementSibling.nextElementSibling.style.display = "none";
                } else {
                    target.classList.add("invalid");
                    target.classList.remove("valid");
                    target.previousElementSibling.style.display = "block";
                    target.nextElementSibling.nextElementSibling.style.display = "block";
                }
            }
}
