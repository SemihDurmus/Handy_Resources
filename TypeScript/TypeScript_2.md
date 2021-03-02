<h1 align="center">TypeScript_2</h1>

1. Watch mode:<br/>
   In order to get rid of writing `tsc fileName.ts` every time to compile the typescript file. We can use watch mode
```
tsc fileName.ts --watch
or 
tsc fileName.ts -w
```
Think we have more than one ts file in the project folder. Then what we should do is 
```
tsc --init //this will create a tsconfig.json file
tsc      //will apply the desired process to evry ts file in the folder
```
