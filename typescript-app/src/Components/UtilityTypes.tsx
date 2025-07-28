interface Bebe {
    yomena: string;
    edad: number;
 
}

function Babygal () {
    //mandatory
   let x:Bebe = {
   yomena: "Debz",
   edad: 10
   }

   //all properties are optional
   let y:Partial<Bebe> = {
       yomena: "Deborah"
   }

   return (
    <>
        <h1>Babygal Component</h1>
        <p>Name: {x.yomena}</p>
        <p>Age: {x.edad}</p>
        <p>Partial Name: {y.yomena}</p>
        {/* You can add more JSX elements or components here as needed */}
    </>
   )
}

export default Babygal;

//omit
interface Person {
    name: string;
    age: number;
    location?: string;
  }

  const bob: Omit<Person, 'name'> = {
    age: 30
  };
    
  //Exclude
  