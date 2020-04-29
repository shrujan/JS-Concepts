const fetch = require("node-fetch");

const promise = new Promise((resolve, reject) => {
    if (success = true) {
        resolve('Success !!')
    }

    reject('fails')
});

// catch block must come at the end or else any error thrown below the catch block 
// will stop executions
promise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
}) 

//- ------------Simple API--------------------

const promise1 = new Promise((resolve, reject) => {
    return fetch('https://jsonplaceholder.typicode.com/todos')
            .then((resp) => {
                resolve(resp.json());
            })


})

promise1.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// ------------- multiple promise ------------

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello')
    }, 2000)
})

const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Shrujan')
    }, 2000)
})

const promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Shetty')
    }, 2000)
})

Promise.all([promise, promise2, promise3, promise4])
    .then((res) => {
        console.log(res)
    })

    // --------- multiple url at once -----------

    const urlList = [
        "https://jsonplaceholder.typicode.com/posts",
        "https://jsonplaceholder.typicode.com/albums",
        "https://jsonplaceholder.typicode.com/comments"
    ];
    
    
   Promise.all(urlList.map((url) => {
        fetch(url)
            .then((res) => {
                return res.json()
            })
            .then((res) => {
                console.log(res)
            })
   }))


   // ---------- OR ------------------

   const promiseList = [];

   // fetch returns a promise and push them in an array
   urlList.forEach(url => {
        promiseList.push( 
            fetch(url)
                .then((res) => {
                    return res.json();
                })
        )
   });

   console.log(promiseList.length)

   // execute all the promises and get the value
   Promise.all(promiseList)
            .then((res) => {
                console.log(res)
            })
            .catch((err) => {
                console.log(err)
            })
            .finally(() => {
                console.log('this code will run regardless')
            })