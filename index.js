#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to my cli ATM");
let myBalance = 10000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your pin",
        type: "number"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("Correct Pin");
    let operationAns = await inquirer.prompt([
        {
            name: "operations",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "Check Balance", "Fast Cash"]
        }
    ]);
    if (operationAns.operations == "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "How much do you want to withdraw?",
                type: "number"
            }
        ]);
        if (amountAns.amount <= myBalance) {
            myBalance -= amountAns.amount;
            console.log(`\tYour remaining Balance Is: $${myBalance}\n`);
        }
        else {
            console.log(`\t"Insufficient Balance"\n`);
        }
        ;
    }
    else if (operationAns.operations == "Check Balance") {
        console.log(`\tYour Balance Is: $${myBalance}\n`);
    }
    else if (operationAns.operations == "Fast Cash") {
        let fastCashAns = await inquirer.prompt([
            {
                name: "fastCash",
                message: "How much amount you want to fast cash: ",
                type: "list",
                choices: [
                    1000, 2000, 4000, 10000
                ]
            }
        ]);
        myBalance -= fastCashAns.fastCash;
        console.log("You have successfully completed your transaction.\n");
        console.log(`\tYour remaining Balance is: ${myBalance}\n`);
    }
}
else {
    console.log(`"Incorrect Pin"\n`);
}
;
