
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
