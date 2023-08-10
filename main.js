const Gang = ['Ali', 'Batuhan', 'Ayşe', 'Emre', 'Zeynep'];

function cleanseArray(originalArray){

    return originalArray.filter(item => typeof item === 'string' && item.toLowerCase().startsWith('a'));

}

let newArray = cleanseArray(Gang);


console.log(newArray);