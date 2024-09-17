/*
The setTimeout() method calls a function after a number of milliseconds
1 second = 1000 milliseconds

The clearTimeout method prevents a function from executing.
 */
// const timerIdentificationNumber = setTimeout(sayHello, 400)
// function sayHello(){
//     console.log("hello world")
// }
// // clearTimeout(timerIdentificationNumber)
// clearTimeout(sayHello)
// alert("hello am the goat")


// async function downloadFile(){
//     const resp = await fetch('https://learn.zone01kisumu.ke/git/root/public/raw/branch/master/subjects/ascii-art/shadow.txt')
//     const data = await resp.text()
//     console.log(data)
// }
// downloadFile()

const f = fetch("https://jsonplaceholder.typicode.com/posts/");
let items = []
f.then(res => res.json()).then(data => items.push(data)).catch(err => console.log(err));

const postList = document.getElementById("post-list");
const pageInfo = document.getElementById('page-info');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

const itemsPerPage =  10;
function displayPosts(page){
    // calculate start and end index for the post on this page
    const sIndex = (page - 1) * itemsPerPage;
    const eIndex = sIndex + itemsPerPage;

    // clear the current posts
    postList.innerHTML = '';

    // loop through the post for the current page and display item
    const pagePosts = posts.slice(sIndex, eIndex);


}