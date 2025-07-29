import { message } from './Functions';
import { total } from './Functions';
import { callback, random } from './Functions';

message("Welcome to the TypeScript course!"); // message function call

const numbers = [1, 2, 3, 4, 5]; // Example array of numbers
const sum = total(numbers); // total function call
console.log(`The total of the numbers is: ${sum}`);

callback(random); // This will call the random function