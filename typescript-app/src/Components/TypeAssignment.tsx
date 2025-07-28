function TypeAssignment() {

    let message: string = "Hello, beautiful";
    let age: number = 30;
    let isMarried: boolean = true;
  return (
    <div>
      <h1>Type Assignment Component</h1>
      <p>This component is used to demonstrate type assignment in TypeScript.</p>
      <p>{message}, you are {age}</p>
    </div>
  );
}
export default TypeAssignment;