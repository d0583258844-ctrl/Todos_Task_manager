import { db } from "../DB/tasksdb.js";

export function sortByDefault(db) {
  return db.sort((a, b) => b.Date - a.Date);
}
