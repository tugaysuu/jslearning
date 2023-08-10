const Gang = ['Ali', 'Batuhan', 'Ayşe', 'Emre', 'Zeynep'];

function cleanseArray(originalArray){
 
    return originalArray.map(item => { if (typeof item === 'string' && item.toLowerCase().startsWith('a')) 
    {
        return 'z' + item.slice(1);
    }  
    else {
        return item;
    }

} )
}

let newArray = cleanseArray(Gang);

newArray.sort()

console.log(newArray);