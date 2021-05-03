const form = document.getElementById("form");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const eMail = document.getElementById("e-mail");
const password = document.getElementById("password");

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    checkInputs();
})

function checkInputs(){
    // get the values from the Input
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = eMail.value.trim();
    const passwordValue = password.value.trim();
    
    if(firstNameValue == ""){
        // show error 
        setErrorFor(firstName,"First Name cannot be empty");
    }else{
        //remove error class
        setSuccessFor(firstName);
    }

    if(lastNameValue == ""){
        // show error 
        setErrorFor(lastName,"Last Name cannot be empty");
    }else{
        //remove error class
        setSuccessFor(lastName);
    }

    if(emailValue == ""){
        setErrorFor(eMail,"E-mail cannot be empty");
    }else if(!isEmail(emailValue)){
        setErrorFor(eMail,"Looks like this is not an email");
    }else{
        setSuccessFor(eMail)
    }

    if(passwordValue == ""){
        // show error 
        setErrorFor(password,"Password cannot be empty");
    }else{
        //remove error class
        setSuccessFor(password);
    }

}


function  setErrorFor(input,message){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //add error message inside small
    small.innerHTML = message;
    // add error class
    formControl.classList.add("error");
    //show error icon
    const errorIcon = formControl.querySelector("img");
    errorIcon.style.visibility = "visible";
}

function setSuccessFor(input){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    //remove error message inside small
    small.innerHTML = "";
    // remove error class
    formControl.classList.remove("error");
    //remove error icon
    const errorIcon = formControl.querySelector("img");
    errorIcon.style.visibility = "hidden";

};

function isEmail(email){
    return /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(email);
}



// submit button color change
const inputs = document.querySelectorAll(".form-control input");
const submitBtn = document.querySelector(".card .submit-btn");
//1.loop through all the input and add eventlistener
inputs.forEach(input =>{
    input.addEventListener("keyup",()=>{
        if(input.value){
            submitBtn.classList.remove("prevent");
            submitBtn.backgroundColor = "hsl(154, 59%, 51%)"
        }else{
            submitBtn.classList.add("prevent");
        }
    })
})