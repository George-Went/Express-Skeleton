

# Node 
Node is a server-side platform build on javascript (specifically googles javascript V8 engine). 

Node is designed to build fast and scalable applications that run in real time. Node also works with a variety of pre-existing and node specific libraries. 

> Node.js = Runtime environment (engine) + javascript libraries 

**Note:** 
Javascript was designed as an event driven language for mosaic back in 1996 (and became the default standard because -reasons- ). However most web servers still require back end engines which in most cases means people default to using either apache or ngix to run a loop that detects events on the web site. 


## Features of Node.js

**Asynchronous and Event Driven** − All APIs of Node.js library are asynchronous, that is, non-blocking. It essentially means a Node.js based server never waits for an API to return data. The server moves to the next API after calling it and a notification mechanism of Events of Node.js helps the server to get a response from the previous API call.

**Very Fast** − Being built on Google Chrome's V8 JavaScript Engine, Node.js library is very fast in code execution.

**Single Threaded but Highly Scalable** − Node.js uses a single threaded model with event looping. Event mechanism helps the server to respond in a non-blocking way and makes the server highly scalable as opposed to traditional servers which create limited threads to handle requests. Node.js uses a single threaded program and the same program can provide service to a much larger number of requests than traditional servers like Apache HTTP Server.

**No Buffering** − Node.js applications never buffer any data. These applications simply output the data in chunks.

Areas where Node.js is proving itself as a perfect technology partner: 

* I/O bound Applications
* Data Streaming Applications
* Data Intensive Real-time Applications (DIRT)
* JSON APIs based Applications
* Single Page Applications

> As NodeJS is single threaded, it is inadvisable to use the language for CPU intensive applications 

## Installing Node

### On windows
You can download node installation files from http://nodejs.org/download/ and follow the process to install node onto a windows systems

### On Linux
While you can install node manually from node servers, most package managers will have the latest version of node on them
```
curl -sL https://deb.nodesource.com/setup_10.x | sudo -E bash - 
sudo apt-get install -y nodejs
```

You can check that node and npm are working by looking at their version numbers
```
Node -v
Npm -v
```

## Setting up a node application 
First, create the directory that the project will use
```
mkdir application
```
Node applications run on javascript files, so save work as a ```.js``` file






### Writing a Web application using just Node 
This is a very basic application that demonstrates how node can be used to host web servers and can function as an alternative to using apache or nginx - this application does not use any addons and only uses the libraries that come with node originally. 

```javascript
// Load HTTP module
const http = require("http"); 
// (You can either use constant or variable to denote the modules)

const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server 
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})
```



### Running the Program 
#### Executing the script manually
The most basic way to run a node program is to execute the script manually
```
node <script name>
```


## Node Package Manager (NPM)

NPM is the package manager for Node, in the same way that apt and yum are package managers for linux distributions (ubuntu and rhel respectively) 


###  Using node package manager (npm) 
Navigate to the directory which the project is located in
```
npm init 
```

This creates a package.json with the applications name, launch point (usually index.js or app.js), dev scripts and also the developer dependencies 

### Installing dependencies (add ons)
While creating and using web pages using the pre-existing http api’s in the node language, generally it is much easier to use a framework which does the views and routing protocols for you. For nodes case, the most common web framework used is express

```
npm install <dependancy>
```
when a dependancy is installed it is added to the ```packages.json``` file under ```dependancies```






# Express 

### Hello World 
Express is designed as a web application framework that provides a simple API that allows web server code to go from looking like this:

```javascript
// Load HTTP module
const http = require("http"); 
// (You can either use constant or variable to denote the modules)

const hostname = "127.0.0.1";
const port = 3000;

// Create HTTP server 
const server = http.createServer((req, res) => {

   // Set the response HTTP header with HTTP status and Content type
   res.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body "Hello World"
   res.end('Hello World\n');
});

// Prints a log once the server starts listening
server.listen(port, hostname, () => {
   console.log(`Server running at http://${hostname}:${port}/`);
})
```
To this:

```javascript
var express = require('express'); // Import Express linbraries
var app = express(); // Declare express as "app" (app.method)

