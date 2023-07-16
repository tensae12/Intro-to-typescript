import * as path from "path"
let age: number = 3

let firstName: string = 'John';
let isMarried: boolean = false
let noValue: null = null
let notAssigned: undefined = undefined
let today: Date  = new Date()


//Arrays,, assign string, number, boolean array 
let planets: string[] = ['Earth', 'Mars', 'jupitar', 'saturn'];
let numbers: number[] = [1, 2, 3, 4];
let completed: boolean[] = [false, true, true]



//****Classes****
class Phone{}
let phone: Phone = new Phone(); //create insrtance of phone

//****Object Literals****
let product: {name: string; price: number} = {
    name: 'pen',
    price: 15
}

//***Functions****/
const printer: (content: string) => void = (content:string)=>{ //part up to void is annotaton/description of the funtion, after the equal sign is the implmentation
    console.log(content)

}
// 1st case, functions that return the 'any' type

const place = '{"lat" : 45, "lon" : -70}';
const newLocation: {lat:number; lon:number}= JSON.parse(place) //-> added type annotations {lat:number; lon:number}
console.log(newLocation) // {lat:45, lon:-70}

//2nd case, Initialize variable later

const forecast = ['sunny', 'rain', 'wind', 'cloudy']
let isSunny: boolean;
for (let i = 0; i < forecast.length; i++){
    if(forecast[i] === 'sunny'){
        isSunny = true
    }
}
//3rd case when we have a variable whoes Type can't be inferred correctly
let tempratures = [8, 5, -2]
let subzero:boolean | number = false; //or statments with type annptation, we can aassign a single variable to different types

for (let i = 0; i < tempratures.length; i++){
    subzero = tempratures[i]
}


