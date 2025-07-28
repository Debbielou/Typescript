function averageScores(rating: number[]): number {
    if (rating.length === 0) {
        return 0; // Return 0 if the array is empty to avoid division by zero
    }
    // Calculate the average score by summing all ratings and dividing by the number of ratings
    // Using reduce to sum the ratings
    // and then dividing by the length of the array
    // This ensures that the function works correctly even if the array is empty
    return rating.reduce((sum, rating) => {
        return sum + rating;
    }, 0)/rating.length;
}
export default averageScores;


export function updateComment(id: number, comment: string, comments: (string | number)[]): (string | number)[] {
    const index = comments.findIndex((_, i) => i + 1 === id); // Find the index based on 1-based ID
    if (index === -1) {
        return comments; // Return original array if ID not found
    }
    const newComments = [...comments]; // Create a shallow copy to avoid direct mutation
    newComments[index] = comment; // Update the comment in the new array
    return newComments; // Return the updated array
}
    
/* write a function which accepts 3 parameters: id-number, comment-string,comments-array of strings & numbers
it updates the comments array by replacing the first instance of id with a given comment
N.B your function should mutate the comments array directly rather than returning a new array
*/

export function addComment(id: number, comment: string, comments: (string | number)[]): void {
    // Find the index of the element to update.
    // We assume 'id' refers to a 1-based position (e.g., id=1 for the first element, id=2 for the second).
    // The findIndex method provides the 0-based index (i), so we check if i + 1 matches the given id.
    const index = comments.findIndex((_, i) => i + 1 === id);

    // If the id (position) is not found in the array, do nothing.
    if (index === -1) {
        return; // Exit the function as nothing needs to be updated.
    }

    // Directly mutate the comments array by replacing the element at the found index
    // with the new comment string.
    comments[index] = comment;
}

// Example of how you would use this function in a JavaScript/HTML context:
// Since the function mutates the array directly and returns void,
// you would call it first, and then use the modified 'myComments' array.

// Declare your comments array
let myComments: (string | number)[] = ["First Comment", "Old Comment", "Second Comment"];

// Call the function to update the array directly.
// For example, to update the comment at position 2 (which is "Old Comment" at index 1)
addComment(2, "Updated Comment", myComments);

// Now, 'myComments' array has been modified in place: ["First Comment", "Updated Comment", "Second Comment"]

/*
// If this were part of a larger application, especially in a framework like React,
// you would typically manage state, and direct mutation is generally avoided
// for state updates, but this function strictly follows your requirement.

import React, { useState } from 'react';

// The function as defined above
export function updateComment(id: number, comment: string, comments: (string | number)[]): void {
    const index = comments.findIndex((_, i) => i + 1 === id);
    if (index === -1) {
        return;
    }
    comments[index] = comment;
}

function MyAppComponent() {
    // In React, even with a mutating function, you'd often trigger a re-render
    // by creating a new array reference if the state needs to reflect the change.
    // However, if the function *must* mutate, you might force an update or
    // structure your state differently. For this example, we show the direct mutation.
    const [comments, setComments] = useState(["First Comment", "Old Comment", "Second Comment"]);

    const handleUpdateClick = () => {
        // Call the mutating function
        updateComment(2, "Updated Comment from React", comments);
        // To force React to re-render after mutation, you might create a new array
        // reference, or use a state update that triggers a re-render.
        // A common pattern is to spread the array to create a new reference:
        setComments([...comments]); // This forces a re-render with the mutated array
    };

    return (
        <div>
            <h1>Update Array</h1>
            <p>{comments.join(", ")}</p>
            <button onClick={handleUpdateClick}>Update Comments</button>
        </div>
    );
}
*/

