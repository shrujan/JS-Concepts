// loop through promises and get reaponse
// RUN ON BROWSER

const urlList = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/comments"
];

const promiseList = [];

   // fetch returns a promise and push them in an array
   urlList.forEach(url => {
        promiseList.push( 
            fetch(url)
        )
   });

   // basic for of loop
   for (url of urlList){
        console.log(url)
   }

   for await (let req of promiseList)  {
       let data = await req.json();
       console.log(data)
   }