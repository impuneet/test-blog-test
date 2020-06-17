---
path: "/authorization-in-nodejs"
category: "nodejs"
tags: ["nodejs","security"]
title: "Authorization & Authentication in Node JS"
date: "2020-01-27"
summary: "JWT Token based Authorization..."
images: ["images/2.png"]
---

This article will focus only on the usage of JWT for providing authentication for our REST APIs.

JSON Web Token (JWT) is an open standard that defines a compact and self-contained way of securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.

JWT allows the users to access routes,services and resources that are permitted with that token.

***Advantages of  JWT***

- Purely Stateless
- Shared among services

JWT consists of three parts seperated by an single dot : 
1) Header
2) Payload
3) Sign


I have create an open source example showing the sample JWT.I assume that you are familiar 
with mongo DB.

Open Source Project on Github : https://github.com/impuneet/node-auth-jwt-mongo

I have created three routes in our project.The first API is signup API which in non protected API.Other API is profile API which will need a valid session token of a logged in user.


***Signing the Token**

- Sign method is used to generate a token having three arguments : 

1)PAYLOAD - I have consider userId


```js

const signToken = (payload, expiresIn = '1h') => jwt.sign(payload, config.jwt.secret, {
algorithm: 'HS256',
  expiresIn,
});

```

***Sign up API***

```js

exports.signup = (req, res, next) => {
  const {
    body,
  } = req;

  const user = new User(body);

  user.save()
    .then((created) => {
      const token = signToken({
        id: created.id,
      });

      res.json({
        success: true,
        item: created,
        meta: {
          token,
        },
      });
    })
    .catch((error) => {
      next(new Error(error));
    });
};

```

This API will return the valid token in meta of the API with success true flag.

*** Sign in API ***



```js

exports.signin = (req, res, next) => {
  const {
    body,
  } = req;
  const {
    email,
    password,
  } = body;
  User
    .findOne({
      email,
    })
    .exec()
    .then((user) => {
      if (user && user.verifyPassword(password)) {
        const token = signToken({
          id: user.id,
        });
        res.json({
          success: true,
          item: user,
          meta: {
            token,
          },
        });
      } else {
        next();
      }
    })
    .catch((error) => {
      next(new Error(error));
    });
};

```

routes.js file inclues all the required API urls with authenticated urls.


```js

const {
  auth,
  authFailed,
} = require('./../auth');
const controller = require('./controller');

router.route('/signup')
  .post(controller.signup);

router.route('/signin')
  .post(controller.signin, authFailed);

router.route('/profile')
  .get(auth, controller.profile);

module.exports = router;

```


***Authorization API :***
auth API is used to verify the token with the jwt secret and send the decoded token.

```js

const auth = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization;
  if (token) {
    jwt.verify(token, config.jwt.secret, (err, decoded) => {
      if (err) {
        const message = 'Unauthorized';
        logger.warn(message);
        res.status(401);
        res.json({
          success: false,
          message,
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    const message = 'Forbidden';
    logger.warn(message);
    res.status(403);
    res.json({
      success: false,
      message,
    });
  }
};

```

We’ve passed the JWT token to the verifyToken method we defined earlier. If we get the decrypted user data, we set the same data to a field in the request object.
Otherwise we send an error with an Invalid session-token message.
Now after all our route injections, let us modify the response handler for all our APIs too.

```js

const authFailed = (req, res, next) => {
  res.json({
    success: false,
    message: 'Email or password does not match',
  });
};

```

Having said all this, JWT still solves a lot of use-cases and is very easy to implement.

If you liked the article, you can 👏 the story and share it with others.


### Conclusion

Thanks for reading! If this helped, please give it a clap or two.If you have any questions, leave a comment below or [drop me an email](mailto:iampuneet.in@gmail.com).
If you enjoyed this post, follow me on [Twitter](https://twitter.com/iampuneet_in) for more JS goodness.