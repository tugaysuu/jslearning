let team1 = ["ali", "ayşe", "fatma"];
let team2 = ["fatma", "zeynep", "batuhan"];

const allstarteam = new Set([...team1, ...team2]);

const allstarray = [...allstarteam]

console.log(allstarray)