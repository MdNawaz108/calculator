import inquirer from "inquirer";
let num1 = await inquirer.prompt({
    type: "number",
    name: "firstNumber",
    message: "enter first number"
});
console.log(num1.firstNumber);
