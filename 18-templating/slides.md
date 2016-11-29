<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 18: Templating

* Use templating in JS
* Add a templating language to our projects for better and more abstracted content manipulation.

---

### Agenda

| Timing | Type | Topic |
| --- | --- | --- |
| 30 min | [Introduction](#introduction) | Separation of Concerns and Templating |
| 35 min | [Codealong](#codealong2)  | Templating  |
| 80 min | [Lab](#lab2) | To Do List: Independent Practice |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets |


---

<a name = "introduction"></a>
## Separation of Concerns and Templating: Introduction (25 minutes)

Through event handlers and DOM manipulation we are able to making our applications more dynamic, interactive, responsive, and just plain fun. However, even with a small to do list app, our code is starting to grow significantly. If we keep stacking features, our code will soon become much more difficult to manage. We are currently having to interact with our data as DOM elements. As our applications start forming relationships, it will become very messy to get values, serialize them, and pass them around.

This is why separating our data from our view logic becomes very important. We can still use jQuery to interact with the DOM and listen for user events, however our business rules (data) should be kept separate from the view. This is where templating becomes very useful.

Templating lets us reference a snippet of code, and populate it with data we store in actual JavaScript objects, before adding it to the DOM. There are many JavaScript templating libraries like [Handlebars](http://handlebarsjs.com/), [Mustache](http://mustache.github.io/), and [Underscore templates](http://underscorejs.org/). Today we will be working with [Handlebars](http://handlebarsjs.com/).

---

<a name = "codealong2"></a>
## Templating: Codealong (35 minutes)
Handlebars has a 4 step process to implementing templates in our applications:

  1. Create the template(s)
  2. Reference and compile template
  3. Pass the object to compile to Handlebars
  4. Add the new compiled element to DOM

--

1. We create our element surrounded in script tags with a reference id and a type of handlebars template. We surround the content that's to be replaced by double curly brackets.

  ```html
    <script id="hello-world-template" type="text/x-handlebars-template">
      <h1>{{helloTitle}}</h1>
      <p>{{helloContent}}</p>
    </script>
  ```

--

2. We can then use jQuery to reference the newly created template and pass that reference to Handlebars.

  ```js
    var source = $('#hello-world-template').html();
    var template = Handlebars.compile(source);
  ```

--

3. We can then pass our data object to the newly created template.

--

4. And add it to the DOM via jQuery.

  ```js
    var source = $('#hello-world-template').html();
    var template = Handlebars.compile(source);

    var helloStatement = { helloTitle: "Hello world", helloContent: "GA JS class is just awesome"};

    var compiledTemplate = template(helloStatement);
    $('body').append(compiledTemplate);

    // or you could have done $('body').append(template(helloStatement));
  ```

--

This routine allows us to organize our code by DOM and event logic (usually taken care of by jQuery in our case) and by model logic (currently just JS models). This will help interacting with data sets much cleaner and more manageable.

---

<a name = "lab2"></a>
## To Do List: Independent Practice (35 minutes)

Build on top of the to-do list app to store your initial to-do data in a JavaScript object and interact with the object whenever the user interacts with the DOM.

1. Use Handlebars to add any new DOM content.

2. Store all of your data in a todos object.

3. Organize your code so your app logic is DRY.

4. Bonus: create a method you can reference in your app to compile your data to Handlebars templates, instead of relying on doing this every time you need to add a DOM object.

---

<a name = "conclusion"></a>
## Conclusion (5 min)

Ask students what was learned. Make sure the objectives have been met.
* Why would we want to use templating?
* What is event delegation? Why would we use it?

---

## Homework


* Projects

---

### Exit Tickets
<a href="http://bit.ly/2cZaU9c">http://bit.ly/2cZaU9c</a>

---
