---
path: "/post-3/"
category: "nodejs"
tags: ["nodejs","security"]
title: "Security Measurement in Node js"
date: "2020-01-27"
summary: "DOS Attack will crash / shut down a network, or machine, making it inaccessible. Which means users won’t be able to access your application,for example."
images: ["images/1.png"]
---

Node js Security measurements : 

Threats in API :
DOS Attacks, XSS, SQL/NoSQL Injection Attacks 


**Denial-Of-Service (DOS) Attacks**

DOS Attack will crash / shut down a network, or machine, making it inaccessible. Which means users won’t be able to access your application,for example. Attacker accomplishes this by constantly sending requests, creating traffic and sending plenty of all kind of a informations.

**Cross-Site Scripting (XSS) Attacks** 

XSS Attacks are a type of injections. Attackers inject malicious scripts into the forms of a browser side script.
Usually they occur on input forms when those forms are not validated or encoded 

**Brute Force Attacks**

Brute force attack is a method used to obtain sensitive data such as user password or personal identification number (PIN).
In these attacks, attackers most likely rely on automated software to generate a large numbers guesses to the value of desired data.


**SQL/NoSQL Injection Attacks**

SQL/NoSQL Injection (SQLi) Attacks is a type of an injection attack. 
SQL/NoSQL Injection makes it possible for attacker to execute malicious SQL/NoSQL statements.
Attackers can achieve SQL/NoSQL Injection attack simply by inserting SQL/NoSQL comman (queries) to a specific fields on your application that is connected to a database (POST request for logging in for example).



> **Preventing DOS Attacks**
Limit the actual payload that user can submit to your api.You can limit the body payload using body-parser.

```js
app.use(express.json({limit : '10kb'}));
```

We can also use express-rate-limit dependency.You can set rate limit for users.

***Preventing XSS Attacks***

First of all, you can sanitize user data, on input. This is very easy to implement, and we can use another useful dependency called xss-clean.

***Using the Helmet module***

Helmet helps you secure your Express applications by setting various HTTP headers, like:
The X-Frame-Options HTTP response header can be used to indicate whether or not a browser should be allowed to render a page in a frame,iframe ,emberd or object.

Sites can use this to avoid clickjacking attacks, by ensuring that their content is not embedded into other sites.

```js
X-Frame-Options: DENY
X-Frame-Options: SAMEORIGIN
X-Frame-Options: ALLOW-FROM http://example.com
```

In the example above, Facepamphlet could mitigate clickjacking attacks by setting the X-Frame-Options header to DENY, preventing its pages from being put in iframes. Many websites do this by frameguard.

https://helmetjs.github.io/docs/frameguard/

```js

const helmet = require('helmet')

app.use(helmet.frameguard({ action: 'sameorigin' }))
```

```js

// Allow from a specific host.
// Sets "X-Frame-Options: ALLOW-FROM http://example.com".
// Note that browser support for this option is low!
app.use(frameguard({
  action: 'allow-from',
  domain: 'http://example.com'
}))

```

Validating user input : 

To validate user input, one of the best libraries you can pick is joi.
Joi is an object schema description language and validator for JavaScript objects. 
To get an idea what it can do for you, take a look at the following example:


```js

const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
    access_token: [Joi.string(), Joi.number()],
    birthyear: Joi.number().integer().min(1900).max(2013),
    email: Joi.string().email()
}).with('username', 'birthyear').without('password', 'access_token')

// Return result
const result = Joi.validate({
    username: 'abc',
    birthyear: 1994
}, schema)
// result.error === null -> valid

```

If you are using an ORM like sequelize, 
it comes with the concept of Prepared Statements (also sometimes referred as Parameterized Statements too).Just like the mysql module, it understands ? and will encode it properly.

***Session Management in NODE JS***
The importance of cookies in secure session management can not be understated.

Attributes in Cookie Flags : 
> secure - send cookie only if the request is being sent over HTTPS
> HttpOnly - prevent attacks such as cross scripting since it does not allow javascript to access cookies.


You can use Cookie-session module :

https://www.npmjs.com/package/cookie-session


```js

var cookieSession = require('cookie-session')
var express = require('express')
var app = express()

app.set('trust proxy', 1) // trust first proxy

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

// This allows you to set req.session.maxAge to let certain sessions
// have a different value than the default.
app.use(function (req, res, next) {
  req.sessionOptions.maxAge = req.session.maxAge || req.sessionOptions.maxAge
})

```

### Conclusion

Thanks for reading! If this helped, please give it a clap or two.If you have any questions, leave a comment below or [drop me an email](mailto:iampuneet.in@gmail.com).
If you enjoyed this post, follow me on [Twitter](https://twitter.com/iampuneet_in) for more JS goodness.