<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 5: Functions and Scope

* Why you would use a function 
* How to define and call a function
* Describe how parameters and arguments relate to functions
* Return a value from a function using the return keyword
* Define and call functions with argument-dependent return values
* Define and call functions defined in terms of other functions
* Determine the scope of local and global variables
* Create a program that hoists variables


---

### Agenda

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) | Quiz |
| 10 min | [Opening](#opening) | Introduction to Functions  |
| 30 min | [Codealong](#codealong1) | Function Declaration |
| 30 min | [Lab](#lab1) | Rolling Dice |
| 25 min | [Codealong](#codealong2) | Parameters |
| 25 min | [Codealong](#codealong3) |  The Return Statement |
| 20 min | [Introduction](#introduction1) | Introduction to Scope |
| 25 min | [Codealong](#codealong4) | Local and Global Scope Usage |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |

---

## Homework Review (0 min)

* Complete (graded)
  - Fizz Buzz (due Today)
  - 99 Bottles of Beer (due Today)
  - Random Address Generator (due Today)

* Read (not graded)
  - Eloquent JS Chapter 3: http://eloquentjavascript.net/03_functions.html
  - Eloquent JS Chapter 5: 
http://eloquentjavascript.net/05_higher_order.html

---

## Quiz:  (10 min)

- Variables
- Strings, Numbers, Booleans, Null, Undefined
- Arrays
- Operators
- If statements, Switch statements
- For loops, While loops

---

<a name="opening"></a>
## Introduction to Functions (10 min)

A function is a reusable statement, or a group of reusable statements, that can be called anywhere in the program. This avoids the need to rewrite the same statement over and over. Functions enable the software developer to segment large, unwieldy applications into smaller, more manageable pieces.

A critical component of programming, functions address a key tenet of engineering: Don't Repeat Yourself, or DRY. Our goal is to create programs with as little code as possible, while maintaining complete clarity.

Another important trait of functions is that they are similar to strings or arrays. Function can be passed into other functions as an argument, and they can also be used like any other object we've been working with.

---
<a name="codealong1"></a>
## Function Declaration (30 min)

Before we call, or "use", a function, we must define it. In JavaScript, functions can be defined in several ways. Two common methods are __function declarations__ and __function expressions__.

--

__Function Declarations:__
```javascript
function speak (words) {
  console.log(words);
}
```

__Function Expressions:__
```javascript
var speak = function speak(words) {
  console.log(words);
}

var speak = function (words) {
  console.log(words);
}
```

--

While both methods share some similarities, only function declarations define functions that can be used anywhere in the scope where they're defined. In other words, you can call a function that is defined using function declaration before the part of the code where you actually define it:

--

```javascript
speak('hello, world!')

function speak(words) {
  console.log(words)
}

// DOES NOT RESULT IN ERROR
```

--

Function expressions, however, must be defined before they are called:

```javascript
speak('hello, world!')

var speak = function (words) {
  console.log(words)
}

// RESULTS IN ERROR:
// TypeError: undefined is not a function
```
--

#### Function Declaration Syntax

A function declaration always has the following:

* A name
* An optional list of parameters (i.e., the names of arguments to be "passed" into the function, or information the function will use); this is defined by the parenthesis before the opening curly brace
* Statements inside the function (the code executed every time the function is called)

In our example above, the function name is `speak`. 
The parameter is `words`.  
And the statement is `console.log(words);`

And this makes up a basic function declaration!
--
#### Calling Functions

Calling, or invoking, a function executes the code defined inside this function.

But defining and calling a function is different. A function will not be called when it's defined.

You call a function by using parenthesis after the function's name `()`:
--
```javascript
function hello () {
  console.log("hello there!")
}

hello();

=> hello there!
```
--
JavaScript functions are often defined as methods on objects. To call a function as a method:

```javascript
console.log("This is a method or function on an object");

prompt("This is a function");
```

---

<a name="lab1"></a>
## Rolling Dice: Lab (40 min)

For this lab, you'll be creating a page that displays a random update of two dice every time the user hits the "Roll Dice" button. To get started, open the [app.js file](starter-code/dice/js/app.js). Use the HTML and CSS code included in the starter code folder.

![](starter-code/dice/img/diceroller.png)

Before creating code, be sure to write down the pseudocode for the exercise!
---

<a name="codealong2"></a>
## Parameters (25 min)

If a function did the same thing every time it was called, it wouldn't be a very powerful codebase. We would also have to write a new function for each new feature in order to enable additional behaviors in our application:

--
```javascript
// Bad idea...
function helloMark () {
  console.log('hello, Mark');
}

function helloObama () {
  console.log('hello, Obama')
}
```
--

Parameters remedy this problem by allowing us to call, or invoke, the same function with different values:
--

```javascript
function sayHello (name) {
  console.log('Hello ' + name);
}

sayHello('Mark');
=> 'Hello Mark'

sayHello('Obama');
=> 'Hello Obama'
```
--
In this example, the function `sayHello` is declared with one parameter, `name`. To write functions with **more than one parameter**, use a comma-separated list: `(param1, param2, param3, param4)`. In JavaScript, functions can accept up to 255 parameters!

--

```javascript
function sum(x, y, z) {
  console.log(x + y + z)
}

sum(1, 2, 3);
=> 6
```
--

JavaScript is a loosely typed language. Therefore, there is no need to specify the data-type (string, number, etc.) of the function's parameters when writing functions. While this reduces the amount of code you must write, it increases the possibility of type errors, when a value is not of the expected data type. This is because in JavaScript, function definitions do not perform type checking on arguments passed into the functions.
--

Parameters vs Arguments. Though often used interchangeably, the terms __parameters__ and __arguments__ have different meanings.

__Parameters__ refer to variables defined in the function's declaration; 
__arguments__ refer to the actual values passed into the function when the function is called. For example:

--
```javascript
// Parameter
function doSomething (parameter) {
  // does something
}

// Argument
doSomething(argument)
```
---

<a name="codealong3"></a>

## The Return Statement (25 min)

Sometimes we don't want to print to the console or update the DOM; rather, we want to update a variable or even call another function. This requires a `return` statement. When we return something, it ends the function's execution and "spits out" what we are returning. We can then store this returned value in another variable...
--

```javascript
function sum (x, y) {
  return x + y;
}

var z = sum(3, 4);
=> 7
```

--
... or pass it to another function:

--

```javascript
function sum (x, y) {
  return x + y;
}

function double (z) {
  return z * 2;
}

var num = sum(3, 4)
=> 7
var numDbl = double(num);
=> 14

--

// This can also be written:
var num = double(sum(3,4));
=> 14
```
--

Note that the `return` statement will completely stop a function's execution. 
Any statements following the `return` statement will not be called:
--
```javascript
function speak (words) {
  return words;

  // The following statements will not run:
  var x = 1;
  var y = 2;
  console.log(x + y)
}
```
--
By default, JavaScript functions will return an `undefined` value. 


---
<a name="introduction1"></a>

## Introduction to Scope (25 min)

Scope is the set of variables you have access to. As we learned in the beginning of this class, JavaScript reads from top to bottom. Sometimes, however, we declare variables inside functions (just like arguments), which aren't accessible in other parts of our code. This is the concept of scope.

--
#### Global Scope

Before you write a line of JavaScript, you're in what we call the `Global Scope`. When a variable is declared outside a function, it is public—referred to as GLOBAL—and has a global scope. Any script or function on the page can then reference this variable.
--
For example, when you declare a variable right away, it's defined globally:

```javascript
var name = 'Gerry';
```
--
Global scope can be confusing when you run into namespace clashes. You don't want to use global scoping for all your variables--because using it correctly is highly complex--but every Javascript program uses the global scope in one way or another, so it’s important to be familiar with it.
--
#### Local Scope

Conversely, if a variable is declared inside a function, it is referred to as LOCAL, and has a local scope.

A variable with local scope cannot be referenced outside of that function.

--

<a name="codealong4"></a>

## Local and Global Scope Usage (25 mins)

Take a look at the code below:

```javascript
var a = "this is the global scope";
function myFunction() {
  var b = "this variable is defined in the local scope";
}
myFunction();
console.log(b);
```
--
In this case, the console log will send a reference error because the variable `b` is not accessible outside the scope of the function in which it is defined.

In the logic defined above, the fact that a variable cannot be accessed by the parent scope works only in one way.

A function can access variables of the parent scope. In other words, a function defined in the global scope can access all variables defined in the global scope.
--

```javascript
// Global Scope
var a = "Hello";

// This function is defined in the global scope
function sayHello(name) {
    return a + " " + name;
}

sayHello("JavaScript");
=> "Hello JavaScript";
```
--
### Nested Function Scope

When a function is defined inside another function, it is possible to access variables defined in the parent from the child:

```javascript
var a = 1;

function getScore () {
  var b = 2,
  c = 3;

  function add() {
    return a + b + c;
  }

  return add();
}

getScore();
=> 6
```

---
## Functions calling other Functions (5 min)

```javascript
var numbers = [1,2,3,4,5,6,7,8,9];

// add 3 to every number
numbers.map(); 
=> [4,5,6,7,8,9,10,11,12]

// get only odd numbers
numbers.filter()
=> [1,3,5,7,9]

```
--


### Anonymous Function

```javascript

function addThree(arrayItem){
  return arrayItem+=3;
}

numbers.map(addThree); 
--

numbers.map(function(){
}); 

numbers.map(function(arrayItem){
  arrayItem+=3;
}); 

```

--

```javascript
var numbers = [1,2,3,4,5,6,7,8,9];

// get only odd numbers
numbers.filter()
=> [1,3,5,7,9]
```


--
#### Part 2: `Array.every( )`

The `.every()` method tests whether all elements in the array pass the test implemented by the provided function. [[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)]

```javascript
evens.every(function (num) {
  return num % 2 === 0
})

=> true

evens.every(function (num) {
  return num % 4 === 0
})

=> false
```
--
#### Part 3: `Array.some( )`

The `.some()` method tests whether an element in the array passes the test implemented by the provided function. [[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)]

```javascript
evens.some(function (num) {
  return num % 4 === 0
})

=> true
```
--
#### Part 4: `Array.filter( )`

The `.filter()` method creates a new array with all elements that pass the test implemented by the provided function.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)]

`.filter()` does not mutate the array it is acting upon; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.
--
```javascript
evens.filter(function (num) {
  return num > 5
})
=> [6, 8, 10]

evens
=>[ 2, 4, 6, 8, 10 ]

var bigNums = evens.filter(function (num) {
  return num > 5
})
=> undefined

bigNums
=> [6, 8, 10]

var smallNums = odds.filter(function (num) {
  return num < 5
})
=> undefined
smallNums
=> [1, 3]
```
--
#### Part 5: ‘Array.map( )’

The `.map()` method creates a new array with the results of calling a provided function on every element in this array.
[[Source](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)]

`.map()` does not mutate the array it is acting upon; while it does return a new array of filtered elements, this new array must be assigned to a new variable or returned to another function.
--

```javascript
var timesFive = evens.map(function (num) {
  return num * 5
})
=> undefined

timesFive
=> [10, 20, 30, 40, 50]

var timesTen = odds.map(function (num) {
  return num * 10
})
=> undefined

timesTen
=> [10, 30, 50, 70, 90]
```

--
#### forEach

Another way of iterating over an array added with ECMAScript 5 is [`forEach()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach):

```javascript
["dog", "cat", "hen"].forEach(function(currentValue, index, array) {
   console.log("I want a ", currentValue);
   console.log(array[index]);
});
```

---
<a name="conclusion"></a>
## Conclusion (5 min)

These are some of the foundational tools you’ll use in many of your applications. You might need to study the exact syntax before it’s committed to your memory, but it's important that you remember these core "control flow" and "loop" concepts, because every programming language you encounter will involve them.
---
#### Review

Make sure the lesson objectives have been met.

* Be able to explain if/else and switch statements as well as use cases.
* Differentiate between true, false, 'truthy', and 'falsey'.

---
#### Homework

- FizzBuzz, 99 Bottles of Beer, Random Address Generator
- JS Challanges
- Read and review materials

---

---

### Exit Tickets
<a href="http://bit.ly/2cZaU9c">http://bit.ly/2cZaU9c</a>

---
