
const client = {
    id: '12344',
    age: 25,
    BMI: 1.5,
    condition: {
        mass: 80,
        height: 185
    
    },
    setBMI(mass: number, height: number): void{
        this.BMI = mass / (height * height);
    },
};
//doing destructur to access variables definned in object
//by doing normal destructur instead of doing const id = client.id
const {id, age}: { id: string, age: number } = client;
//destructuring out mass and height
//right after destruct, we can put in a colon and describe the structure of the client obj
const {condition: {mass: client_mass, height: client_height},
}: {condition: {mass: number, height: number}} = client

console.log(client_height)

//more example on destructure 
const person: { name: string, address: { city: string, country: string}}  = {
    name: "Dan",
    address: {
        city: "Van",
        country: "Can"
    }
}

const { name: personName, address: personAdress } = person;

console.log("Name", personName, "address", personAdress);