// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test ("should have property named organization with value of nonprofit", function(){
    expect(launchcode.organization).toBe('nonprofit');
  });

  test ("should have property named executiveDirector with value of Jeff", function(){
    expect(launchcode.executiveDirector).toBe('Jeff');
  });

  test ("should have property named percentageCoolEmployees with value of 100", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("should contain key 'programsOffered' with array values 'Web Development, Data Analysis, Liftoff'.", function () {
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test('should pass a number that is ONLY divisible by 2', function() {
    let output = launchcode.launchOutput(2);
    expect(output).toBe('Launch!');
  });

  test('should pass a number that is ONLY divisible by 3', function() {
    let output = launchcode.launchOutput(3);
    expect(output).toBe('Code!');
  });
  
  test('should pass a number that is ONLY divisible by 5', function() {
    let output = launchcode.launchOutput(5);
    expect(output).toBe('Rocks!');
  });

  test('should pass a number that is divisible by 2 and 3' , function() {
    let output = launchcode.launchOutput(6);
    expect(output).toBe('LaunchCode!');
  });

  test('should pass a number that is divisible by 3 and 5', function() {
    let output = launchcode.launchOutput(15);
    expect(output).toBe('Code Rocks!');
  });

  test('should pass a number that is divisible by 2 and 5', function() {
    let output = launchcode.launchOutput(10);
    expect(output).toBe('Launch Rocks!');
  });

  test('should pass a number that is divisible by 2, 3, and 5', function() {
    let output = launchcode.launchOutput(30);
    expect(output).toBe('LaunchCode Rocks!');
  });

  test('should pass a number that is NOT divisible by 2, 3, or 5', function() {
    let output = launchcode.launchOutput();
    expect(output).toBe("Rutabagas! That doesn't work.");
  });
});