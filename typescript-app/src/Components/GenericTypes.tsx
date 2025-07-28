export function getRandom<Item>(arr: Item[]): Item {
    let random = arr[2];
    return random;

}

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const scores = [85, 90, 78, 92, 88];

const randomFruit = getRandom<string>(fruits);
const randomScore = getRandom<number>(scores);

type User = {
    name: string;
    age: number;
}

const users: User[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];

const randomUser = getRandom<User>(users);

function getFromStorage<T>(key: string): T | undefined {
    let item: T | undefined = undefined; // Simulating storage retrieval
    return item;
}

getFromStorage<{name: string}>('user-222'); //user object
getFromStorage<string>('settings');

interface storageItem <X>{
key: string;
data: X;
}

class StorageItem<X> {
    key: string;
    data: X;

    constructor(key: string, data: X) {
        this.key = key;
        this.data = data;
    }
}

const user: StorageItem<User> = {
    key: '50', 
    data: {name: 'Debbie',
        age: 30
    }
}

const lugTranslation = {
    "hello": "hola",
    "goodbye": "adiós",
    "please": "por favor",
    "thank you": "gracias"
}

export function translateToSpanish(word: keyof typeof lugTranslation): string {
    return lugTranslation[word];
}
          