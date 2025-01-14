
let passwordBox = document.querySelector("#passBox");
let inputSlider = document.querySelector("#inputSlider");
let sliderValue = document.querySelector("#sliderValue");
let generateBtn = document.querySelector("#generateBtn");
let upperCase = document.querySelector("#upperCase");
let lowerCase = document.querySelector("#lowerCase");
let numbers = document.querySelector("#numbers");
let symbols = document.querySelector("#symbols");
let copyBtn = document.querySelector("#copyBtn");

sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
});

generateBtn.addEventListener('click', () => {
    passwordBox.value = generatePassword()

});

let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars = "abcdefghijklmnopqrstuvwxyz";
let allNumbers = "0123456789";
let allSymbols = "!@#$%^&*()_+=-";

const generatePassword = () => {
    let genPass = "";
    let allchars = "";

    // if(allchars == "" || allchars.length == 0 ){
    //     return genPass;
    // }

    allchars += upperCase.checked ? upperChars : "";
    allchars += lowerCase.checked ? lowerChars : "";
    allchars += numbers.checked ? allNumbers : "";
    allchars += symbols.checked ? allSymbols : "";
    let i = 1;
    while (i <= inputSlider.value) {
        i++;
        genPass += allchars.charAt(Math.floor(Math.random() * allchars.length));
    }
    return genPass;
};

copyBtn.addEventListener("click", ()=>{
    if(passwordBox != "" || passwordBox.length >=1){

        navigator.clipboard.writeText(passwordBox.value);
        passwordBox.value = "Password Copied ✔"
    }
})
