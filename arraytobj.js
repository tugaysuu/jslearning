const array = ['ali', 'ayşe', 'batuhan', 'emre', 'zeynep'];

const object = Object.assign(array.map(a => ({Name : a})));

console.log(...object);
