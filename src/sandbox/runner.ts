import { Person } from './person';

function printAge(): void {
  const person = new Person(19);
  console.log(`Person age is => ${person.age}`);
}

printAge();
