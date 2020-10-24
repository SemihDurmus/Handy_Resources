# QA

- WHAT IS SASS? <br/>
- SASS is the short form of Syntetically Awesome Style Sheets. It is a preprocessor scripting language that is compiled to CSS. <br/> Advantages of SCSS are: <br/>
  * It enables an easier syntax when styling numerous nested elements under each other.
  * It helps seperating the code into easily managable parts and import them back to main style file.
  * We use "mixins" which are verysimilar to functions in programming languages. So that you do not have to write the same styling code several times. 
  <hr/>
- WHAT IS CLEAN CODE? 
- Clean code means to write code in a way that everybody can easily read and follow. Or in a way that when you want to turn back to your own code for example after one year you can still grab the code.<br/>
Basic rules here are to write relevant and understandible content, especially when defining variables and function names; and avoid duplication. <br/>
In this manner the code would be more understandable by everyone inclued.
  <hr/>
- WHAT IS THE DIFFERENCE BETWEEN LOCAL AND SESSION STORAGE? 
- Local and session storages are used to store key-value pair in the browser, so that they are not sent to the server side oneavh request. Most browsers can store up to 10MB, which is pretty good of this type. <br/>
When it comes to the difference between these two; the stored data in local storage has no expiration unless it's cleared manually, on the other side in session storage the data is cleared every single time the browser is closed.
  <hr/>
- WHAT IS THE DIFFERENCE BETWEEN NULL AND UNDEFINED IN JS? 
- First of all they are two seperatye types. Null is an object and undefined is undefined as a type. When you create a variable like "var variable_1" and assgin no value, the variable stays undefined until a value is assigned. On the other side you can assign Null to a variable as a value, which represents emptiness. <br/>
When you compare undefined with Null using strict equality (===), you get false, because they are different types, but when you compare them with abstract equality (==) you get true. Because the two represent empty value.
  <hr/>
- WHAT IS OBJECT DATA TYPE IN JS?
- JS is an object oriented programming language. It means the programming mindset in JS is centered around objects rather than functions. If we disregard the primitive data types like string, number, boolean etc, all remining data types are objects in JS. In object data types we can store as many data as we want by using key-value pairs. Key part is alwaysa string, but value is an area we can assign any data type, and a function as well.<br/>While primitive data types are immutable, object type is completely flexible. You can assign, append, modify or delete any data by calling the key, and by using methods and properties to do manipulation. It makes really handy especially when working with numerous variables at a time. <br/> Because of these features object data type is very widely used in programming languages, and in JS as well.
  <hr/>
- HOW IS DOM UTILIZED IN JS?
- DOM stands for Document Object Type, and is one of the standards of the World Wide Web Consortium(W3C). It is an interface free from platform and language allowing the programs or scripts to dynamically access and manipulate the content,  structure and the style of a document.<br/> DOM itself os not a programming language but without it JS would not be able to used to access HTML documents. When we consider an HTML document, all the objects are organized in an hierarchy following the sequence:
  * Window object
  * Document object
  * Form object
  * Form control elements<br/>
JS has numerous DOM methods which allow the program to access and manipulate every single element in an HTML document.
  <hr/>
- NATIVE & CROSS-PLATFORM APPS
- Native apps are developed exclusively for a specific platform. Apple for instance prefers Objective-C and Swift, while Google favors Java for Android. Using those compatible languages developers can better utilize features of the devices. A native developed app for IOS would not work on Android and vica versa. On the other hand cross platform apps are compatible with multiple platforms. Owing to the dominance of twomajor platforms in the market, most cross platform apps focus on IOS and Android. Positive things with cross platform apps is that they provide a universial solution. However, you run the risk of losing quality and tailored solutions for individual devices.
  <hr/>
- WHAT IS JSX?
- JSX stands for JS in XML. It allows the developer to create HTMl elements and place them in DOM without using the methods ```create element``` or ```appendChild```. It converts HTML tags into React elements, or very shortly JSX is a React extension that allows us to write JS codes that look like HTML elements.
  <hr/>
- REACT HOOKS?
- React hooks were introduced in 2018, which is simply after 7 years of the first debut of react. Hooks are functions that let you use state and other react lifecycle features without having to write a class. This helps us manipulate the state in a much easier way. Basic built-in react hooks are useState, useEffect and useContext.  useState returns a stateful value and a function to update it. useEffect lets you perform side effects in function components such as componentDidMount, componentDidUpdate and componentWillUnmount. Two basic rules of hooks are that they are not called inside loops, conditions, or nested functions. (Only called at the top level.), and they are also not called from regular JavaScript functions, instead from React function components.
  <hr/>
- REACT vs REACT-NATIVE?
- React js is a JS library that supports both front end and server. Moreover, it can be used to create UI for websites and mobile apps. It came into life in 2011 with facebook, and a year after it began to be used with Instagram. On the other side, react-native is a cross platform mobile framwork that uses React js. for building mobile apps. Main similarity between React and React-Native is that they are both ideal for building dynamic and high performing interfaces. React native differs from React in a way that it tarf´ge <hr/>
- React js is a JS library that supports both front end and server. Moreover, it can be used to create UI for websites and mobile apps. It came into life in 2011 with facebook, and a year after it began to be used with Instagram. hooks were introduced in 2018, which is simply after 7 years of the first debut of react. Hooks are functions that let you use state and other react lifecycle features without having to write a class. This helps us manipulate the state in a much easier way. Basic built-in react hooks are useState, useEffect and useContext.  useState returns a stateful value and a function to update it. useEffect lets you perform side effects in function components such as componentDidMount, componentDidUpdate and componentWillUnmount. Two basic rules of hooks are that they are not called inside loops, conditions, or nested functions. (Only called at the top level.), and they are also not called from regular JavaScript functions, instead from React function components.ts mobile apps. Since it is a cross platform framework, it covers both IOS and Android. Reuseable components and modules allow hybrid apps to function natively.
  <hr/>
