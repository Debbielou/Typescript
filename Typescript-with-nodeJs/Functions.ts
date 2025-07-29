function message(message: string){
    console.log(message);
}

export { message };

function total(numbers:number[]): number {
    return numbers.reduce((acc, num) => acc + num);
}
export { total };

//callback function

export function callback(cb: ()=>void) {
    cb();
}

export function random() {
    console.log("This is a random function call.");
}

//object example
const obj: {
    name: string;
    version: string;
    add: (num1: number, num2: number) => number
} = {
    name: "TypeScript",
    version: "4.0",
    add: function(num1,num2){
        return num1 + num2;
    }
};
console.log(`Object Name: ${obj.name}, Version: ${obj.version}`)
console.log(obj.add(6,4));

//for function parameters, types must be explicitly shown

function student(name:string,age:number){
    return "My name is " + name + " & I'm " + age;
}
console.log(student("Jesse",30));