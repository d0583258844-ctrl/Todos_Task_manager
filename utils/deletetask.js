import { db } from "../DB/tasksdb.js";

export function deleteTask(name) {
  if (db.find((task) => task.name === name)) {
    db.splice(
      db.findIndex((task) => task.name === name),
      1
    );
  }
  console.log(`Your task ${name} deleted seccsefully`);
}
