export function sortByDefault(db) {
  db.sort((a, b) => a.date - b.date);
}

export function sortReversDate(db) {
  db.sort((a, b) => b.date - a.date);
}
