<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 2: Data Types

* Describe the concept of a "data type" and how it relates to variables.
* Declare, assign to, and manipulate data stored in a variable.
* Create arrays and access values in them.

---

### Agenda

| Timing | Type | Topic |
| --- | --- | --- |
| 10 min | [Opening](#opening) |What is a Data Type?  |
| 15 min | [Codealong](#codealong1)  | Data Types  |
| 15 min | [Codealong](#codealong2)  | Variables and Keywords|
| 10 min | [Introduction](#introduction) | Intro to Arrays|
| 15 min | [Codealong](#codealong3)  | Working with Arrays|
| 25 min | [Codealong](#codealong4)  | Accessing Values in Arrays |
| 25 min | [Codealong](#codealong5) | Array Helper Methods |
| 25 min | [Lab](#lab1) | Independent Practice For Arrays|
| 10 min | [Lab](#lab2) | Homework: Mad Libs |
| 5 min | [Conclusion](#conclusion) | Final Questions and Exit Tickets|

---

<a name="opening"></a>
## What is a Data Type? (10 min)
--
Let's jump into today's lesson—data types—where we’ll learn the basics of JavaScript and how to exchange data. 

Building an app requires the exchange of data—and it all starts with data types. But what are data types? In computer science and computer programming, a data type is a classification identifying one of various types of data. 

--

Using data types, we can determine 
	* the possible values for that type; 
	* the operations that can be performed on values of that type; 
	* the meaning of the data; and 
	* the way values of that type can be stored.
--

You might have already encountered data types. Data types hold many similarities across different languages:
--
| Data Type | Description | Example |
| --- | --- | --- |
| **Strings** | Single words or sentences surrounded by double or single quotes | `"lots of kittens"`, `'lots of kittens'` |
| **Numbers** | Whole numbers, decimals | `42`, `3.14`, `3.0` |
| **Booleans** | Represents either true or false | `true`, `false` |
| Undefined | Variable that has yet to assigned | `undefined` |
| **Arrays** | Collections of Data | `[ 'Superman', 'Batman', 'Spider-Man' ]` |
| Null | Absence of value | `null` |
| Objects | Properties and values | `{ name: 'jacob' }` |


--
We'll now elaborate on Strings, Integers, and Floats (the others will come later)and explain how they differ in JavaScript, show you how to work with each type, and get some practice using “helper methods” to manipulate this data.

*Citation: [Wikipedia](https://en.wikipedia.org/wiki/Data_type)*
--
#### Working with Data in JavaScript

JavaScript contains a standard library of objects, including Array, Date, and Math, as well as a core set of language elements, such as operators, control structures, and statements; client-side JavaScript extends this core language by providing objects to control a browser and its Document Object Model (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events, such as mouse clicks, form input, and page navigation.

*Citation: [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction)*

---
<a name="codealong1"></a>
## Datatypes (15 min)

For this lesson, we're going to use our Chrome console to practice javascript.

--
#### Part 1: `typeof( )`

We don’t yet know what type of data we're working with, so let’s ask the computer. To do this, we can use [`typeof()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof). 
--
Let's try it out in the console with the following:

  ```javascript
  typeof(37) === 'number';
  => true

  typeof({}) === 'object';
  => true

  typeof('hi there') === 'string';
  => true

  ```
  `typeof()` returns a string with the type of the operand, or expression of the object you're looking at.
--
#### Part 2: Numbers

Numbers are divided into two classes or objects:

* Integers (a.k.a. "whole numbers")

  ```javascript
   ..., -1,0, 2, 3, 4, 5, ...
  ```

* Floats (or Decimal numbers)

  ```javascript
   2.718, 3.14, 0.5, 0.25, etc.
  ```

--

All numbers in JavaScript are **"double-precision 64-bit format IEEE 754 values"**. In other words,  there's really no such thing as an integer in JavaScript. 
--
In this case, you have to be a careful with your arithmetic if you're used to math in other programming languages. Let's take a look at what happens when we do this:

  ```javascript
  0.1 + 0.2
  => 0.30000000000000004
  ```

In JavaScript, these data points are the same **type** of object—which JavaScript calls *Numbers*--so don't be surprised when `typeof( )` doesn't return 'float' and 'integer.'
--

#### Part 3: Arithmetic Operators

We use operators to work with data in JavaScript. The standard [arithmetic operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#Arithmetic_operators)—which you have been learning since grade school—are supported here, including addition, subtraction, division, and so forth. Check it out:

```javascript
1 + 2
=> 3

2 - 5
=> -3

5 / 2
=> 2.5

6 * 2
=> 12
```
--
#### Part 4: Special Number Operators

JavaScript is slightly limited regarding the number of operations it allows you to perform. For example, it doesn’t enable you to easily square a number or cube a number. Fortunately, a special `Math` object with some very useful methods is available.

--

* Taking a number to some `power`? Just use `Math.pow`.

    ```javascript
    // 3^2 becomes
    Math.pow(3,2)
    => 9
    // 2^4 becomes
    Math.pow(2,4)
    => 16
    ```

--

* Taking a square root

    ```javascript
    // √(4) becomes
    Math.sqrt(4)
    => 2
    ```

--

* Need a `random` number? Then use `Math.random`.

    ```javascript
    // The following only returns a random decimal
    Math.random()
    => 0.229375290430
    /**
      The following will return a
      random number between 0 and 10
    */
    Math.random()*10
    ```

--

* Since Numbers can be **Floats** or **Integers**, we often need to delete remaining decimal places, which can be done using `Math.floor`.

    ```javascript
    // Remove the decimal
    Math.floor(3.14)
    => 3
    Math.floor(3.9999)
    => 3
    ```

--
#### Part 5: Strings

Strings are collections of letters and symbols known as *characters*. We use them to deal with words and text in JavaScript. Strings are just another type of **value** in Javascript.

  ```javascript
  "John"
  "Jane"
  "123"
  ```

--

### Strings

Made up of characters.

```javascript
'Hello World!'
```

How many characters are in this String?

--

#### Concatenation

When working with Strings, the "+" operator means concatenation. Concatenation is combining Strings
into a larger String.

```javascript
'Hello ' + 'World'
// 'Hello World'

'DC ' + 'JS ' +'2'
// 'DC JS 2'
```

--

#### Concatenation

```javascript
var firstName = 'Jacob';
var lastName = 'Friedmann';

var fullName = firstName + ' ' + lastName;
```

--

#### Concatenation

If a String is on either side of a "+" sign, it will mean concatenation:

```javascript
'I have ' + 10 + ' cats.'
// 'I have 10 cats.'

20 + 16
// 36

20 + '16'
// '2016'
```

--

#### Empty String

A String with no characters in it.

```javascript
''

'Hello' + '' + '' + '' + ''
// 'Hello'
```

--

#### Case

We can call methods on strings too.


```javascript

'hello'.length
// 5

'hello'.toUpperCase();
// HELLO

var a = 'wOrLd';
a.toLowerCase();
// world
```

--

### Booleans

`true` and `false`

Note:

- Named after George Boole, creator of "boolean algebra", the root of formal logic.

--

<a name="codealong2"></a>
## Variables and Keywords (15 min)

Variables are used to store data types in a computer’s memory, so that they can be referenced later.

--
#### Part 1: Always Use Var!

We declare new variables in JavaScript using the [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var "/en/JavaScript/Reference/Statements/var") keyword.

If you declare a variable without assigning a value to it, its type will be `undefined.`s

```javascript
var a;
=> undefined
```

Let’s try assigning a value to variable:

```javascript
var name = "Alex";
=> undefined

name
=> "Alex"
```

--

Having made some expressions it becomes evident we may want to store these values.

```javascript
var myNumber = 1;
// or also

var myString = "Greetings y'all!"
```

Always remember that these variables should always have the `var` keyword and use `camelCase`
--
#### Part 2: Assignment Operators

Values are assigned using `=`; compound assignment statements, such as `+=` and `-=`, can also be used:

```javascript
var x = 1;
=> 1

x += 5
=> 6
```

You can use `++` and `--` to increment and decrement by 1, respectively. These can be used as prefix or postfix operators.
--

To recap, we have discussed two types of values—or, objects—that store data and offer helpful computation functions.

* If you want to turn a number into a string, you can use a helpful method called `toString`.

```javascript
(1).toString()
=> "1"
/**
  Be careful though.
  Since numbers can be floats,
  JavaScript might
  misunderstand you.
*/
1.toString()
=> Float Error
// but the following works
1..toString()
```

---

<a name="introduction"></a>
## Introduction to Arrays (10 min)

You will find that strings and numbers are often not enough for most programming purposes. What is needed are collections of data that we can use efficiently. These are called Arrays.
--
Arrays are great for:

* Storing data
* Enumerating data (i.e., using an index to find them)
* Quickly reordering data
In essence, arrays compose a data structure that is similar in concept to a list. Each item in an array is called an element, and the collection can contain data of the same or different types. In JavaScript, arrays can dynamically grow and shrink in size.


  ```javascript
  var friends = ['Moe', 'Larry', 'Curly'];
  => ['Moe', 'Larry', 'Curly']
  ```

--

Items in an array are stored in sequential order; they are indexed starting at `0` and ending at `length - 1`. JavaScript starts counting at zero, so the first position in the array will be `[0]`, the second position in the array will be `[1]`, and so forth.

  ```javascript
  // First friend
  var firstFriend = friends[0];
   => 'Moe'
  // Get the last friend
  var lastFriend = friends[2]
  => 'Curly'
  ```

--

<img src="img/array_index_diagram.png">

--

We can even use strings like arrays:

  ```javascript
  var friend = "bobby bottleservice";
  // pick out first character
  friend[0]
  //=> 'b'
  friend.length
  ```

---

<a name="codealong3"></a>
## Working with Arrays (15 min)

Using the JavaScript keyword `new` is one way of creating arrays:

--

#### Part 1: Var New

  ```javascript
  var a = new Array();
  => undefined

  a[0] = "dog";
  => "dog"

  a[1] = "cat";
  => "cat"

  a[2] = "hen";
  => "hen"

  a
  => ["dog", "cat", "hen"]

  a.length;
  => 3
  ```
--

A more convenient notation is to use an array literal:

  ```javascript
  var a = ["dog", "cat", "hen"];

  a.length;
  => 3
  ```

--

#### Part 2: Length Method

The `length` property works in an interesting way in Javascript. It is always one more than the highest index in the array.

So `array.length` isn't necessarily the number of items in the array. Consider the following:

  ```javascript
  var a = ["dog", "cat", "hen"];
  a[100] = "fox";
  a.length;
  => 101
  ```

**Remember**: the length of the array is one more than the highest index.

--

#### Part 3: Getting Data from an Array

If you query a nonexistent array index, the result will be `undefined`:

  ```javascript
  var a = ["dog", "cat", "hen"];
  => undefined

  typeof a[90];
  => undefined
  ```
---
<a name="codealong4"></a>
## Accessing Values in Arrays (25 min)

In this exercise, students will obtain and set array indices, as well as continue practicing with string concatenation. They will be populating two arrays: one with strings, one with numbers. Students will then return these strings and numbers from the arrays in order to create sentences.
--
#### Part 1: Creating Arrays Using the `new` Keyword and the Array Literal

Create two arrays: one using the `new` keyword; the other using an array literal.

* The first array will contain __String__ data values, representing goods a student consumes.
* The second array will contain __Number__ data values, representing the quantity of the respective good they consume on a daily basis.

--

First array (using `new` keyword)

  ```javascript
  var goods = new Array("water", "coffee")
  ```

  Second array (array literal)
  ```javascript
  var quantity = [8, 2]
  ```
--
Explain to the students the differences in array creation (new keyword vs. array literal):

```javascript
    var a = [];        // these are the same
    var b = new Array();   // a and b are arrays with length 0

    var c = ['foo', 'bar'];           // these are the same
    var d = new Array('foo', 'bar');  // c and d are arrays with 2 strings

    // these are different:
    var e = [3];           // e.length == 1, e[0] == 3
    var f = new Array(3);  // f.length == 3, f[0] == undefined

    ```

* Citation: [StackOverflow](http://stackoverflow.com/questions/1094723/what-is-array-literal-notation-in-javascript-and-when-should-you-use-it)
--

#### Part 2: Adding Elements to the Arrays

Use bracket notation to add values to the one of the arrays; use the `.push()` method for the other.

```javascript
goods[2] = "beer"

quantity.push(8)
```

--

#### Part 3: Accessing Elements from Arrays and Concatenating Them With Strings

Now it's time to access various combinations of the two arrays’ elements and concatenate their returned values.

```javascript
  => 'Today, I consumed ' + quantity[0] + ' cups of ' + goods[0]
  => 'I am going to have ' + quantity[1] + ' cups of ' + goods[1] + ' tonight'
```

---

<a name="codealong5"></a>
## Array Helper Methods (25 min)

Arrays come with a number of methods. Here's a list of some popular helpers:

- `a.toString()` - Returns a string with the `toString()` of each element separated by commas.

- `a.pop()` - Removes and returns the last item.

- `a.push(item1, ..., itemN)` - Adds one or more items to the end.

- `a.reverse()` - Reverses the array.

- `a.shift()` - Removes and returns the first item.

- `a.unshift([item])` - Prepends items to the start of the array.

--

You will likely not remember _every_ method. Explore the [full documentation for array methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and other helper methods provided for particular objects.

--
In this exercise, students will utilize their knowledge of array helper methods in order to decode a secret message.
--
#### Part 1: Array Creation and the `.push()` Method

```javascript
var message = []

message.push(8)
=> 1
message.push('r', 'e', 'b', 'm', 'u')
=> 6
message.push('n', 's', 'i', 'A', 'G', 'K')
=> 12

message
=> [ 8, 'r', 'e', 'b', 'm', 'u', 'n', 's', 'i', 'A', 'G', 'K' ]

```
--

#### Part 2: `.pop()`, `.shift()`, and `.unshift()`

```javascript
message.pop()
=> 'K'

message.shift()
=> 8

message.unshift(1)
=> 11
```

--
#### Part 3: Array Reversal Using `.reverse()`
```javascript
message.reverse()
=> [ 'G', 'A', 'i', 's', 'n', 'u', 'm', 'b', 'e', 'r', 1 ]
```

Discuss how the `.reverse()` method mutates the array structure.
--

#### Part 4: Array `.join()`

The `.join()` method joins all elements of an array into a single string.

Citation: [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

__Note:__ The `.join()` method accepts an optional argument, __the separator__, which becomes a string that separates the array values. If no argument is supplied to `.join()`, the separator defaults to a comma.

```javascript
message.join()
=> 'G,A,i,s,n,u,m,b,e,r,1'

message.join(' ')
=> 'G A i s n u m b e r 1'

```


---

<a name="lab1"></a>
## Arrays: Independent Practice

In the [starter code](starter-code/arrays.js), you'll find an array.js file. Use this to get some more practice in the console with arrays.

---

<a href="http://brian.io/slides/dotjs-2012/">wtf JS</a>
<a href="https://www.destroyallsoftware.com/talks/wat">WAT js</a>

---
<a name="lab2"></a>
## Homework:  (10 min)
- Complete Madlibs
- Review Rocks Paper Scissors
- Read and review materials (light HW so you can read and review)

---
<a name="conclusion"></a>

## Conclusion (5 min)

#### Review

Make sure the lesson objectives have been met.

* Describe use cases of different "data types".

#### Further Resources

* Feel free to read more from [Mozilla](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript) about JavaScript fundamentals.