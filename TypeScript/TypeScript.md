
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

for (const hobby in person.hobbies) {
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
