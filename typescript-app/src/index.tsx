import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import TypeAssignment from './Components/TypeAssignment';
import callEmployee from './Components/functions';
import { calculateTotal } from './Components/functions';
import { greet } from './Components/functions';
import { safeSquareWithDefault } from './Components/unions';
import { setPriority } from './Components/unions';
import { updateEmploymentStatus } from './Components/unions';
import { logMessage } from './Components/unions';
import averageScores from './Components/arrays';
import { updateComment } from './Components/arrays';
import { SendMail } from './Components/objectTypeLiterals';
import { getRandom} from './Components/GenericTypes';
import { translateToSpanish } from './Components/GenericTypes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
       <></>
    {/* <TypeAssignment /> */}
    {/* {callEmployee()} */}
    {/* <div>
      <h1>Calculate Total Example</h1>
      <p>Total: {calculateTotal(100, 2, 10)}</p>
    </div> */}
    {/* <div>
      <h1>Greeting Example</h1>
      <p>{greet("Hello", "Alice")}</p>
      </div> */}
      {/* <div>
      <h1>Safe Square Example</h1>
      <p>Square of 5: {safeSquareWithDefault(5)}</p>
      </div> */}
      {/* <div>
      <h1>Set Priority Example</h1>
      <p>Priority Level for 'high': {setPriority('high')}</p>
      <p>Priority Level for 'urgent': {setPriority('critical')}</p>
      </div> */}
      {/* <div>
      <h1>Update Employment Example</h1>
      <p>{updateEmploymentStatus('dcfhsnk')}</p>
      </div> */}
      {/* <div>
      <h1>Log Message Example</h1>
      <p>{logMessage('info: This is a log message [source_1]')}</p>
      </div> */}
      {/* <div>
      <h1>Average Scores Example</h1>
      <p>Average Score: {averageScores([85, 90, 78, 92, 88])}</p>
      </div> */}
      {/* <div>
      <h1>Update Array</h1>
      <p>{updateComment(1, "Updated Comment", ["First Comment", "Old Comment", "Second Comment"]).join(", ")}</p>
      </div> */}
      <>
      {/* <h1>Send Mail Example</h1>
      <p>
        {SendMail({
          from: "denakamatte@gmail.com\n", 
          to: ["recipient1@example.com", "recipient2@example.com", "denakamatte@gmail.com"], 
          subject: "Important Project Update\n", 
          body: "Hi team, please review the attached project update document by end of day.\n", 
          urgent: true, 
        })}
      </p>
      <p>
        {SendMail({
          from: "info@yourcompany.com",
          to: ["customer@example.com"],
          subject: "Your Order Confirmation",
          body: "Thank you for your recent purchase. Your order #XYZ has been confirmed and will be shipped soon.",
          urgent: false,
        })}
      </p>
    </> */}
 
      {/* <h1>Generic Types Example</h1>
      <p>Random Fruit: {getRandom(['Apple', 'Banana', 'Cherry'])}</p>
      <p>Random Score: {Math.floor(Math.random() * 100)}</p>
      <p>Random User: {JSON.stringify({ name: 'John Doe', age: 30 })}</p>
      <p>Storage Item: {JSON.stringify({ key: 'user-222', data: { name: 'Alice' } })}</p>
      <p>Storage Item: {JSON.stringify({ key: 'settings', data: 'default-settings' })}</p> */}
      <div>
            <h1>Spanish Translations</h1>
            <p>
                The word "hello" in Spanish is: <strong>{translateToSpanish("hello")}</strong>
            </p>
            <p>
                The word "goodbye" in Spanish is: <strong>{translateToSpanish("goodbye")}</strong>
            </p>

            <h2>All Translations:</h2>
            <ul>
                {Object.entries({
                    hello: "hola",
                    goodbye: "adiós",
                    please: "por favor",
                    thank_you: "gracias",
                }).map(([englishWord, spanishWord]) => (
                    <li key={englishWord}>
                        "{englishWord}" in Spanish is: <strong>{spanishWord}</strong>
                    </li>
                ))}
            </ul>
        </div>
     
      </>
    </React.StrictMode>
);
