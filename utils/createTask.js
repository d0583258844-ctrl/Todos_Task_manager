import { nanoid } from "nanoid";
import { pushToDb } from "../DB/tasksdb.js";

export function createtask(name, description, status) {
  let task = {
    name,
    id: nanoid(),
    date: Date.now(),
    description,
    status,
  };
  pushToDb(task);
  console.log("task created");
}
