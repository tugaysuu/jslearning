//const arara = ['Ali', 'Armut', 'Marmelat', 3, null, 'Koolaid'];

//const dororo = arara.map(getArray);

//function getArray(item){
//    return [item]
//}

//console.log(dororo)

//---------------------------------------------------------------



//const arara = [5, 15, 25, 3, -2, -1];

//const dororo = arara.reduce(getArray);

//function getArray(total, num){
//    return total +num
//}

//console.log(dororo)



//---------------------------------------------------------------


//const Arr1 = [1, 2, 23, 2342, 2341];

//const Arr2 = [1, 234, 234123, 23416, 236113];

//let Arr3 = [new Set([...Arr1, ...Arr2])]

//console.log(Arr3);


//---------------------------------------------------------------


//const fruits = ["Banana", "Orange", "Apple", "Mango"];
//let text = fruits.constructor;
//console.log(text)



//---------------------------------------------------------------

//function factorial(n) {
//    if (n === 0 || n === 1) {
//      return 1;
//    } else {
//      return n * factorial(n - 1);
//    }
//  }

//  console.log(factorial(170))


//---------------------------------------------------------------


/* function getData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(46);
    }, 1);
  });
}

async function start() {

const result = await getData()
console.log(result)

}

async function start2() {

  getData()
  .then(result => console.log(result))
  
  }

start() */

//---------------------------------------------------------------
/* this doesnt work yet so try at home
async function start() {
  const data = await fetch('http://api.weatherapi.com/v1')
  const result = await data.json()
  console.log(result)
}

start() */

//---------------------------------------------------------------
/* 
async function start() {
  fetch('http://api.weatherapi.com/v1')
    .then(data => data.json())
    .then(result => {
      console.log(result.properties)
  })
}  
  start()
 */

  //---------------------------------------------------------------


  /* function getData() {
    return new Promise(function(resolve, reject) {
      setTimeout(() => {
        resolve('here is your data')
        //reject('something went wrong!')
      }, 1)
    })
    }

    async function start() {
      try {
        const result = await getData()
      } catch (error) {
        console.log(`ERROR: ${error}`)
      }
    }
  
    async function start2() {
      const result = await getData()
      console.log(result)
       // .catch(error)
       //   console.log(`ERROR: ${error}`)
    }

    start2() */

    //---------------------------------------------------------------

    const url = 'http://worldtimeapi.org/api/timezone/America/New_York'

    async function getData(){
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
    }

    getData()