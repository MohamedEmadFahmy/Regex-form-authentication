// validation script here
// let reg = /[a-z]{7}/gi;

// let reg2 = new RegExp(/[a-z]{7}/, "ig");

const inputs = document.querySelectorAll("input");

const patterns = {
    telephone: /^01([025])(\d{8})$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/
};

//validation function
function validate(field, regex){
    if(regex.test(field.value)){
        field.className = "valid";
    }
    else{
        field.className = "invalid";
    }
}


inputs.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.attributes.name.value );
        validate(e.target, patterns[e.target.attributes.name.value]);
    })
})