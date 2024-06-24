let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";
//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
cabinetOne = food.split(',').sort();
cabinetTwo = equipment.split(',').sort();
cabinetThree = pets.split(',').sort();
cabinetFour = sleepAids.split(',').sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinetOne, cabinetTwo, cabinetThree, cabinetFour];
for (let i = 0; i < cargoHold.length; i++) {
    console.log(cargoHold[i]);
}
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let userInput = prompt("Please select a cabinet (0 - 3): ");


//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
//let cargoOutput  = ""
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
