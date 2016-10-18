<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 7: Objects and JSON

* Identify likely objects, attributes, and methods in real-world scenarios
* Create javascript objects with methods and attributes
* Write a constructor for a JavaScript object
* Implement and interface with JSON data

---

### Agenda


| Timing | Type | Topic |
| --- | --- | --- |
| 10 min |[Opening](#opening) | Quiz |
| 30 min |[Codealong](#codealong1) | Objects |
| 30 min |[Discussion/Independent Practice](#discussion)  | Object Constructors |
| 30 min |[Codealong](#codealong2)  | Coding Our Objects |
| 25 min |[Lab](#lab1) | Monkey Exercise  |
| 20 min |[Introduction](#introduction1)  | Introduction to JSON  |
| 30 min |[Lab](#lab2) | JSON: Independent Practice |
| 5 min |[Conclusion](#conclusion) | Final Questions & Exit Tickets |

---

## Homework Review (15 min)

* Completed and on Github
  - Fizz Buzz 
  - 99 Bottles of Beer
  - Random Address Generator 
  - Dice
  - Rocks, Paper, Scissors 

---

## Quiz:  (15 min)

- Functions
- Parameters
- Arguments
- Anonymous Functions
- Scope

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
