const fetch = require("node-fetch");

// async await is syntactical sugarcoating to promises
// no catch block so need to use try catch 

// async function returns a promise
// await shold be inside async function onlu
async function fetchData(url) {
   const resp = await fetch(url);

    //even if this is the data parsed the function returns only promise 
   const data = await resp.json();      
   return data;
}

const urlList =  [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums",
    "https://jsonplaceholder.typicode.com/comments"
];

// did not add await here as this function is not async as no promise is returned
 const  fetchAllData  = (urlList) =>  {
    let list = []
    urlList.forEach(url => {
         list.push( fetchData(url));
    });

    // this promise is needed as async function returns only promise not data 
    Promise.all(list)  
        .then((res) => {
            console.log(res)
        })

}   

// added async here as a promise returns something
const  fetchAllData1 = async (urlList) =>  {
    let list = []
    urlList.forEach(url => {
         list.push( fetchData(url));
    });

    let dataArr = await Promise.all(list)  
    .then((res) => {
        return res
    })

    console.log(dataArr)
}   

fetchAllData(urlList)
fetchAllData1(urlList);