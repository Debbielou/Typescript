function safeSquare(x: number | string): number {
  if (typeof x === 'number') {
    return x * x;
  } else if (typeof x === 'string') {
    const num = parseFloat(x);
    if (!isNaN(num)) {
      return num * num;
    }
  }
  throw new Error('Invalid input: must be a number or a numeric string');
}
export default safeSquare;

export function safeSquareWithDefault(x: number | string, defaultValue: number = 0): number {
  try {
    return safeSquare(x);
  } catch (error) {
    if (error instanceof Error) {
      console.warn(error.message);
    } else {
      console.warn('An unknown error occurred');
    }
    return defaultValue;
  }
}
/*exercise
  * 1. Create & export a new type, Priority, which is a union of 4 string values. low,medium,high,critical.
  * 2. Update the setPriority function to accept Priority instead of a string.
  * 3. Update the setPriority function. It should return a number based on priority level.
  * 4. low=0,medium=1,high=2,critical=3.
  * 5. If the priority is not one of the defined values, it should return 0.
  * 6. Create a new component that uses the setPriority function and displays the priority level.
  * 7. Render this component in the main App component.
  */

export type Priority = 'low' | 'medium' | 'high' | 'critical';

export function setPriority(priority: Priority): number {
  switch (priority) {
    case 'low':
      return 0;
    case 'medium':
      return 1;
    case 'high':
      return 2;
    case 'critical':
      return 3;
    default:
      return 0;
  }
}

export type EmploymentStatus = 'employed' | 'unemployed' | 'self-employed' | 'retired' | string;

export function updateEmploymentStatus(status: EmploymentStatus): string {
  return `Employment status updated to: ${status}`;
}
  
/*create & export a new LogMessage type. It must start with a log level followed by a colon and a space
then any string.
create & export a LogSource type. it must start with a LogSourceType followed by an underscore 
and then any number.
create & export a LogMessageWithSource type that combines LogMessage and LogSource.
create & export a function logMessage that accepts a LogMessageWithSource and returns a formatted string
*/

export type LogMessage = `${'info' | 'warning' | 'error'}: ${string}`;
export type LogSource = `source_${number}`;
export type LogMessageWithSource = `${LogMessage} [${LogSource}]`;

export function logMessage(message: LogMessageWithSource): string {
  return `Log Entry - ${message}`;
}




  