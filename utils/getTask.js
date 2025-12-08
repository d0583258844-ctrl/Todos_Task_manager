import { db } from "../DB/tasksdb.js";

export function getTask(name) {
  console.log("the task you got");
  if (db.find((task) => task.name === name)) {
    console.log(db.filter((task) => task.name === name));
  } else {
    console.log("not found name");
  }
}
