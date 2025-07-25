let lenghtel = document.getElementById("lenght-el")
let volumeel = document.getElementById("volume-el")
let massel = document.getElementById("mass-el")
let numberInput  = document.getElementById("number")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

function allnumbers(){
    number = numberInput.value


    let meters = (number * 3.281).toFixed(3);
    let feets = (number / 3.281).toFixed(3);
    lenghtel.textContent = ` ${number} meters = ${meters} feet | ${number} feet = ${feets} meters`

    let liter = (number * 0.264).toFixed(3);
    let gallon = (number / 0.264).toFixed(3);
    volumeel.textContent = ` ${number} liters = ${liter} gallons | ${number} gallons = ${gallon} liters`


    let kilogram = (number * 2.204).toFixed(3);
    let pound = (number / 2.204).toFixed(3);
    massel.textContent = ` ${number} kilos = ${kilogram} pounds | ${number} pounds = ${pound} kilos`

}