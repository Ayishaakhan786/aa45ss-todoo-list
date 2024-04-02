#! /usr/bin/env node
import inquirer from "inquirer";
let todoList = [];
let conditions = true;
console.log("\n \t Welcome to my Todo-list application\n");
while (conditions) {
    let addtask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: "Please enter your new task:"
        }
    ]);
    todoList.push(addtask.task);
    console.log(`${addtask.task} task is added in list successfully.`);
    let addMoreTask = await inquirer.prompt([
        {
            name: "addmorework",
            type: "confirm",
            message: "Do you want to add more task?",
            default: "false"
        }
    ]);
    conditions = addMoreTask.addmorework;
}
console.log("Your updated Todo-list", todoList);