app.get('/', function(req, res){ //GET request for express 
   res.send("Hello world!"); // When a GET request is recived, send text
});

app.listen(3000); // server listens on port 3000
```

# Basic Express Skeleton Setup 

## Setting up the Environment 
### Node Package Manager (npm)

NPM is the package manager for Node, in the same way that apt and yum are package managers for linux distributions (ubuntu and rhel respectively) 


###  Using node package manager (npm) 
Start by creating the project directory for the application and navigating into it
```
mkdir <application name>
cd <application name> 
```
**Initilising the project**

When a project is created or deployed, a ```package.json``` file has all the details about the project, allowing systems to easily set up and install the required depenadncies for the project, instead of a user having to manually install all of the npm libraries themsleves.

Navigate to the directory which the project is located in
```
npm init 
```
This creates the ```package.json``` with the applications name, launch point (usually index.js or app.js), dev scripts and also the developer dependencies (npm libraries which are only used by the developer)

**Installing packages** 

npm packages can be installed in one of two ways 
* **Globally** - This installs a package onto a system so that it can be used by **any** node project, regardless of whether or not a specific project has it as one of its dependancies, it is normally used for development packages so that they dont have to be installed on every node project  

```
npm install -g <package name>
```

* **Locally** - This installs the package so that it can only be used by the current project, notice that it also adds the dependancy to the ```package.json```, meaning that any other systems that want to run the program know what the necessary dependancies are.

```
npm install <package name>
```

**Enabeling server restart on file changes** 

Any changes made to an express file will not be reflected unless the program is restarted, one of the easiest tools to automate this when file changes are made is ```nodemon``` (it also serves as a nice intro to dev depandencies). Nodemon runs a demon in the background of the program that restarts the service when it detects file changes on the machine hosting the program 

Installing nodemon 
```
npm install --save-dev nodemon
``` 

**Adding scripts to the server** 

normaly to start the service, a user has to specify the file that they want node to run i.e ```node ./bin/www```. With scripts we can simplify this to ```npm start`` when in the directory that the program is stored in. 

Find the scripts section of the ```package.json```. Initially it will only contain the ```"start"``` command, we can update this so that devs can start with the nodemon using ```npm devstart```.

Updating the ```package.json```
```
"scripts": {
    "start": "node ./bin/www",
    "devstart": "nodemon ./bin/www"
  },
```
we can now start the program using nodemon by using:
```
npm run devstart
``` 


## Setting up the file structure
The basic file structure of the project is similar to a normal website directory structure, with routing and view templates in seperate directories.

```
/application directory
    app.js
    /bin
        www
    package.json
    package-lock.json
    /node_modules
        [about 6700 subdirectories and files]
    /public
        /images
        /javascripts
        /stylesheets
            style.css
    /routes
        index.js
        users.js
    /views
        error.pug
        index.pug
        layout.pug
```

## www

This is where the program actually starts, and is the first thing a user will (technically) access when they first arrivfor at least an houre to the directory - the first and only thing it does is direct the user to the real access point of the program - the ```app.js``` file and where abouts it is located , you can see this due to the fact that in very basic skeleton application, the only lines are importing the contents of the app.js functions 

```./bin/www``` structure:
```javascript
var app = require('../app'); //imports the app.js 
```
> **Note:** ```require()``` is a global node function that is used to import modules into the current file. Here we specify app.js module using a relative path and omitting the optional (.js) file extension.

## App.js

This is the main ‘starting point’ for the application and is where most of the work happens, by convention its called app, similar to ‘main’ files in other programs. 

### Imports 
The first part of an app.js file is concerned with the node libraries and can be used to import npm packages such as express (needed for express applications suprisingly) among other node libraries such as http-errors, morgan and cookie-parser. 

```javascript
var express = require('express');
var createError = require('http-errors');
var path = require('path');
```

> **Note:** The ```require()``` function in node acts like the import function in other languages such as java or python.

After importing modules, we then need to import our own modules from our application directory, in particular our routes (URL paths). This can also be extended to other functions such as database controllers or induvidual functions executed by multiple pages such as permission checking systems. 

