import React from 'react';
import './App.css';

let name: string;
// let name: any;
// let name: unknown;
let age: number | string;
let isStudent: boolean;
let hobies: string[];
let role: [number, string];

// let printName:(name:string) => void;
let printName:(name:string) => never;

function printPerson(
  name:string, 
  age: number | string,
  isStudent: boolean,
  hobies: string[],
  role: [number, string]
  ){
  console.log(
    "name: ", name,
    "age:" , age,
    "isStudent:", isStudent,
    "hobies:", hobies,
    "Student Number:", role[0],
    "Student Role:", role[1]
    );
  }

name= "Joseph2";
age= 25;
isStudent = true;
hobies=["reading", "ride", "football"];
role= [42351, "Master Student"]

printPerson(name, age, isStudent, hobies, role);

interface Guy {
  surname: string;
  number?: number;
}
// extends

type Person = Guy & {
  name: string;
  age?: number;
}

let person: Person ={
name:'Joseph',
surname: "Ashiyan",
age: 25,
number: 1234,
}

console.log("Person:", person);




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
          className="App-link"
        >
          Welcome to Joseph's Task App
        </p>
      </header>
    </div>
  );
}

export default App;
