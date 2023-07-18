//if initializing an empty array, we have to have an annotation
// if we are initializing our arrray with some connent already inside of it, then we dont need that annotation
const favoriteShows: string[] = ["Friends", "The Office", "Breaking Bad"];

//array assigning it a variety of of new data object instances
const dates = [new Date(), new Date()]

//2D array
const meals = [['breakfast'], ['lunch'], ['dinner']]

/*type system help with infrence when extracting values, const office: string -- type script knows that this
variable is going to be string 
*/
const office = favoriteShows[1]
const lastKnown =  favoriteShows.pop()
console.log(lastKnown)


//prevent incompatible values
// example =>  favoriteShows.push(100) => this will through an error

//help with methods
favoriteShows.map((show: string) => {
    return show.concat();
})

//Arrays with multiple types
const holidays:(Date | string)[] = [];
holidays.push("2022-01-01")
holidays.push(new Date())


