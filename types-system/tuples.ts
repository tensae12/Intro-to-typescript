import { cursorTo } from "readline";

const track = {
    genre: 'rock',
    exclusive: false,
    duration: 120,
};

//represent the above object using Tuple

const track1 = ['rock', false, 120]; 
/*this is an array and we have to keep the order of element
  inside of the array to match the type, if not keep the order, our data model will break down, 
  so in stead of defining it using simple array we will use Tuple, and by adding annotation to the existing code
  we can turn it to tuple */
const track2: [string, boolean, number] = ['rock', false, 120]; //if we change the ordering, typescript will complain 

//track2 can also be written better by creating type alias

type Track = [string, boolean, number] //type alias -- brand new type

const track3: Track = ['rock', false, 120];
const hippop: Track = ['hip-pop', true, 100];


const currensiesToDollar: [number, number] = [1.38, 1.16]; //hard to look at and understand the value representation 
//however below, in object format like  since we are forced to put in a key its immediately obvious.

const currensies2Dollar = {
    sterling: 1.38,
    euro: 1.16,
}
//in general, anytime we want to model the record in our application, we might stick to objects as opposed to a tuple
