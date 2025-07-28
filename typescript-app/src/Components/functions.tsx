function callEmployee(){
    const name: string = "John Doe";
    const age: number = 25;
    const isEmployed: boolean = true;
    const gender: string = "Male"
    return (
        <div>
            <h1>Employee Details</h1>
            <p>Name: {name}, Age: {age}, Gender: {gender}</p>
            <p>Employed: {isEmployed ? "Yes" : "No"}</p>
        </div>
    );
}
export default callEmployee;

export function calculateTotal( //explicit
    price: number,
    quantity: number,
    discount: number
): number {
   return (price * quantity) - discount;
}

export function greet(message: string, name: string){ //inferred
    return `${message}, ${name}!`;
}
