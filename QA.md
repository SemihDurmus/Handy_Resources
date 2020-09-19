# QA

- **WHAT IS SASS ?<br/>
- SASS is the short form of Syntetically Awesome Style Sheets. It is a preprocessor scripting language that is compiled to CSS. <br/> Advantages of SCSS are: <br/>
  * It enables an easier syntax when styling numerous nested elements under each other.
  * It helps seperating the code into easily managable parts and import them back to main style file.
  * We use "mixins" which are verysimilar to functions in programming languages. So that you do not have to write the same styling code several times. 
  
- **WHAT IS CLEAN CODE? 
- Clean code means to write code in a way that everybody can easily read and follow. Or in a way that when you want to turn back to your own code for example after one year you can still grab the code.<br/>
Basic rules here are to write relevant and understandible content, especially when defining variables and function names; and avoid duplication. <br/>
In this manner the code would be more understandable by everyone inclued.
  
- **WHAT IS THE DIFFERENCE BETWEEN LOCAL AND SESSION STORAGE? 
- Local and session storages are used to store key-value pair in the browser, so that they are not sent to the server side oneavh request. Most browsers can store up to 10MB, which is pretty good of this type. <br/>
When it comes to the difference between these two; the stored data in local storage has no expiration unless it's cleared manually, on the other side in session storage the data is cleared every single time the browser is closed.

- **WHAT IS THE DIFFERENCE BETWEEN NULL AND UNDEFINED IN JS? 
- First of all they are two seperatye types. Null is an object and undefined is undefined as a type. When you create a variable like "var variable_1" and assgin no value, the variable stays undefined until a value is assigned. On the other side you can assign Null to a variable as a value, which represents emptiness. <br/>
When you compare undefined with Null using strict equality (===), you get false, because they are different types, but when you compare them with abstract equality (==) you get true. Because the two represent empty value.
