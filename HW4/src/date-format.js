import { DateTime } from "luxon";

const now = DateTime.now()

// DD-MM-YYYY
// const { year, month, day } = now
// console.log(`${day}-${month}-${year}`);

console.log("Формат 1 (DD-MM-YYYY):", now.toFormat("dd-MM-yyyy"));
console.log("Формат 2 (MMM Do YY):", now.toFormat("MMM d',' yy")); 
console.log("Формат 3 (dddd):", now.toFormat("cccc"));