import { db } from "./DB/tasksdb.js";
import  input  from "analiza-sync";
import {
  createtask,
  deleteTask,
  editTask,
  getTask,
  sortByDefault,
  sortReversDate,
} from "./utils/allFunctionsOfTasks.js";


const menu = {
  create_task: "Create task",
  edit_task: "Edit task",
  delete_task: "Delete task",
  get_task: "Get task",
  get_tasks_sorted: "get tasks sorted",
  exit: "exit"
};
const menu_sorted_tasks = {
  default: "sort by date",
  reversed_date: "sort by reversd date",
};

let input1;
let input2;
let input3;
let inputname;

function main_game(menu) {
  console.log("Hello to task manager");
  let userinput;
  do {
    let i = 0;
    Object.keys(menu).forEach((key) => {
      i++;
      console.log(`${i} ${menu[key]}\n`);
    });

    userinput = input("Enter your choice: ");
    if (userinput == "1") {
      input1 = input("Enter your name: ");
      input2 = input("Enter the description of the task: ");
      input3 = input("Choose the status,  New or In working or Done: ");
      createtask(input1, input2, input3);
    }
    if (userinput == "2") {
      input1 = input("Enter the task name you want to edit: ");
      input2 = input("Enter the description you want to update: ");
      input3 = input(
        "Enter the status you want to update,  New or In working or Done: "
      );
      editTask(input1, input2, input3);
    }
    if (userinput == "3") {
      inputname = input("Enter the task name you want to delete: ");
      deleteTask(inputname);
    }
    if (userinput == "4") {
      input1 = input("Enter the name of the task you want to see: ");
      getTask(input1);
    }
    if (userinput == "5") {
      let j = 0;
      Object.keys(menu_sorted_tasks).forEach((key) => {
          j++;
          console.log(`${j} ${menu_sorted_tasks[key]}\n`);
        });
        input1 = input("Enter your choice: ");
        if (input1 == "1") {
          sortByDefault(db);
          if (input1 == "2") {
            sortReversDate(db);
          }
        }
    }
    if (userinput == "6") {
        console.log(" Good bye")
      break;
    }
  } while (userinput !== "6");
}

main_game(menu)

