const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerSet = "abcdefghijklmnopqrstuvwxyz"
const numberSet = "0123456789"
const symbolSet = "~!@#$%^&*()_+/?-"
const passBox = document.getElementById("pass-box")
const totalChar = document.getElementById("total-char")
const upperInput = document.getElementById("upper-case")
const lowerInput = document.getElementById("lower-case")
const numberInput = document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")
const getRandomData = (dataSet) => {
    return dataSet[Math.floor(Math.random() * dataSet.length)]
}
const generatePassword = (password = "") => {
    if(upperInput.checked) {
        password += getRandomData(upperSet)
    }
    if(lowerInput.checked) {
        password += getRandomData(lowerSet)
    }
    if(numberInput.checked) {
        password += getRandomData(numberSet)
    }
    if(symbolInput.checked) {
        password += getRandomData(symbolSet)
    }
    if(password.length < totalChar.value) {
        return generatePassword(password)
    }
    passBox.innerText = truncateString(password, totalChar.value)
} 
document.getElementById("btn").addEventListener(
    "click",
    function() {
        generatePassword();
    }
)
function truncateString(str, num) {
    if(str.length > num) {
        let subStr = str.substring(0, num);
        return subStr;
    } 
    else
    {
        return str;
    }
}
let  popup=document.getElementById("popup");
function openPopup(){
popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
    }
var enin;
function getcon(){
    var paswd=document.getElementById("pass-box").textContent;
   enin=document.getElementById('txtOther').value;
    console.log(paswd);
    console.log(enin);
    let data={
        loginid:enin,
        password:paswd
    }
    let jsonData = JSON.stringify(data);
    let blob = new Blob([jsonData],{type:"application/json"})
    let url = URL.createObjectURL(blob);
    let link = document.createElement("a");
    link.setAttribute('href',url);
    link.setAttribute('download',"data.json");
    link.click();
           
}