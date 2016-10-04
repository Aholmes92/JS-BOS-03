<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 3: Conditionals and Loops

* Use if/else conditionals to control program flow based on Boolean (true or false) tests.
* Use Boolean logic (!, &&, ||) to combine and manipulate conditional tests.
* Use switch/case conditionals to control program flow based on matching explicit values.
* Differentiate among true, false, 'truth*y', and 'false-y'.
* Review loop iteration using for and forEach, and introduce while and do/while loops.

---

### Agenda

| Timing | Topic |Description|
| --- | --- | --- |
| 10 min | [Opening](#opening) | Quiz |
| 10 min | [Opening](#opening) | Review |
| 15 min | [Codealong](#codealong6) | Iterating and For Loops |
| 10 min | [Codealong](#codealong5) | While & Do-While |
| 15 min | [Opening](#opening) | Conditional Statements |
| 20 min | [Codealong](#codealong1) | Comparison Operators |
| 15 min | [Codealong](#codealong2)| Truthy and Falsy |
| 20 min | [Codealong](#codealong3)| Boolean/Logical Operators |
| 25 min | [Codealong & Independent Practice](#codealong4) | Switch Statements |
| 30 min | [Lab](#practice2) | Fizzbuzz Code Challenge|
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |

---

## Quiz (10 min)

1.  4^3
2.  Get a random number # 1-10
2.  Get # of characters in "Banana Soup"
3.  Array and Concatenation Challenge
4.  Variable Challenge
5.  Explain the relationship between a method and it's return value

---
## Review:  (10 min)

1.  Primitive Data Types: 
  - Number, String, Boolean, Undefined, Null
  - Example of Primitive Data Value:
    - 100, "Cat", false, Undefined, Null
2.  Other ways to store data
  - Array
  - Example:
    - [100, "Cat", false, undefined, null]
3.  If an array isn't a Primitive Data Type what is it?

---

## Iteration and Loops 

--

Why is looping or iterating so important to programming?

--

<a name="codealong6"></a>
## Iterating through an Array (25 min)

Iterating through the elements of an array, one at a time, is a very common and useful practice in programming.
--
We can use a `for` loop to iterate over the elements of an array like this:
--

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 0; i < teams.length; i++) {
  console.log(teams[i]);
}
```
How is the following code different from the one above?
```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
for (var i = 2; i < teams.length; i++) {
  console.log(teams[i]);
}
```
--
```
How is the following code different from the one above?
```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
var len = teams.length
for (var i = 0; i < len; i++) {
  console.log(teams[i]);
}
```
--

Tough syntax!  Practice!

--
JavaScript arrays have several advanced _iterator methods_.

Many of these methods require a function to be supplied as an argument, and the code in which you write the function will be applied to _each_ item in the array, individually.
--
For example, we can use the `forEach` method instead of a `for` loop to iterate the elements:

```javascript
var teams = ['Bruins', 'Cal Bears', 'Ravens', 'Ducks'];
teams.forEach(function(el) {
    console.log(el);
});
```

This function would return:

```javascript
Bruins
Cal Bears
Ravens
Ducks
undefined
```
--
Do you notice how much clearer this syntax is than that of the `for` loop?

Here are some other iterator methods for you to research and practice with:

- `Array.every()`
- `Array.some()`
- `Array.filter()`
- `Array.map()`

--
#### Part 1: Evens and Odds

Create an array--`evens`--and populate it with the even numbers 2 - 10. Create an array--`odds`--and populate it with the odd numbers 1 - 9.

```javascript
var evens = []
evens.push(2,4,6,8,10)
=> 5

var odds = []
odds.push(1,3,5,7,9)
=> 5
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

---

#Break (5 min)

---
We will use the FOR loop instead of the functions because the functions are more complex than we need right now.
--
#### for

You can iterate over an array with:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0; i < a.length; i++) {
  console.log(i);
}
```
--
If the array length is fixed (aka elements are not being added/removed which change the number of elements in the array), the previous loop is slightly inefficient because it is essentially looking up the length property once every loop. An improvement is to chain the `var` assignment:

```javascript
var a = [1, 2, 3, 4, 5];
for (var i = 0, len = a.length; i < len; i++) {
  console.log(i);
}
```
Notice the placement of the comma and semi-colons.

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

<a name="codealong5"></a>
## While and Do-While (10 min)

`While` is a loop statement that will run **while** a condition is true.
--
JavaScript has `while` loops and `do-while` loops. The first is useful for basic looping, but there's a possibility it will never get run. Using a `do-while` loop makes sure that the body of the loop is executed at least once, because `while()` isn't evaluated until after the block of code runs.

--

```javascript
while (true) {
  // an infinite loop!
}
```
--
Any `for` loop can be written as a while loop:

```javascript
for (var i = 0; i <= 4; i++) {
  console.log(i);
}
```

As a while loop:

```javascript
var i = 0;
while (i <= 4) {
  console.log(i);
  i++;
}
```

--
Let's compare a `while` loop to a `do while` loop

As a while loop:

```javascript
var i = 0;
while (i <= 4) {
  console.log(i);
  i++;
}
```
As do while loop

```javascript
var i = 0;
do {
  console.log(i);
  i++;
} while (input <= 4);
```

---

<a name="opening"></a>
## Conditional Statements (15 min)

Conditional statements enable us to essentially decide which blocks of code to execute and which to skip, based on the results of tests that we run. JavaScript supports two conditional statements: `if`...`else` and `switch`. We'll start off with the 'if'...'else' statement, which uses Boolean (true or false) tests.
--
#### If/Else Statement

`if (expr) { code }`  

... is a command to run the `code` block if `expr` is `true`

```javascript
if (1 > 0) {
  console.log("hi");
}
//=> hi
```
--
You can also add an optional `else` clause, to run if `expr` is _not_ `true`:

`if (expr) { code } else { other code }`

```javascript
if (0 > 1) {
  console.log("hi");
} else {
  console.log("bye");
}
//=> bye
```
--
When you need to test more than one case, you may use `else if`:

```javascript
var name = "kittens";
if (name === "puppies") {
  name += "!";
} else if (name === "kittens") {
  name += "!!";
} else {
  name = "!" + name;
}
name === "kittens!!"
//=> true
```
--
It is **not** recommended to assign variables within a conditional expression because that will assign a value to the variable, as seen below:

```javascript
student = "Jamie";
//=> "Jamie"
```

The expression above will return the value shown on the second line. So if you assign a truthy value inside a conditional statement, this condition will always be true; if you assign an undefined value, the conditional statement will be false (undefined = falsey). Another potential issue is that it can be confused with equality (`===`). 
--
The example below illustrates WHAT NOT TO DO:

```javascript
if (x = 3) {
    console.log("boo");
}
```
--
#### Ternary Operators

JavaScript has a ternary operator for conditional expressions. The ternary operator is basically a concise "if-else” in one line, except that it not only executes blocks of code, it also returns a value:

```javascript
var age = 12;
//=> undefined

var allowed = (age > 18) ? "yes" : "no";
//=> undefined

allowed
//=> "no"
```
--
#### Block Statements

Statements intended to be executed after a control flow operation will be grouped into a **block statement**; they are placed inside curly braces:

```javascript

{
  console.log("hello");
  console.log("roar");
}
```

#### Block Scope

We will talk about scope in later lessons; basically it means a limited area of code that knows about a variable's existence. In the case of **block statements** in JavaScript, no scope is created, unlike in most other languages.

```javascript
var name = "gerry";
{
  var name = "jay";
}
console.log(name);
// => jay
```

Only functions introduce scope in Javascript.

---

<a name="codealong1"></a>
## Comparison Operators (20 min)

[Comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators) in JavaScript can be made using `<`, `>`, `<=` and `>=`. These can be used for both strings and numbers. This can be either beneficial or frustrating to a developer, since most languages do not implicitly convert strings to numbers the way that JavaScript does.
--
```javascript
"A" > "a"
//=> false

"b" > "a"
//=> true

12 > "12"
//=> false

12 >= "12"
//=> true
```
--
#### Double-Equals Equality Operator `==`

Equality is a bit more complex. JavaScript provides two ways to verify equality.

When you verify equality using double-equals `==`, JavaScript performs much of the "type coercion" in the background. As we mentioned above, if the operands have a different type (e.g., the number `1` and the string `"1"`), JavaScript will attempt to change the type of both operands in order to check if they are equal. This means that expressions will often return equal more easily than if we were stricter about what things were equivalent. 
--
Some examples:

```javascript
"dog" == "dog";
//=> true

1 == true;
//=> true
```
--

#### Triple-Equals Equality Operator `===`

To avoid type coercion and to measure equality more strictly, **use the triple-equals operator**. Because `===` more truly measures actual equality, we should always use `===` instead of `==`, which is a legacy of the early days of JavaScript when people thought it might be useful to have an operator that does type coercion before checking equality, but that's pretty much never a good idea as it defeats the whole purpose of having data types.
--
"Sameness" and "equality" have various definitions, which can make the differentiation somewhat fuzzy. They can also differ by programming language. Because you'll often be measuring whether two things are equal, you should carefully investigate the way this works.
--
Some examples:

```javascript
1 === true;
//=> false

true === true;
//=> true

"hello" === "hello"
//=> true
```
--
However, there are some situations when `===` does not behave as we expect it to, for example when empty objects or arrays are involved:

```javascript
{} === {}
//=> Uncaught SyntaxError: Unexpected token ===

[] === []
//=> false

[1,7] === [1,7]
//=> false
```
--
**Explanation**

The examples in the second set fail equality tests because both **object literals** and **arrays** are objects, not just "primitive" values like strings, numbers, and Booleans. Objects and arrays are complex collections of values, and when we refer to them, we're actually referencing where they live in memory. That's why we call them "reference types." Strings and numbers are "value types."
--
What does this all mean? When we attempt to compare two objects or arrays with `===`, JavaScript doesn't care if they look like similar collections. It only compares whether or not they are the exact same object in memory. In each case above, checking for equality is actually comparing two objects that are in two different places in memory. They're not exactly "the same."
--
#### != and !==

There are also `!=` and `!==` operators, which are the negative versions of `==` and `===`. And again, we should always use `!==` and `===`, because they are more precise than `!=` and `==`.

---

<a name="codealong2"></a>

## Truthy and Falsey (15 min)

All of the following become false when converted to a Boolean:

- `false`
- `0`
- `""` (empty string)
- `NaN`
- `null`
- `undefined`

All other values become true when converted to a Boolean.

--
There is a simple way of verifying the 'truthyness' or 'falseyness' of a value. When you add `!` in front of a value, the returned value will be the inverse of the value in a Boolean. So if you add two `!` then you'll get the Boolean value of the original one:
--
```javascript
!!1
//=> true

!!0
//=> false

!!-1
//=> true

!![]
//=> true

!!{}
//=> true

!!null
//=> false

!!""
//=> false
```
--
*Find more on truthy and falsey values [here](http://adripofjavascript.com/blog/drips/truthy-and-falsy-values-in-javascript.html)*

---

<a name="codealong3"></a>

## Boolean and Logical Operators (20 min)

When you feed Boolean values of `true` or `false` into logical operators, they will  return `true` or `false` based on a few rules.

There are two "binary" operators that require two values:

- **AND**, denoted `&&`
- **OR**, denoted `||`

A third "unary" operator requires only one value:

* **NOT**, denoted `!`
--

#### && (AND)

The `&&` operator requires both left and right values to be `true` in order to return `true`:

```javascript
true && true
//=> true
```

Any other combination is false.

```javascript
true && false
//=> false

false && false
//=> false
```
--

#### || (OR)

The `||` operator requires just one of the left or right values to be `true` in order to return true.

```javascript
true || false
//=> true

false || true
//=> true

false || false
//=> false
```

Only `false || false` will return `false`

The `!` takes a value and returns the opposite Boolean value:

```javascript
!(true)
//=> false
```
--

### Short-Circuit Logic

`&&` and `||` and `!` don't have to operate only on true or false -- they can operate on any values, and JavaScript will evaluate the truthyness or falseyness of the operands. In the case of `!`, it returns a Boolean true-or-false, but in the case of `&&` and `||`, it returns one of the original operands themselves, using short-circuit logic.
--
This means that the execution of the second operand is dependent on the execution of the first. This is useful for checking for null objects before accessing their attributes:

```javascript
var name = person && person.name;
```

In this case, if the first operand `person` is undefined, which is falsey, the second operand `person.name` will not be evaluated. The expression basically says, "We already know the whole `&&` expression is false, because `person` is falsey. Why bother dealing with the second operand?"
--
Short-circuit logic is also useful for setting default values:

```javascript
var name = person.name || "Bobby Default";
```
--
In this case, if the first operand `person.name` turns out to be falsey for any reason (probably because it's undefined or it's an empty string), `"Bobby Default"` will be returned. If `person.name` is truthy (probably because it's a non-empty string), it will be returned, and the second operand won't be evaluated. The expression basically says, "We already know the whole `||` expression is true, because `person.name` is truthy. Why bother dealing with the second operand?"
--
Further reference: [Mozilla Developer Network article on Logical operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)


---

<a name="practice1"></a>
## Independent Practice (25 min)

Write a program that outputs results based on users’ age. This exercise draws on if/else statements, Boolean logic, and comparison operators. See the conditions below:

- If you are under 16, you cannot do much outside of going to school
- If you are 16 or older, you can drive
- If you 18 or older, you can vote
- If you are 21 or older, you can drink alcohol
- If you are 25 or older, you can rent a car
- If you are 35 or older, you can run for president
- If you are 62 or older, you collect social security benefits

Have the program print out only the most recent thing that they've become eligible to do, i.e. if they are 46, only print "You can run for president.".
--

**Solution**

```javascript
var age = 25;

if (age < 16) {
  console.log('You can go to school!')
} else if (age >= 16 && age < 18) {
  console.log('You can drive!');
} else if (age >= 18 && age < 21) {
  console.log('You can vote!');
} else if (age >= 21 && age < 25) {
  console.log('You can drink alcohol!');
} else if (age >= 25 && age < 35) {
  console.log('You can rent a car!');
} else if (age >= 35 && age < 62) {
  console.log('You can run for president!');
} else if (age >= 62) {
  console.log('You can collect social security!');
} else {
  console.log('Please enter a correct age value');
}

=> You can rent a car!
```

---
<a name="codealong4"></a>
## Switch Statements (25 min)

Now let's look at switch statements. These conditional statements can be used for multiple branches based on a number or string:

--
```javascript
var food = "apple";

switch(food) {
  case 'pear':
    console.log("I like pears");
    break;
  case 'apple':
    console.log("I like apples");
    break;
  default:
    console.log("No favorite");
}
//=> I like apples
```

In this case, the `switch` statement compares `food` to each of the cases (`pear` and `apple`) and evaluates the expressions beneath them if there is a match. It uses `===` to evaluate equality.

The default clause is optional.
--
## Switch Statement Usage

>To illustrate why programmers implement a switch statement—as opposed to if/else logic—compare these two approaches.
--
#### Part 1: Construct If/Else Conditionals

Create an if/else statement that returns a string, such as "Awesome Job" if the user gets a grade of “A” or "Bad Job" if they get an "F." Console.log a string for each letter grade.

```javascript

var grade = 'C';

if (grade === 'A') {
  console.log('Awesome job');
} else if (grade === 'B') {
  console.log('Good job');
} else if (grade === 'C') {
  console.log('Okay job');
} else if (grade === 'D') {
  console.log('Not so good job');
} else if (grade === 'F') {
  console.log('Bad job');
} else {
  console.log('Unexpected grade value entered');
}

```
--
#### Part 2: Construct Similar Logic Using a Switch Statement

Using the if/else statement from above, convert it into a switch statement.
--
Ask students to do this exercise individually.
--
```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
    break;
  case 'B':
    console.log('Good job');
    break;
  case 'C':
    console.log('Okay job');
    break;
  case 'D':
    console.log('Not so good job');
    break;
  case 'F':
    console.log('Bad job');
    break;
  default:
    console.log('Unexpected grade value entered');
}

```
--
#### Part 3: Which is Faster?

Use the if statement when:

  - There are no more than two discrete values for which to test.
  - There are a large number of values that can be easily separated into ranges.

Use the switch statement when:
  
  - There are more than two but fewer than 10 discrete values for which to test.
  - There are no ranges for conditions because the values are nonlinear.

What if the if/else statement had 10 conditions? 100? How would this impact the speed of the program? Please see ['Writing Efficient JavaScript'](http://archive.oreilly.com/pub/a/server-administration/excerpts/even-faster-websites/writing-efficient-javascript.html) for more details.
--
#### Part 4: Intentionally `Break` the Switch Statement

As `break` statements play a major role in switch statements, rewrite the switch statement from Part 2 without any `break`'s:

```javascript
var grade = 'C';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```
--
>Ask the students to explain what is occurring here. If you are unable to generate any responses, try changing the `grade` being evaluated from `'C'` to `'B'`:

```javascript
var grade = 'B';

switch (grade) {
  case 'A':
    console.log('Awesome job');
  case 'B':
    console.log('Good job');
  case 'C':
    console.log('Okay job');
  case 'D':
    console.log('Not so good job');
  case 'F':
    console.log('Bad job');
  default:
    console.log('Unexpected grade value entered');
}

=> Good job
=> Okay job
=> Not so good job
=> Bad job
=> Unexpected grade value entered
```

>Be sure to explain the purpose of the `break`, (i.e., to stop evaluating and break out of the `switch` statement after the condition has been met).
--
#### Part 5: Illustrate the Fall-Through Technique

You will often need to return the same value for different cases. The fall-through technique is one way to achieve this:
--
```javascript
var grade = 'C';

switch (grade) {
  case 'A':
  case 'B':
  case 'C':
    console.log('You passed!')
    break
  case 'D':
  case 'F':
    console.log('You failed')
    break
  default:
    console.log('Unexpected grade value entered')
}

=> You passed!
```

---

<a name="practice2"></a>

## Fizz Buzz: Independent Practice (30 min)

Relying on your new-found knowledge of loops and if/else statements, incrementally build the common Fizz buzz loop. 
- Fizz buzz is a math game designed to teach the concept of division. 
- Loop through the numbers  1-100 and log Fizz if divisible by 3, Buzz if divisible by 5, and FizzBuzz if divisible by 15.


--
##### Step 1:

Construct a for loop that iterates through, and `console.log()`'s out, numbers 1 - 100:

```javascript
for (var num = 1; num <= 100; num++) {
  console.log(num);
}
```

--
##### Step 2:

Add an if/else statement that logs the string `"fizz"` if the value being iterated over is divisible by `3`; otherwise, log out the value:

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else {
    console.log(num)
  }
}
```
--
##### Step 3:

Add an `else if` clause that logs the string `"buzz"` if the value being iterated over is divisible by `5`:

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else {
    console.log(num)
  }
}
```
--
##### Step 4:

Add an additional `else if` clause that logs the string `"fizzbuzz"` if the value being iterated over is divisible by both `3` and `5`. __Note:__ this step is intentionally broken! Place the new `else if` __below__ the evaluations for `fizz` and `buzz`; after running the code, and experiencing the undesired results, prompt the students as to why the `fizzbuzz` evaluation never occurred.

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 3 === 0) {
    console.log('fizz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 15 === 0) {
    console.log('fizzbuzz')
  } else {
    console.log(num)
  }
}
```

--
##### Step 5:

Fix the above code to evaluate the `fizzbuzz` condition:

```javascript
for (var num = 1; num <= 100; num++) {
  if (num % 15 === 0) {
    console.log('fizzbuzz');
  } else if (num % 5 === 0) {
    console.log('buzz')
  } else if (num % 3 === 0) {
    console.log('fizz')
  } else {
    console.log(num)
  }
}
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

These are due on TUESDAY.

--
**Assignment 1: 99 Bottles of Beer**
- Write a script that prints the lyrics to "99 Bottles of Beer on the Wall" in the terminal. If you're unfamiliar with the song, you can [find the lyrics here](http://www.99-bottles-of-beer.net/lyrics.html).
- Make sure your program can handle both singular and plural cases (i.e. both "100 bottles of beer" and "1 bottle of beer").
--

**Assignment 2: Random Address Generator**
- Write a script that can generate random addresses
- As a first step, create arrays that contain dummy data for each of the following: street number, street name, city name, state name and zip code
- Your script should randomly select one item from each of these arrays and then use them to construct a random address
- Each time you run the script, it should print a new randomly-generated address to the terminal. For example:
- `=> 34578 Dolphin Street, Wonka NY, 44506`
--
#### Further Resources
- [Control Flow](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [While](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)


---
## Homework:  
- 99 Bottles of Beer (due Tuesday)
- Random Address Generator (due Tuesday)
- Read and review materials

---
