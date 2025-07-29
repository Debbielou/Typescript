//Types

let courses: string = "TypeScript Course";
let duration: number = 30; // in hours
let isPublished: boolean = true;
let tags: string[] = ["typescript", "javascript", "programming"];
let isNull: null = null;
let isUndefined: undefined = undefined;
let anyType: any = "This can be anything";
let array: Array<string> = ["typescript", "javascript", "python"];

let tuple: [string, number] = ["TypeScript", 30]; // Tuple with string and number. It can hold a fixed number of elements with specified types.

//object type
let courseDetails: { title: string; duration: number; isPublished: boolean } =
    {
    title: "TypeScript Course",
    duration: 30,
    isPublished: true,
    };
    console.log(courseDetails);

    //Literal types
    let x: "mug" = "mug"; //string literal
    let y: 50 = 50; //number literal

    //Alias
    type User = {
        name: string
        age: number
        isEmployed: boolean
    }

    const person: User = {
        name: "Deborah",
        age: 20,
        isEmployed: false

    }
    console.log(person)
    console.log(person.name)

    //descriminating unions. Union of objects which share one or more identical properties
     type Usr = {
        username: string;
        id: string;
     }

     type Res = 
     {status:'success', data: Usr} |
     {status:'error',error_message: string} |
     {status:'pending',expiry_date: Date}
     
     let response: Res = {
        status: 'success',
        data : {
        username: "nakamad",
        id: "1000-01n"
        }
        
     }

     function returnResponse(response: Res): Res { 
        return response;
    }
    
    // Example usage to demonstrate it works
    const myResponse = returnResponse(response);
    console.log(myResponse);
    
    const errorResponse: Res = {
        status: 'error',
        error_message: 'Something went wrong!'
    };
    console.log(returnResponse(errorResponse));
    
    const pendingResponse: Res = {
        status: 'pending',
        expiry_date: new Date()
    };
    console.log(returnResponse(pendingResponse));
    
    
    function processResponse(res: Res) {
        switch (res.status) {
            case 'success':
                console.log(`Success! User: ${res.data.username}, ID: ${res.data.id}`);
                break;
            case 'error':
                console.log(`Error: ${res.error_message}`);
                break;
            case 'pending':
                console.log(`Pending until: ${res.expiry_date.toLocaleDateString()}`);
                break;
        }
    }
    
    console.log("\nProcessing responses:");
      processResponse(myResponse);
      processResponse(errorResponse);
      processResponse(pendingResponse);

      //Generic types

      interface StorageItem<T> {
        key: string
        data: T
      }

      const item: StorageItem<string> = {
        key: "fname",
        data: "demo of generics"
      }
      console.log(item)

      type Greeting<Z,Y> = {
        lang: Z
        response: Y
      }

      const morning: Greeting<string, string> = {
        lang: "yo",
        response: "men"
      }
      console.log(morning)

      type MyArray<X> = X[]
      const myArray: MyArray<number> = [1,2,3,4]
      console.log(myArray)