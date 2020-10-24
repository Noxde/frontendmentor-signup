// let FirstName = document.getElementById("first-name");
// let LastName = document.getElementById("last-name");
// let Email = document.getElementById("email");
// let Password = document.getElementById("pass");
// let ErrorI = document.getElementById("err-icon");

const regForm = document.querySelector('form#register')
const errors_el = document.querySelector('form#register .errors')

regForm.addEventListener('submit', validateRegisterForm);

function  validateRegisterForm(e) {
    e.preventDefault();

   let firstname = document.querySelector('input#first-name');
   let lastname = document.querySelector('input#last-name');
    const email = document.querySelector('input#email');
    const password = document.querySelector('input#pass');

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
 });

 errs[0].el.focus();

 
}

