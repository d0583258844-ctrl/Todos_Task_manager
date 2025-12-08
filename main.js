
import { db } from "./DB/tasksdb.js"
import { createtask } from "./utils/createTask.js";
import { deleteTask } from "./utils/deleteTask.js";
// import { editTask } from "./utils/editTask.js";
// import { getTask } from "./utils/getTask.js";
import { sortByDefault } from "./utils/sortTasks.js"


const menu  = {}


createtask("Da", "go shopping", "new");
createtask("fdh", "go shopping", "new");
console.log("--------------------------------");

// console.log(db);
// deleteTask("Da")
// deleteTask("fdh")
console.log(db);
// console.log("--------------------------------");

// getTask("fdh")
// getTask("fji")
// editTask("a", "go to hell", "in working")
// console.log(db);
sortByDefault(db)
console.log(db)