---
path: "/structuring-nodejs/"
category: "nodejs"
tags: ["nodejs"]
title: "Structuring Your Node JS Application"
date: "2019-04-09"
summary: "A Very little Design and Architecture knowledge are spread around NODEJS eco-system. You already know about MVC but MVC here can be delivery mechanism,not an application architecture...."
images: ["images/3.png"]
---

A Very little Design and Architecture knowledge are spread around NODEJS eco-system. You already know about MVC but MVC here can be delivery mechanism,not an application architecture.Most of the Applications in NODEJS follows this pattern then what\'s wrong in that ?

![enter image description here](https://res.cloudinary.com/dwnvnfejf/image/upload/v1562842629/blog/microservices/surprise-gif-2-300x191.gif)

The reason is, Can you really describe your entire business logic, service layer & communication  with other layer services in only two Controllers & Models.

For Medium scale NodeJS applications monoliths are bad because having dependencies over others can often lead to spaghetti code. I have seen some smart architects those who modularize it.
In a Modularized structure adding new Features in a product to realize the impact of their change and fear to break other dependent modules hence\r\nit makes the delivery of the product slower that leads to inappropriate Feature estimations and obviously, that product can become challenging for its scalability.

Blog Quote:
 

> **"Scaling requires scaling of the entire application\"**

Monolithic applications can be successful, but increasingly people are feeling frustrations with them - especially as more  applications are being deployed to the cloud. Change cycles are tied together - a change made to a small part of the application  requires the entire monolith to be rebuilt and deployed. Over time it\'s often hard to keep a good modular structure, making it  harder to keep changes that ought to only affect one module within that module. Scaling requires scaling of the entire application  rather than parts of it that require greater resource.

> **Blog Quote: "So what does the architecture of your application scream?\"**

...if you were looking at the architecture of a library, you’d likely see a grand entrance, an area for check-in-out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: Library .So the solution is to divide  the whole into self-contained components and these self contained components don\'t share files with others. 

So you can say it as Microservice architecture which is a set of principles.

MVC as an Application Architecture that is wrong to do.

![enter image description here](https://res.cloudinary.com/dwnvnfejf/image/upload/v1562843061/blog/microservices/Capture-e1546678989104-357x400.png)


## Conclusion


Microservice Architecture having self-contained components. Right Way