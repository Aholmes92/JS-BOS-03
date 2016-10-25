<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 9: jQuery

* Manipulate the DOM by using jQuery selectors and functions.
* Register and trigger event handlers for jQuery events.
* Use event delegation to manage dynamic content.
* Use implicit iteration to update elements of a jQuery. 
* Selection and chaining to place methods on selectors.

---

### Agenda

| Timing | Type | Topic |
| --- | --- | --- |
| 5 min |[Introduction](#introduction) | HW Update|
| 30 min |[Introduction](#introduction) | DOM Review|
| 10 min |[Introduction](#introduction) | DOM Quiz|
| 30 min | [Introduction](#introduction) | jQuery and DOM |
| 50 min | [Codealong](#codealong2) | Augmenting JavaScript with jQuery |
| 30 min | [Lab](#lab2)| Create a Checklist: Independent Practice |
| 15 min | [Opening](#opening) | Events Continued |
| 30 min | [Codealong](#codealong1) | Event Delegation and Best Practices|
| 30 min | [Lab](#lab1) | Appending  |
| 5 min | [Conclusion](#conclusion) | Final Questions & Exit Tickets  |

---

## Homework Review (5 min)

* Completed and on Github
  - Fizz Buzz 
  - 99 Bottles of Beer
  - Random Address Generator 
  - Dice
  - Rocks, Paper, Scissors 
  - JSON HW
  - Object HW

---

## DOM Review:  (30 min)


---

## Quiz:  (10 min)

- Fix the Stoplight

---

<a name = "introduction"></a>

## jQuery and the DOM: Introduction (30 minutes)
By now, you've learned about the DOM and seen how we can use JavaScript to interact with it - reading values from it, and writing values to it. The DOM's _**API**_ (application programming interface) give us access to a couple of different methods that allow us to select elements from the DOM.

--

* `document.getElementById` retrieves a single element with a matching ID.
* `document.getElementsByClassName` retrieves an array of elements that match the given class.
* `document.getElementsByTagName` retrieves an array of elements that are of the given type.

--
However, these options are somewhat limiting. What if we wanted to retrieve the first `<li>` on a particular list with class `specialList`? We might be able to find it by using the `children` property, but that's a little clunky. 

--

If we were using CSS, we could just write a selector like this to style that element:

```CSS
  .specialList li:first-child {
    ...
  }
```

--

Wow - short and powerful! Wouldn't it be nice if we could select elements in the same way?

Enter jQuery. jQuery is an open-source project that was released in 2006, and it's currently the most widely used JavaScript library on the web; originally, it was going to be called "JSelect", but the domain name "JSelect.com" was taken, so its creator, John Resig, decided to call it jQuery instead.

--

jQuery allows us to query (i.e. select elements from) the DOM using the exact same selector syntax that we've used in CSS. 

--


To select the element described above, we would write

```js
jQuery(".specialList li:first-child")
```

--

This will return a 'jQuery Object' - think of it as an abstraction for the search results from our query. You can retrieve any of the specific results using array notation (`jQuery("...")[i]`). 

--

There are also a number of special methods on the 'jQuery Object' that you can call which will manipulate the DOM for _all elements select by the query, at once_. These methods can do things like:

* change styling
* add event listeners for specific events
* write brand new content (text _and_ HTML) into the page

--

Writing 'jQuery' every time we want to make a query is a little tedious, though, so the jQuery team kindly created a shorthand reference that you can use to refer to jQuery : `$`. We can rewrite our jQuery code above as follows.

```js
$(".specialList li:first-child")
```

---

<a name = "codealong2"></a>
## Augmenting JavaScript with jQuery: Codealong (50 min)

When reading the jQuery documentation, be sure to scroll through the whole document to ensure you're looking at the correct method signature. Most jQuery methods change their behavior depending on the number of arguments they have when called.

--
For example, have a look at [.val()](https://api.jquery.com/val/). Note in the table of contents that there are two method signatures, `.val()` and `.val(value)`. This is our hint that `.val()` can do two things.

--

Reading the documentation, we discover that `.val()` is getter on an element, but that `.val(value)` is a setter on an element. Be sure you're using the correct method. Reading examples is very helpful, and the jQuery examples in the docs are fully functional!

--

Here is a list of many commonly used jQuery API functions:

1. **[find()](http://api.jquery.com/find)**
1. **[hide()](http://api.jquery.com/hide)**
1. **[show()](http://api.jquery.com/show)**
1. **[html()](http://api.jquery.com/html)**
1. **[append()](http://api.jquery.com/append)**
1. **[prepend()](http://api.jquery.com/prepend)**
1. **[on()](http://api.jquery.com/on)**
1. **[off()](http://api.jquery.com/off)**
1. **[css()](http://api.jquery.com/css)**
1. **[attr()](http://api.jquery.com/attr)**
1. **[val()](http://api.jquery.com/val)**
1. **[text()](http://api.jquery.com/text)**
1. **[each()](http://api.jquery.com/each)**

--

We can use jQuery to find elements, manipulate the returned elements, change styles, and add event listeners.

Targeting DOM elements in jQuery is a little easier to read than the JavaScript counterpart.

--

```js
  // Target item by id
  $('#item');

  // Target item(s) by class
  $('.box')

  // Target item(s) by tag
  $('h2')
```

--

Setting CSS properties is just as easy
```js
  // It is good practice to prefix items we have selected via jQuery with a $ in front of the variable name
  var $item = $('#item');
  // Setting the css property requires us to pass the property we are changing and the value we are changing it to as parameters (strings) in the css() method
  $item.css('color', 'red');
```

--

We often don't update styles through the css property. This should be done by adding and removing classes appropriately through the `addClass()` and `removeClass()` methods. 

--

We can update the internal html of an element with the html() method. Whatever we pass through the method will replace the current content of the selected element.
```js
  var $item = $('#item');
  // We can replace the content of the element either with text or with additional html.
  var htmlContent = "<p>Hello world</p>";
  $item.html(htmlContent);
```

--

jQuery also gives us access to many events making dealing with user interaction significantly easier.
```js
  var $button = $('#my-button');

  // Most events we will work with will pass as the first parameter in the on() method
  $button.on('click', function(event) {
    event.preventDefault();
    // Do something
  });
```

--

Now let's use jQuery to refactor some JS code! You may either follow along as or you may focus on taking notes.

---

<a name = "lab2"></a>
## Create a Checklist: Independent Practice (30 minutes)

Complete the [main.js](starter-code/jquery_exercise/main.js) app in the [jquery_exercise folder](starter-code/jquery_exercise).

You'll add the ability to complete tasks in your favorite things list:

- Using jQuery, add a "complete task" link at the end of each to-do item (i.e. each "favorite thing")
- When clicked, the link will cross out the current item (hint: add a class to the list that sets the text-decoration to line-through)
- Each new item added by the user needs to also have the "complete task" link at the end

---

<a name = "opening"></a>
## Events Continued (15 minutes)

We were able to implement a click event in the last lesson, however jQuery [and JavaScript] gives us the ability to listen to a plethora of additional user events. Additionally, what if we have multiple events for specific elements? What if we want to listen for events to elements that have not yet been added to our interface?

--

We can listen for mouse, keyboard, form, and document/window events. Today we will focus on mouse events, however listening to other events is very similar to mouse events.

--

*Mouse Events:*
- click
- dblclick
- mouseenter
- mouseleave

--

*Keyboard Events*
- keypress
- keydown
- keyup

--

*Form Events*
- submit
- change
- focus
- blur

--

*Document/Window Events*
- load
- resize
- scroll
- unload

---

<a name = "codealong1"></a>
## Event Delegation and Best Practices: Codealong (30 min)
We started covering mouse events with the click event. We can add additional mouse events in the same manner.

--

```js
  var $thingListItems = $('#fav-list li');

  $thingListItems.on('mouseenter', function(e) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingListItems.on('mouseleave', function(e) {
    $(this).siblings().removeClass('inactive');
  });
```
--

The above code listens for two events:

1. User's mouse set to enter the list item element. In this case, it removes the 'inactive' class from itself (if it exists) and adds it to its sibling list items. *Note: element and sibling class switching is a common best practice to toggle visual effects on user actions.*
2. User's mouse set to leave the list item element. This removes the 'inactive' class from all elements on the same level.

--

While the above code works great for existing elements, if we add new elements to the DOM, the events will not fire up for the newly added elements.

--

It is important to understand that these direct events are only attached to elements at the time that the 'on' method is called. If list items did not exist when the above events were called, they do not get included in the calls above.

--

To get around this, we create a delegated event, which requires us to add the element our event handler executes for, to the right side. Take the above code and modify to:

--

```js
  var $thingList = $('#fav-list');

  $thingList.on('mouseenter', 'li', function(e) {
    $(this).removeClass('inactive');
    $(this).siblings().addClass('inactive');
  });

  $thingList.on('mouseleave', 'li', function(e) {
    $(this).siblings().removeClass('inactive');
  });
```

--

Our code is getting a little inefficient and duplicative. Our list items have two event handles attached to them. We can handle both of the above scenarios with one event handler. Grouping our events by element not only helps us group our code, but it is also a drastically faster operation.

--

```js
  var $thingList = $('#fav-list');

  $thingList.on('mouseenter mouseleave', 'li', function(event) {
       if (event.type == 'mouseenter') {
         $(this).removeClass('inactive');
         $(this).siblings().addClass('inactive');
      } else if (event.type == 'mouseleave') {
          $(this).siblings().removeClass('inactive');
      }
  });
```

--

Let's add a dash in front of every one of our list items (yes in addition to the bullets). jQuery gives us a convenience method to iterate through a list of elements.

```js
  var $thingList = $('#fav-list');

  $thingList.find('li').each(function() {
    $(this).prepend(' - ');
  });
```

---

<a name = "lab1"></a>
## Appending: Independent Practice (30 mintutes)

Open [the starter code](starter-code/event_delegation) and refactor it as follows: use event delegation so that you only have to set one event listener for all the items once - when the code first runs - and you don't have to add any others whenever someone adds an item.

**Bonus**:

- When the user mouses over each item, the item should turn grey. Don't use CSS hovering for this
- Add another link, after each item, that allows you to delete the item


---

<a name = "conclusion"></a>


Make sure the lesson objectives have been met.

* Be able to access and manipulate the DOM with jQuery
* Understand how to use event delegation


---

#### Homework

* Complete 
  - http://try.jquery.com/
  - http://jquery-part2.codeschool.com/levels/1/challenges/1

* Read 
  - http://eloquentjavascript.net/17_http.html
  - http://rve.org.uk/dumprequest
  - https://learn.jquery.com/ajax/key-concepts/


  
---

### Exit Tickets
<a href="http://bit.ly/2cZaU9c">http://bit.ly/2cZaU9c</a>

---
