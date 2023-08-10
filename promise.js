const myPromise = new Promise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 2);
  if (rand === 0) {
    resolve();
  } else {
    reject();
  }
});

myPromise.then(() => console.log("success"));
myPromise.catch(() => console.error("something is wrong."));
