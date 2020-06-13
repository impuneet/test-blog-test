---
path: "/streams-in-nodejs/"
category: "nodejs"
tags: ["nodejs",streams]
title: "Understanding Streams in Node JS"
date: "2018-01-04T00:00:00.000Z"
summary: "Nodejs allows us to pipeline our tasks with the help of streams.Hence Node js works on single thread but this does not means we can not do two tasks or process at a time.This can be done via Child Processes in NodeJs...."
images: ["images/1.jpg"]

---

As NodeJS is known for it\'s asynchronous nature and have many modules that we used in daily code base but don't get deeper into it.
One of the core modules is Streams.Streams allow us to handle data flow asynchronously.Two data handling approaches are there in NodeJS.
**1. Buffered approach**: Buffered approach say that reciever can read the data only if whole data is written to the buffer.

**2. Streams approach**:In Streamed approach data arrives in chunks and also can be read in chunks this can be a  single part of the data.

![These are the  Streams available](https://res.cloudinary.com/dwnvnfejf/image/upload/v1562829945/blog/stream-nodejs/stream-types-300x248.png)


<div class="filename">UserInterface.js</div>

```js
const fs = require("fs");
const file = fs.createWriteStream("./big.file");
for (let i = 0; i <= 1e6; i++) {
	file.write(
	    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n"
	)};
	file.end();
```

We have created a file using Writable Stream. fs module in node js can be used to read from and write to files using a Stream interface.Running the script above generates a file that’s about ~400 MB.

**Read the same big file using read Stream :**

<div class="filename">stream1.js</div>

```js
const fs = require("fs");
const server = require("http").createServer();

server.on("request", (req, res) => {
	fs.readFile("./big.file", (err, data) => {
	if (err) throw err;
		res.end(data);
	});
});
server.listen(8000);
```
Then I connected to the server. Note what happened to the memory consumed:

![enter image description here](https://res.cloudinary.com/dwnvnfejf/image/upload/v1562836283/blog/stream-nodejs/pic3-455x174.png)

> Optimised Solution for data transformation

**Time Efficiency :** There is great behaviour of Streams that is piping.basically you can pipe two of the stream where output of one stream is an input to the other.

What happens is “data” (chunk) arrives at the “stream 1" which is piped to stream 2" which can further be piped to other streams.

With Pipes : 
![enter image description here](https://res.cloudinary.com/dwnvnfejf/image/upload/v1562836462/blog/stream-nodejs/pic4-1024x409.png)

```js
const fs = require("fs");
const server = require("http").createServer();
server.on("request", (req, res) => {
	const src = fs.createReadStream("./big.file");
	src.pipe(res);
});
server.listen(8000);
```

## Conclusion

This is how we can parallelize multiple stages a data chunk might go through,  This strategy is called as pipe lining.

Nodejs allows us to pipeline our tasks with the help of streams.\r\n\r\nHence Node js works on single thread but this doesn\'t means we can\'t do two tasks or process at a time.This can be done via Child Processes in NodeJs.

Read my next article regarding child process in Node JS.