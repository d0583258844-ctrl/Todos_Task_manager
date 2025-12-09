const statuses = ["New", "In working", "Done"];

export function sortTasksByStatus(db) {
console.log(db.sort((a, b) => statuses.indexOf(a.status) - statuses.indexOf(b.status)));
}
