
let launchcode = {
  organization:'nonprofit',
  executiveDirector:'Jeff',
  percentageCoolEmployees:100,
  programsOffered: ['Web Development', 'Data Analysis', 'Liftoff'],
  launchOutput: function(numVal) {
    if((numVal % 2 === 0) && (numVal % 3 === 0) && (numVal % 5 === 0)) {
        return "LaunchCode Rocks!";
    } else if ((numVal % 2 === 0) && (numVal % 3 === 0)) {
        return "LaunchCode!"
    } else if ((numVal % 3 === 0) && (numVal % 5 === 0)){
        return "Code Rocks!";
    } else if ((numVal % 2 === 0) && (numVal % 5 === 0)){
        return "Launch Rocks!"
    } else if ((numVal % 2 === 0)) {
        return "Launch!";
    } else if ((numVal % 3 === 0)) {
        return "Code!";
    } else if ((numVal % 5 === 0)) {
        return "Rocks!";
  } else {
    return "Rutabagas! That doesn't work.";
  }
  return string;
}
}

module.exports = launchcode;

