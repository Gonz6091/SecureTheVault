//You are building a vault that requires three mathematical calculations to generate the three codes in a combination. Use the JavaScript console or the script block within an HTML page to create three variables. Each variable will be the result of each calculation (three in total). The combination of the lock is 10 - 40 - 39. You must use three different arithmetic operators that will generate each individual number, then display the combination on the HTML page, or in an alert popup.

// Steps to Complete
// 1. Create a unique arithmetic operation for code1
// 2. Create a unique arithmetic operation for code2
// 3. Create a unique arithmetic operation for code3
// 4. Store the results in three different variables
// 5. Display the combination in an alert popup

// //Step 1 
// // Create a unique arithmetic operation for code1
const code1 = 20 / 2;
console.log(code1);

// //Step 2
// // Create a unique arithmetic operation for code2
const code2 = 10 * 4;
console.log(code2);

// //Step 3 
// // Create a unique arithmetic operation for code3
const code3 = 78 - 39;
console.log(code3);

// //Step 4 & 5
// // Store the results in three different variables then include those variables in the template literal
alert(`You have received this message because you have been chosen to open an important vault. Here is the secret combination: ${code1} - ${code2} - ${code3}`);