```javascript
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
```
> **Note:** At this point we have *imported* the modules, we havent used them or the functions within them at this point.

### Generation 
Once we have imported all of our own libraries and modules we can then generate the application.

```javascript 
var app = express(); // defines the express libraries as app
```

### Middleware 
Adding middleware such as templating and error handeling can be done by utilising the ```app.set``` function to point to a directory, and the ```app.use``` function to use a imported middleware funciton or route.  

### Routes 

### Error Handling 

### Exporting the final product



## Routing 
Web frameworks provide resources such as HTML pages, scripts, images, etc. at different routes.

While you can set up routes (as well the entire site) within the app.js file (like most helloworld programs in node), it's better practice to use a specific routing directories to organise your sites structure.

In Express routing functions are defined by ```app.method(path,handler)```

The example routing files in the skeleton project above, ```index.js``` and ```example.js``` are examples of 

**Creating a basic routing file** 
```./routes/example.js```
```javascript
var express = require('express');  //imports express libraries 
var router = express.Router();     //defines express.router as router

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//export this router to use in our app.js
module.exports = router;
```
> The above code defines a route so that when a user visits ( ```/example``` ) **plus** the defined route in the above file ( ```/``` ). In other words this means that when a user visits ( ```/example/``` ) they will recive the above resource.  

## Views / Templates 
Templating engines are used to remove HTML code clutter when generating or auto-generating pages. One of the most commonly used templating languages is Pug, formally known as Jade. 

> **Note:** Pug was formally known as Jade, some tutorials online still refer to it as such.

**Installing Pug** 
Pug can be installed using the node package manager 
```
npm install --save pug 
```

**Setting the templating engine**
To use a templating engine, two functions are needed. One to set nodes view engine to the correct templating package, and one to show the templating engine where our templates are stored. 

**Adding a template engine** ```app.js```
```javascript
app.set('view engine', 'pug'); //Sets template engine to pug
app.set('views', path.join(__dirname, 'views'));  //shows template engine where templates are
```

> **Note:** 
>```app.set('views', path.join(__dirname, 'views'))``` is the same as typing in the directory for views manually i.e. ```app.set('views', '/views')```

The above code allows for pug to use templates that are stored in ```/views```

As well as specifying the template engine, you also have to make sure that the express "```.app```" can find and then use public files, such as images, javascript and most importantly for our templates, css stylesheets. This can be solved by allowing the app to use files that are stored under ```/public```, in a similar fashion to allowing the app to access third party middleware. 

```javascript

app.use(express.static(path.join(__dirname, './public')));

```
> Note - This code needs to be placed after added routes, otherwise the new files cant access ```/public```

## Third Party Middleware and Error Handeling 
One of the main advantages of node is that it allows third party libraries to be easily linked into the application.


As an example, common third party packages include: 

* **cookie-parser:** Used to parse the cookie header and populate req.cookies (essentially provides a convenient method for accessing cookie information).
* **debug:** A tiny node debugging utility modeled after node core's debugging technique.
* **morgan:** An HTTP request logger middleware for node.
* **http-errors:** Create HTTP errors where needed (for express error handling).

you can install these packages using 
```
npm install --save cookie-parser morgan debug http-errors
```
> **Note** You can see in ```package.json``` that the packages have been added to the "dependancies". 

> **Note** If your using a pre-built node application, you can install all the relevent dependancies by using ```npm install```.

### Importing the dependacies 
We can import our packages into the ```app.js``` express application in the same way that routes are imported. 

```javascript
app.use(logger('dev'));
app.use(cookieParser());
//Note that this needs to go before adding your own routes 
```

### Error Handeling 
Error handeling is one of the last things to do before exporting the app. 404 pages are one of the most common issues, where a user is directed towards a route or file where a user exists. 

The addition of the http-errors package allows for a easy way to detect different types of errors and execute a function 

```javascript
// 404 catch
app.use(function(req, res, next) {
  next(createError(404));
});
```

You can also add error handling and logging for developers only, specifically when they start on a local system using ```npm devstart``` 

```javascript
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
```




