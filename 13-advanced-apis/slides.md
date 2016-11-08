<img src="https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/5225/JS-logo-official.png" style="max-width: 100px; border: none; box-shadow: none" />
### Class 13: Advanced APIs

* Use the Facebook API
* Use the JTinder Library

---

### Agenda

| Timing | Type | Topic |
| --- | --- | --- |
| 25 min | [Opening](#opening) | Review Homework |
| 60 min | [Lab](#lab1) | Facebook API |
| 30 min | [lab](#lab2) | JTinder Library |
| 5 min |  [Conclusion](#conclusion)| Homework, Final Questions & Exit Tickets |


---

## Homework Review (20 min)

* Completed and on Github
  - Fizz Buzz 
  - 99 Bottles of Beer
  - Random Address Generator 
  - Dice
  - Rocks, Paper, Scissors 
  - JSON HW
  - Object HW
  - Spotify API
  - REVIEW:  Bank, RPS, Geometry

---

<a name = "recap"></a>
## Facebook App

We are going to use the Facebook API and the JTinder library to build our own version of Tinder.  

This will not be a full application.  
We are going to build an application that will let a user login using the Facebook API and then it will allow them to swipe right or left on a list of their friends.

--

We are going to need the Facebook API documentation and the JTinder libary documentation.  We will tackle one at a time.

--

Here are our goals
1.  Instal Node
2.  Sign up as Facebook Developer
3.  Find the Facebook API documentation
4.  Learn how to use the Facebook API to let a user log in
5.  Learn how to user the Facebook API to get a user's friends
6.  Find the JTinder Library
7.  Learn how to implement JTinder swiping affects
8.  Implement JTinder swiping affects with a Facebook API user's friends' data

--
## 1.  Install Node

Let's install Node which is a web server written in javascript that we can run on our computer.

---

## 2.  Sign up as Facebook Developer

<a href="https://developers.facebook.com/apps/1395272264081262/settings/">https://developers.facebook.com/apps/1395272264081262/settings/</a>


---

## 3.  Find the Facebook API documentation

Main Docs
* https://developers.facebook.com/
* https://developers.facebook.com/docs/

--

Docs specific to web 
* https://developers.facebook.com/docs/web
* https://developers.facebook.com/docs/javascript/reference/v2.8

--

Docs specific to graph API
* https://developers.facebook.com/docs/graph-api
* https://developers.facebook.com/docs/graph-api/reference

--

Docs specific to login
* https://developers.facebook.com/docs/facebook-login
* https://developers.facebook.com/docs/facebook-login/web
* https://developers.facebook.com/docs/facebook-login/web/permissions

--

Where do we start?

---

## 4.  Learn how to use the Facebook API to let a user log in

Start here :) 

https://developers.facebook.com/docs/facebook-login/web

Let's work through their example together 

-- 

Next up! We logged someone in, let's make an API call!

https://developers.facebook.com/docs/facebook-login/web/accesstokens

---

## 5.  Learn how to user the Facebook API to get a user's friends

Time to find out what API call we need to get a user's friends.
--
We need to ask them for permissions first
https://developers.facebook.com/docs/facebook-login/web/permissions
https://developers.facebook.com/docs/facebook-login/permissions/overview

--

We can get a lot of information about the user, their feed, we can make posts for them, etc
https://developers.facebook.com/docs/graph-api/reference/user/

But to get a list of friends, we need to be creative
https://developers.facebook.com/docs/graph-api/reference/user/taggable_friends/

---

## 6.  Find the JTinder Library

https://github.com/do-web/jTinder

---

## 7.  Learn how to implement JTinder swiping affects

http://netcup-gutschein.x5c.de/jtinder/

---

## 8.  Implement JTinder swiping affects with a Facebook API user's friends' data

Let's put it all together!


---

## Homework


* Complete 
  - Facebook API app
    
* Watch, Read, Do
  - Review and code along to resource examples for Functions, Anonymous Functions, Closures, Callbacks, and IIFE.

---

### Exit Tickets
<a href="http://bit.ly/2cZaU9c">http://bit.ly/2cZaU9c</a>

---
