import axios from 'axios'


//by creating a interface tell typescript the type of information we are going to expect to recieve back from the API
//this will also help us catch type errors-- typescript will anayze our code using the type annotation/labeling
interface Post{
    userId: number;
    title: string;
    body: string;
}


const url =  'https://jsonplaceholder.typicode.com/posts/1'  //create a variable called URL and assign to the URL

// use axios to make a network request -- its going to make a HTTP get request to that URL and attempt to fetch that json data, we can chain on a .then that will be called when we get a response from the API
axios.get(url).then(res=>{
    const post = res.data as Post
    const userId = post.userId
    const title = post.title
    const body = post.body

    printPost(userId, title, body)
    
    
})


const printPost = (userId: number, title: string, body: string) => {   //funtion to print 
    console.log(`
        User Id is ${userId}
        Title of the post: ${title}
        Post Content: ${body}

    `)

}
       
    



/*
data from the API
{
  "userId": 1,
  "id": 1,
  "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
}
*/