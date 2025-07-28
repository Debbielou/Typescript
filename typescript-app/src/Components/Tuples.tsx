/* write a createTicket function. It takes a prevTicket as a number and a comment as a string and 
returns a tuple. 
The tuple should return;
a) the previous ticket number incremented by 1,
b) the comment passed in, and a boolean for if the comment contains the word "urgent"(case sensitive).
*/

export function createTicket (
    prevTicket: number,
    comment: string
    ): [number, string, boolean] {
    return [++prevTicket, comment, comment.includes("urgent")];
    }
       