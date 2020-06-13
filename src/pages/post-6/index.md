---
path: "/arrow-functions-in-js/"
category: "javascript"
tags: ["javascript","es6"]
title: "Arrow functions in ES6"
date: "2019-04-09"
summary: "Arrow function is the most powerful feature in ES6, especially in typescript.Like, look into one simple statement forEach.Normal Statement with a callback function..."
images: ["images/1.jpg"]
---

<strong>Arrow function</strong>  is the most powerful feature in ES6, especially in typescript.Like, look into one simple statement forEach.
Normal Statement with a callback function.

```js
arrayOfItems.forEach(function(x)
	{
		updatedItems.push(x+1);
});
```
```js
arrayOfItems.forEach((x) =&gt; {updatedItems.push(x+1);});
```

In a Javascript class, we use this keyword to refer to the instance of the class.But here are some cases like

```js
(function() {
  'use strict';
  var myObject = {
    foo: 'bar',
    myMethod1 : function() {
      console.log(this);
    }
  };
  function myMethod1() {
    console.log(this);
  }
  myObject.myMethod1();
  myMethod1();
})();

```
myObject.myMethod1() here this used inside myMethod1 will refer to myObject.
Another example you can with this snippet.

```js
var log = console.log; 
log(\'Hello\');
```

Another instance where this is confusing is with respect to anonymous functions.

```js
Class getDateFromServer(){
	init() {
	}
	fetchData()
	{
		getDataById()
		(function callback(err,data) {
			this.init();
		})
	}
}
```
In strict mode, it will be undefined. So arrow functions don\'t set a local copy of this.

```js
class Javascript {
  constructor(frameworks) {
    this.frameworks = Array.isArray(frameworks) ? frameworks : [];
  }
  outputList() {
    this.frameworks
      .forEach((f, i) => console
        .log(f, i + '-' + this.frameworks.length)  // `this` works! 
    )
  }
}

var ctrl = new Javascript(['Angular', 'React']);
ctrl.outputList();
```