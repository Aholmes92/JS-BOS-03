<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 8: The DOM

* Identify differences between the DOM and HTML.
* Explain the methods and use the DOM in javascript.
* Manipulate the DOM by using selectors and functions.
* Register and trigger event handlers for javascript events.

---

### Agenda

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Codealong](#codealong) | HW Review |
| 5 min | [Codealong](#codealong) | Assignment Review |
| 30 min | [Codealong](#codealong) | Object Review |
| 30 min | [Opening](#opening) | Quiz |
| 10 min | [Opening](#opening) | The Document Object Model (DOM) |
| 30 min | [Codealong](#codealong1) | Working the DOM |
| 20 min | [Lab](#lab1) | DOM Manipulation: Independent Practice |
| 10 min | [Lab](#lab2)| Create a Light Switch |
| 10 min | [Lab](#lab2)| Create a Stop Light |
| 10 min | [Lab](#lab2)| Create a Calculator |
| 10 min | [Lab](#lab2)| Create a Color Changer |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets  |

---

## Homework Review (10 min)

* Completed and on Github
  - Fizz Buzz 
  - 99 Bottles of Beer
  - Random Address Generator 
  - Dice
  - Rocks, Paper, Scissors 
  - JSON HW
  - Object HW

---

## Assignment Review:  (5 min)


---


## Objects Review:  (30 min)


---

## Quiz:  (30 min)

- Obect Literals
- Object Constructors

---



<a name = "opening"></a>
## The Document Object Model (DOM) (10 minutes)

We are now familiar with all the fundamental JavaScript data types, including objects. We can use existing objects as well as create our own to pass around information and functionality. Understanding the fundamentals of objects not only gives us the ability to pass around information, but it is also essential in how we use JavaScript to manipulate our sites and applications.
--
The Document Object Model (DOM) is a programming interface for HTML [and XML] documents. Before we dive too deep into the DOM, we need to understand first how browsers work. 
--
Watch this short video on [browser rendering](https://www.youtube.com/watch?v=n1cKlKM3jYI).
--
So, the DOM is a (potential) large object that describes the structure of our content. Since it's an object, we can use normal techniques to get and set data! In the browser, the DOM is represented by the `document` object. JS specifies some built-in methods that make using the DOM easier. 
--
Take a minute to review the [summary of the DOM at MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document). Pay particular attention to the following methods:

- `Document.getElementById(String id)`
- `Document.querySelector(String selector)`
- `Document.querySelectorAll(String selector)`

--

When reading these methods, try to get a sense of what they're trying to accomplish. We aren't going to ask you to memorize documentation. Don't worry about the details, since we're going to observe some examples.

Each of these methods returns an element from the DOM. What can we do with an [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)? Let's write a few suggestions down on the board.

---
<a name = "codealong1"></a>
## Working with the DOM: Codealong (30 minutes)
We can manipulate the DOM in 3 different ways:

1.  Inline JavaScript (least desirable).
```html
  <body onload="window.alert('welcome to my app!');">
```
2. Include script tags in our HTML documents. This technique is used primarily when generating content/properties through a back-end language. Try to avoid this if not necessary.
```html
  <html>
    <head>
      <script>
         alert('Welcome to my app!');
      </script>
    </head>
    <body>
    </body>
  </html>
```
3. Including the JavaScript file [at the footer] of our site/app.

**It is important to get used to falling in the habit of only doing DOM related manipulation only once our content has loaded.** This is required, as we can't manipulate something that has not yet been drawn in the browser. In plain JavaScript, we can usually wrap this in a 'window.onload' function.

--

```js
   // run this function when the document is loaded
   window.onload = function() {

     // create a couple of elements in an empty HTML page
     var main_heading = document.createElement("h1");
     var heading_text = document.createTextNode("Hello dynamic world!");
     main_heading.appendChild(heading_text);
     document.body.appendChild(main_heading);
  }
```

--

The above `window.onload` function adds a new element to our page through the following steps:

  1. We first create the new H1 element through the `document.createElement` method.
  2. We create the text through the `createTextNode` method.
  3. The text is added to the newly created H1 element.
  4. The H1 element is added to the body. Both steps 3 and 4 use the `appendChild` method to the respective element. Think of `appendChild` as an array of elements belonging to the element we are adding to.

--

Below are a few of the core interfaces to target existing elements in the DOM.

```html
<body>
  <div id="hello">Hello world</p>
  <ul id="gaCampuses">
    <li>DC</li>
    <li>NY</li>
    <li>SF</li>
    <li>LA</li>
    <li>HK</li>
  </ul>
</body>
```

```js
   // run this function when the document is loaded
   window.onload = function() {

     // Target items by id via the getElementById() method
     var helloElem = document.getElementById("hello");

     // We can access that element's css styles through the style property, and then accessing the css property through its camel-cased equivalent
     helloElem.style.color = "red";

     var campusesContainer = document.getElementById("gaCampuses");

     // The getElementsByTagName() method returns a live HTMLCollection of elements with the given tag name.
     var gaCampuses = campusesContainer.getElementsByTagName("li");

     // We can iterate through the returned collection with a for loop
     for (var i = 0; i < gaCampuses.length; i++) {
          gaCampuses[i].style.backgroundColor = "red";
      }
  }
```
--

Finally, we can set certain events to execute based on user interaction. A common example is listening for a button click.

```html
  <form>
    <input id="my-input" />
    <input id="my-input-button" type="submit" value="Run button code"></submit>
  </form>
```

```js
  window.onload = function() {
    var button = document.getElementById('my-input-button');

    // Event parameter is the default object event that would have happened on user click
    button.onclick = function(event) {
      // The preventDefault() method lets us disable the default action, allowing us to override with our on functionality.
      event.preventDefault();
      MyApp.do_something("world");
    };
  };

  // We can define things outside of the `window.onload` that are evaluated
  // only when called.
  MyApp = {};

  MyApp.do_something = function(name) {
    console.log("Hello " + name);
  }
```
---


---

<a name = "lab1"></a>
## DOM Manipulation: Independent Practice (25 minutes)

Complete the [main.js](starter-code/js_dom_exercise/main.js) file in [js_dom_exercise](starter-code/js_dom_exercise) folder:

- When the user clicks the submit button, take the value they've typed into the input box and add it to the list (remember: `appendChild`!)

- Also, when a new item is added to the list, clear the input box. (Hint: the `value` property of the input box, before anyone types in it,
is the empty string.)

- Bonus:  When they click submit without typing anything, alert the user "you must type in a value!"


---





















<a name = "opening"></a>

## Objects: Introduction (10 minutes)
Objects are collections of properties, and a property is an association between a key and a value. Objects in JavaScript are used in two ways:
1. As simple structured data store, similar to arrays, the main difference being that instead of accessing our values by index, we access them by a key.
2. As a fundamental programming paradigm that helps us structure and categorize our code.

--

```js
var myMotorcycle = {};
```
--
```js
var myMotorcycle = {
  "wheels": 2,
  "color": "blue",
  "top speed": 100,
  "broken": false
};

myMotorcycle["wheels"]; // 2
myMotorcycle["top speed"]; // 100
```
--
Make a user object that has a name, age and isAlive;
```js
var objectName = {
  "property1 name": "value1",
  "property2 name": "value2",
  "property3 name": "value3",
  "property4 name": "value4"
};

```
--
Make a user object that has a name, age and is alive?;

```js
var user = {
  "name": "John Doe",
  "age": 150,
  "is alive?": false
};

user["name"]; // John Doe
user["is alive?"]; // false
```
--
Changing a value 
```js
var user = {
  "name": "John Doe",
  "age": 150,
  "is alive?": false
};

user["age"] = 50;
user["is alive?"] = true;

```
--
Improved object syntax
```js
var user = {
  name: "John Doe",
  age: 150,
  isAlive: false
};

user.name; // John Doe
user.isAlive; // false

user.age = 50;
user.isAlive = true;
```
--

Let’s create a person variable in javascript.  We could use a string...

```js
var person = "John Doe";
```
--

To print our person’s name we could do...

```js
var person = "John Doe";
console.log(person)
```
--

Well a person has more than a name so let’s add an age and eye color.  We could use an array...

```js
var person = ["John Doe", 50, "Blue"]
```
--
To print our person’s name, age, and eye color we could do...

```js
var person = ["John Doe", 150, "Blue"]

console.log(person[0]) // John Doe

console.log(person[1]) // 150

console.log(person[2]) // Blue
```
--
Ok, now lets print a sentence with our person in it like we might do on a webpage, maybe a profile.

```js
var person = ["John Doe", 150, "Blue"]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old.");
```
--
There are other qualities we might want to add to describe our person like maybe species, number of legs, and number of arms.  We could do…

```js
var person = ["John Doe", 150, "Blue", "Human", 2, 2]
 ```
--
Ok, now lets print a sentence with our person in it like we might do on a webpage again.

```js
var person = ["John Doe", 150, "Blue", "Human", 2, 2]

console.log("The great" + person[0] + ", with striking " + person[2] + " eyes, was a spry " + person[1] + " years old. A " + person[3] + "with " + person[4) + "legs and " + person[5] + " arms.");
```
--
Yikes, that doesn’t look very readable.  IT would be better if we could access our data by key names instead of index numbers.  Let’s create a person object and we might as well also separate the first and last name and add languages too.

```js
var person = {
     species: "human",
     legs: 2,
     arms: 2,
     name: "John Doe",
     age: 150,
     eyeColor: "Blue",
};
```
--
Let's add some langauges
```js
var person = {
     species: "human",
     legs: 2,
     arms: 2,
     name: "John Doe",
     age: 150,
     eyeColor: "Blue",
     languages: [ "Javascript", "Ruby", "HTML", "CSS"]
};

console.log("The great" + person.name + ", with striking " + person.eyeColor + " eyes, was a spry " + person.age + " years old. A " + person.species + " with " + person.legs + "legs and " + person.arms + " arms.");
```
--
How would we access "Ruby"
```js
var person = {
     species: "human",
     legs: 2,
     arms: 2,
     name: "John Doe",
     age: 150,
     eyeColor: "Blue",
     languages: [ "Javascript", "Ruby", "HTML", "CSS"]
};

person.languages[1];
```

--
Functions as object properties are called methods.
```js
var person = {
     species: "human",
     legs: 2,
     arms: 2,
     name: "John Doe",
     age: 150,
     eyeColor: "Blue",
     languages: [ "Javascript", "Ruby", "HTML", "CSS"],
     getOlder: function(){
       this.age+= 1;
     }
   
};

person.age;
person.getOlder();
person.age
```
--

Add a function that accepts a parameter
```js
var person = {
     species: "human",
     legs: 2,
     arms: 2,
     name: "John Doe",
     age: 150,
     eyeColor: "Blue",
     languages: [ "Javascript", "Ruby", "HTML", "CSS"],
     getOlder: function(){
       this.age+= 1;
     },
     addLanguage: function(language_name){
      this.languages.push(language_name);
     }
   
};

person.languages;
person.addLanguage("SASS");
person.languages;
```

---

<a name=""></a>
## Create a Monkey Object (10 min)

Open the [monkey.js file](starter-code/monkey.js) in the starter code.

Work with a partner to create a monkey object, which has the following properties:

* name
* species
* foodsEaten

And the following methods:
* eatSomething(thingAsString)
* introduce: produces a string introducing itself, including its name, species, and what it's eaten.

Create 3 monkeys total. Make sure all 3 monkeys have all properties set and methods defined.

Exercise your monkeys by retrieving their properties and using their methods. Practice using both syntaxes for retrieving properties (dot notation and brackets).

---
##Object Constructors

What if we want two different people.  We could do

```
var person = {
     species: "human",
     name: "John Doe",
     age: 150,
     languages: [ "Javascript", "Ruby", "HTML", "CSS"],
     getOlder: function(){
       this.age+= 1;
     },
     addLanguage: function(language_name){
      this.languages.push(language_name);
     }
   
};

var person2 = {
     species: "human",
     name: "Jane Smith",
     age: 100,
     languages: [ "C", "Java", "C++", "Swift"],
     getOlder: function(){
       this.age+= 1;
     },
     addLanguage: function(language_name){
      this.languages.push(language_name);
     }
   
};
```

--

That’s ok. But if we wanted to create 10 or 20 people then we are going to be repeating a lot of code.  Let’s build an object as a function ...

```
var Person = function(full_name, years){
     this.name = full_name
     this.age = years,
     this.species = "human",
     this.getOlder: function(){
       this.age+= 1;
     }
}

var person1 = new Person("John Doe", 150);
var person2 = new Person("Jane Smith", 100);
```
--
Now our person will always start with the species of human, and have 2 legs and 2 arms but each person can be created with their own first name, last name, age, and eye color.  We can create our two people again like this...

```
var Person = function(name, age){
     this.name = name
     this.age = age,
     this.species = "human",
     this.getOlder: function(){
       this.age+= 1;
     }
}

var person1 = new Person("John Doe", 150);
var person2 = new Person("Jane Smith", 100);
```

--
New Keyword
```
var ourString = new String("Mike");
var ourNumber = new Number(1);
var ourArray = new Array(1, 2, "cat", 10);
var ourObject = new Object({name: "John", age: 100});
```

--
```
var Car = function(param1, param2){
  this.brand = param1,
  this.make = param2,
  this.wheels = 4,
  this.canFly = false
}

var car1 = new Car("Ford", "Explorer");
var car1 = new Car("Ford", "Explorer");
```
---

<a name=""></a>
## Create a Monkey Object
Create a monkey constructor object so that making more monkeys will be easier.

---
##Object Assigment

Primitive assignment
- string
- number
- boolean
- undefined
- null
--

```
var string = "cat";
var newString = string;

string;
newString;

string += "s";

string;
newString;
```
--
```
var number = 1;
var newNumber = number;

number;
newNumber;

number += 1;

number;
newNumber;
```
--
Array Assignment
```
var animals = ["cat", "dog", "bird"];
var newAnimals = animals;

animals;
newAnimals;

animals.push("lizard");

animals;
newAnimals;
```
--
Object Assignment
```
var animal = {name: "cat", weight: 100};
var newAnimal = animal;

animal;
newAnimal;

animal.name = "dog";

animal;
newAnimal;
```
--
Don't confuse with reassigning to a NEW object or array
--
Object Assignment
```
var animal = {name: "cat", weight: 100};
var newAnimal = animal;

animal;
newAnimal;

animal = {name: "dog", weight: 100};

animal;
newAnimal;
```
--

---
<a name = "introduction1"></a>

### Introduction to JSON (15 min)
[JSON](http://json.org/) (JavaScript Object Notation) is a lightweight text-based data format that's based on JavaScript (specifically, a subset of Standard ECMA-262 3rd Edition - December 1999). Because it's text, and it looks like JavaScript, JSON is simultaneously both easy for humans to read and write AND easy for programs to parse and generate.
--
> JSON is completely language-independent, but it uses conventions that are familiar to programmers of the C-family of languages, including C, C++, C#, Java, JavaScript, Perl, Python, and many others. These properties make JSON an ideal data-interchange language.
--
We use JSON objects to transfer data between applications and Javascript. To keep everything consistent, all JSON code must follow a number of strict conventions (_stricter even than normal JavaScript!_) in order to be syntactically correct. For instance:

--

- Property names must be double-quoted strings.
- Trailing commas are forbidden.
- Leading zeroes are prohibited.
- In numbers, a decimal point must be followed by at least one digit.
- Most characters are allowed in strings; however, certain characters (such as `'`, `"`, `\`, and newline/tab) must be 'escaped' with a preceding backslash (`\`) in order to be read as characters (as opposed to JSON control code).
- All strings must be double-quoted.
- No comments!

--

 JSON will also be an important structure from this point on. All of the data we'll be working with from APIs will be in the form of JSON.
---
<a name = "lab2"></a>

## JSON: Independent Practice (30 min)

Work individually or with a partner and follow instructions in the [app.js](starter-code/json/app.js) file.

---

<a name = "conclusion"></a>


Make sure the lesson objectives have been met.

* Be able to code objects using constructors.
* Understand how JSON transfers data between programs.


---
#### Homework

- JSON HW (due Thursday)
- Object HW (due Thursday)
- Read and review materials


---

### Exit Tickets
<a href="http://bit.ly/2cZaU9c">http://bit.ly/2cZaU9c</a>

---
