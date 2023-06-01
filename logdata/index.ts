import axios from 'axios'


//by creating a interface tell typescript the type of information we are going to expect to recieve back from the API
interface Post{
    userId: number;
    title: string;
    body: string;
}


const url =  'https://jsonplaceholder.typicode.com/posts/1'  //create a variable called URL and assign to the URL

// use axios to make a network request -- its going to make a HTTP get request to that URL and attempt to fetch that json data, we can chain on a .then that will be called when we get a response from the API
axios.get(url).then(res=>{
    console.log(res.data);

}) 

