const password_box = document.getElementById("password");
const length = 12;
const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower_case = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const symbol = "!'^+%&/()=?_£#${[]}*|_¨¨~~₺:";

const all_chars = upper_case + lower_case + number + symbol;

function createPassword(){
    let password = "";
    password += upper_case[Math.floor(Math.random() * upper_case.length)];
    password += lower_case[Math.floor(Math.random() * lower_case.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while( length > password.length){
        password += all_chars[Math.floor(Math.random() * all_chars.length)];
    }
    password_box.value = password;
}

function copyPassword() {
    let password_box = document.getElementById("password");
    let password = password_box.value;
    navigator.clipboard.writeText(password)
}

