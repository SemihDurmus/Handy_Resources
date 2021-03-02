
<h1 align="center">TypeScript</h1>

1. Install TypeScript
```
npm install -g typescript
or 
sudo npm install -g typescript
```
2. Compile 
```
tsc filename.ts
```
3. Example
```typescript
const input1 = document.getElementById("nr1")! as HTMLInputElement;
const input2 = document.getElementById("nr2")! as HTMLInputElement;


function add(num1:number, num2:number) { return num1 + num2 }

console.log(add(+input1.value + +input2.value))

```
4. Project initiation:
```
npm init  //gives a package.json file
npm install --save-dev lite-server 
//After installing go to package.json and enter `"start": "lite-server"` under `"test"` under `"scripts"`
//This is a tool always serves the html file close to ts file on localhost:3000
npm start
```
5. What does TS do?<br/>
TypeScript's type system only helps you during development.(Before the code gets compiled)
6. Number, Boolean, String Types
```typescript
function add(num1:number, num2:number)
```
```typescript
function add(num1:number, num2:number, showResult:boolean, phrase:string) {
//  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
//    throw new Error ('Incorrect input')
//   }
  const res = num1 + num2
  if (showResult) {console.log (phrase + res) }
  else {return res}    
}

const nr1 = 5;
const nr2 = 2.8;
const printResult = true;
const resultPhrase = "Result is "

add(nr1, nr2, printResult, resultPhrase)
```
7. Object Type
```typescript
const student : object = {
  name : "Max",
  age : 20
}

const person : {
  name : string
  age : number
} = {
  name : "Rex",
  age : 30
}

console.log(person.name)

```
8. Array Type
```typescript
let favActivities : string[];
favActivites = ["music", "movie"]

let favs : any[];
favs = [3, "movie"]

const person : {
  name : "Rex",
  age : 30,
  hobbies : ['run','dive' ]
}

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  //console.log(hobby.map()) //Error ! Because an srray does not get map
}
```
9. Tuple Type (fixed-length array)
```typescript
const person : {
  name : string,
  role : [number, string] //this describes a tuple
  name : "Rex",
  role : [1, 'author'] //Should contain only 2 elements, one number and one string
}

person.role.push('admin') //Error
person.role[1] = 3  //Error
```
10. Enum (Does not exist in JS)
```typescript
//const ADMIN = 0;
//const READ_ONLY = 1;
//const AUTHOR = 2;
enum Role {ADMIN, READ_ONLY, AUTHOR}
//You do not have to start w 0 => enum Role {ADMIN=5, READ_ONLY, AUTHOR} =>the others are 6 and 7 now
//Can also use differnet types => enum Role {ADMIN="ADMIN", READ_ONLY=100, AUTHOR=200}

const person = {
  name : "Max",
  hobbies : ["run", "music", "jump"],
  role : Role.ADMIN
}

if (person.role === 2) {
  console.log("is author")

```
in compiled JS enum would look like 
```javascript
var Role;
(function (Role) {
  Role[Role["ADMIN"]=0] = "ADMIN";
  Role[Role["READ_ONLY"]=1] = "READ_ONLY";
  Role[Role["AUTHOR"]=2] = "AUTHOR";
}) (Role || (Role= {}))


```
11. Any, combined, literal types
```typescript
let i1 : number | string;
let i2 : any;
let iArray : any[];

type Combineable = number | string;
type ConversionDescriptor = "as-number" | "as-text" 

function combine (
  input1 : Combineable,
  input2 : number | string,
  resultConversion : "as-number" | "as-text"    //literal type
  //resultConversion :ConversionDescriptor
) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === "as-number") {
      result = +input1 + +input2;
  } else {
       result = input1.toString() + input2.toString()
  }
  return result
}  
  
combine(30,26,"as-number"); //56
combine("30","26","as-number"); //56
combine("Max","Anna","as-text"); //MaxAnna

```
12. Void, undefined, function, unknown Types
```typescript
function printResult1(num:number): undefined {
  console.log('Result '+ num)
  return
}

//void is the general use for functions that does not return anything => console will give undefined
function printResult2(num:number): void {
  console.log('Result '+ num)
}

function add(n1:number, n2:number) { return n1 + n2 }

let combineValues1 : Function;

combineValues1 = add;
//combineValues = 5; //Error

//if we combineValues = printResult; TS will not complain. But we dont want that.
//So we should re-define it

let combineValues2 : (a:number, b:number)=> number

//--------------------

function addAndHandle (n1:number, n2:number, cb:(num:number)=> void){
  const result = n1 + n2
  cb(result)
}

addHandle(10, 20, (result)=>{console.log(result)}); //30

//---------------------
let userInput : unknown;
let userName : string;

userInput = 4;
userName = "John";
//userName = userInput //Error

//---------------------
function generateError(message:string, code:number):never {
  throw {message:message, errorCode:code}
}

const errResult = generateError("An error has occured", 400);
console.log(errResult) 
//Gives nothing. No null, no undefined but nothing. Therefore we add the type never to func.
//void is another opt we could use, but never describes it better

```
