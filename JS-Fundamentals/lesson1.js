// hello world

console.log("Hello World");

//Variables

//Variables declared by let are only available inside the block where they’re defined.
// Variables declared by var are available throughout the function in which they’re declared.

let familySize = 2;
let plannedDistanceToDrive = 100;

function recommendedCar(familySize,plannedDistanceToDrive) {
    
    if(familySize <= 4){
        return "Tesla";
    }
    else if(familySize <= 4 && plannedDistanceToDrive >= 200) {
        return "Toyota Camry";
    }else {
        return "Minivan";
    }

}

console.log(recommendedCar(familySize, plannedDistanceToDrive));