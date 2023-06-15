/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputVal = document.getElementById("input-val")
const convertBtn = document.getElementById("convert-btn")
let lengthEl = document.getElementById("length-input")
const volumeEl = document.getElementById("volume-input")
const massEl = document.getElementById("mass-input")

convertBtn.addEventListener("click", function(){
    console.log("working!")
        lengthConversion(inputVal.value)
        volumeConversion(inputVal.value)
        massConversion(inputVal.value) 
})


function lengthConversion(value){
    let lengthValue = value
    lengthEl.innerHTML = `${lengthValue} meters = ${(Number(lengthValue)*3.281).toFixed(3)} feet | ${lengthValue} feet = ${(Number(lengthValue)*0.3048).toFixed(3)} meters`
    //20 meters = 65.616 feet | 20 feet = 6.096 meters
}

function volumeConversion(value){
    let volumeValue = value
    volumeEl.innerHTML = `${volumeValue} liters = ${(Number(volumeValue)*0.264).toFixed(3)} gallons | ${volumeValue} gallons = ${(Number(volumeValue)*3.785).toFixed(3)} liters`
    //20 liters = 5.284 gallons | 20 gallons = 75.708 liters
}

function massConversion(value){
    let massValue = value
    massEl.innerHTML = `${massValue} kilos = ${(Number(massValue)*2.204).toFixed(3)} pounds | ${massValue} pounds = ${(Number(massValue)*0.4535).toFixed(3)} kilos`
    //20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
}
