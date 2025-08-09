const fullCharacters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|:;<>.?/"
]

const basicCharacters = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
]


let passwordsize = 8;
let leftbuttonel = document.getElementById("leftbutton-el");
let rightbuttonel = document.getElementById("rightbutton-el");
let specialCharToggle = document.getElementById("checkbox")
const statusEl = document.getElementById("status-el")

function getCharacterSet(){
    return specialCharToggle.checked ? fullCharacters : basicCharacters
}

function randomizer(){
    let chars = getCharacterSet()
    return chars[Math.floor(Math.random() * chars.length)] 
}

function getpassword(){
    let password = ""
    for(i=0; i< passwordsize; i++){    
    password += randomizer()
    }
    return password
}


function showpassword(){
    leftbuttonel.textContent = getpassword()
    rightbuttonel.textContent = getpassword()
}


leftbuttonel.addEventListener('click', () =>{
    navigator.clipboard.writeText(leftbuttonel.textContent)   
    showStatus()
    
    
})

rightbuttonel.addEventListener('click', () =>{
    navigator.clipboard.writeText(rightbuttonel.textContent)
    showStatus()
})

function showStatus() {    
    statusEl.textContent = "Şifre kopyalandı!" 
    setTimeout(() => {
        statusEl.textContent = ""
    }, 2000)
}

