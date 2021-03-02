<h1 align="center">TypeScript_2</h1>

1. Watch mode:<br/>
   In order to get rid of writing `tsc fileName.ts` every time to compile the typescript file. We can use watch mode
```
tsc fileName.ts --watch
or 
tsc fileName.ts -w
```
2. tsc --init<br/>
Think we have more than one ts file in the project folder. Then what we should do is 
```
tsc --init //this will create a tsconfig.json file
tsc      //will apply the desired process to every ts file in the folder
```
By adding `"exclude" : ["filename.ts"]` in the tsconfig.json file we can exclude files to go over the same process. Another option may be  `"exclude" : ["filename.dev.ts"]` or `"exclude" : ["*.dev.ts"]` or `"exclude" : ["**/*.dev.ts"]` which means any file with that pattern in any folder will be excluded. There is no need to`"exclude" : ["node_modules"]` because it comes by default. We can use `"include" : ["filename.ts"]` as well. With `"files" : ["filename.ts"]` we can only add files but not folders.

3. Compiler options<br/>
   * `"target": "es5"` is given by default. Could be set to `es6` so that we can use `let` and `const` intead of `var`. By setting this we get 
   * `"lib": ["dom", "es6", "dom.iterable", "scripthost"]` by default. We would have the same if we comment out `lib`.<br/>
   `"outDir"`  and `"rootDir"` options help us organize the ts and the compiled js files.<br/>
   * We can get rid of comments in the compile file with `removeComments`<br/>
   * This does not appear on the compiler options by default but it may be necessary to add: `noEmitOnError`. This is True by default which means if there is any error in any of the files, then none of the files will be compiled to js. According to the project we're doing it may be necessary to turn it to False.<br/>
   
