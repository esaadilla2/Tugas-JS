let bb = 90
let tb = 1.7

let bmi = bb / (tb * tb)
let stat = null

if (bmi < 18.5){
    stat = `kurang gizi`
}
if (bmi >= 18.5 && bmi < 25 ){
    stat = `normal`
}
if (bmi >= 25 && bmi < 30){
    stat = `kelebihan berat badan`
}
if (bmi > 30){
    stat = `obesitas`
}

console.log(`Status BMI Rhodey adalah ${stat}`);