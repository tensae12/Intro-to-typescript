//function that takes in two arugument type numbers and return type : number
const multiply = (x: number, y: number): number => {
    return x * y;

};
//type annotation
const divide1 = (x: number, y: number): number => {
    return x / y;

};


//type inference from the return value
const divide2 = (x: number, y: number) => {
    return x / y;
};


/**
 * type annotation -- will through error since void type is annotated
 const divide_ = (x: number, y: number): void =>  {
    return x / y
 */


function sum(x: number, y: number): number {
    return x + y;
};

const subtract = function(x: number, y: number): number {
    return x - y
};

const printer_ = (content: string): void => {
    console.log(content)
}

const throwError = (content: string): void => {
    throw new Error(content);
}
//object
const earthquake = {
    date: new Date(),
    velocity: 4.5
}
const logVelocity = (earthquake: {date: Date; velocity: number}): void => {
    

}