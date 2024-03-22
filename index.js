#!/usr/bin/env node
import inquirer from "inquirer";
const check = await inquirer.prompt([
    { message: "Enter number", type: "number", name: "fnumber" },
    { message: "Enter number", type: "number", name: "lnumber" },
    {
        message: "Select the operation that you want to do",
        type: "list",
        name: "operators",
        choices: ["+", "-", "*", "/"],
    },
]);
if (check.fnumber && check.lnumber && check.operators) {
    if (check.operators === "+") {
        console.log(`${check.fnumber + check.lnumber} `);
    }
    else if (check.operators === "-") {
        console.log(`${check.fnumber - check.lnumber}`);
    }
    else if (check.operators === "/") {
        console.log(`${check.fnumber * check.lnumber}`);
    }
    else {
        console.log(`${check.fnumber / check.lnumber}`);
    }
}
else {
    console.log("Fill empty fields");
}
// if (check.fnumber) {
//   if (check.fnumber < 5) {
//     console.log(`Your number is ${check.fnumber}`);
//   } else {
//     console.log("Enter value less than 5");
//   }
// } else {
//   console.log("Fill empty fields");
// }
// console.log(check)
