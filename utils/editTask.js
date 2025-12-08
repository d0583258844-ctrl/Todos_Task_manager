import { db } from "../DB/tasksdb.js";

export function editTask(name, description, status) {
  if (!description && !status) return "No data to update";
  db.forEach((task) => {
    if (task.name === name) {
      if (!status && description) task.description = description;
      else if (!description && status) {
        task.status = status;
      } else {
        task.status = status;
        task.description = description;
      }
      return task;
    } else console.log("Task name dont found!");
  });
}
