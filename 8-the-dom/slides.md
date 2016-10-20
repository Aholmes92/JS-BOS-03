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

- Obects
- Scope

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

--


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

--

3. Including the JavaScript file [at the footer] of our site/app.

--

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

--

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

--

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

<a name = "lab1"></a>
## DOM Manipulation: Independent Practice (25 minutes)

Complete the [main.js](starter-code/js_dom_exercise/main.js) file in [js_dom_exercise](starter-code/js_dom_exercise) folder:

- When the user clicks the submit button, take the value they've typed into the input box and add it to the list (remember: `appendChild`!)

- Also, when a new item is added to the list, clear the input box. (Hint: the `value` property of the input box, before anyone types in it,
is the empty string.)

- Bonus:  When they click submit without typing anything, alert the user "you must type in a value!"

---

<a name = "lab1"></a>
## DOM Manipulation: Independent Practice (10 minutes)
#Create a Light Switch 


---

<a name = "lab1"></a>
## DOM Manipulation: Independent Practice (10 minutes)
#Create a Calculator

---


<a name = "lab1"></a>
## DOM Manipulation: Independent Practice (10 minutes)
#Create a Color Changer
 
---

<a name = "conclusion"></a>


Make sure the lesson objectives have been met.

* Be able to access and manipulate the DOM
* Understand how Javascript interacts with the DOM


---
#### Homework

* Complete 
  - http://try.jquery.com/

* Read 
  - http://eloquentjavascript.net/12_browser.html
  - http://eloquentjavascript.net/13_dom.html
  - http://eloquentjavascript.net/14_event.html

* Bonus
  - Add user interface to previous homework by interacting with the DOM
  - Organize code of previous homework into namespaced objects
  
---

### Exit Tickets
<a href="http://bit.ly/2cZaU9c">http://bit.ly/2cZaU9c</a>

---
