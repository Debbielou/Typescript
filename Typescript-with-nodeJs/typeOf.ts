
type Person = {
    name: string
    age: number
    email: string
    hobbies?: [string]
}

let key : keyof Person;

key = 'name';   
console.log(key);

const myChildren = {
    fname: "Lexi",
    lname: "Luzinda",
    skill: "plumbing",
    married: true

}

let jammy: keyof typeof myChildren; // cant use keyOf directly on myChildren coz its a variable

jammy = 'fname'; 
console.log(jammy); 

jammy = 'married';
console.log(jammy);
