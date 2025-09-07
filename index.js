const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];
console.log(characters.length)
let password1El = document.getElementById("password1")
let password2El = document.getElementById("password2")
document.getElementById("generate").onclick = addPasswords
document.getElementById("password1").onclick = CopyOnClick1
document.getElementById("password2").onclick = CopyOnClick2

function addPasswords() {
    password1El.textContent = getNewPassword()
    password2El.textContent = getNewPassword()
}

function getNewPassword() {
    let charCount = 15
    let password = ""
    for (let i = 0; i < charCount; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters[randomIndex]
    }
    return password
}

function CopyOnClick1() {
    copyText = document.getElementById("password1").innerText
    console.log(copyText)
    navigator.clipboard.writeText(copyText);
    alert("Password: " + copyText + " copied to clipboard");
}

function CopyOnClick2() {
    copyText = document.getElementById("password2").innerText
    console.log(copyText)
    navigator.clipboard.writeText(copyText);
    alert("Password: " + copyText + " copied to clipboard");
}