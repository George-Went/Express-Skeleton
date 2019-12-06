

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




## Node Package Manager (NPM)

NPM is the package manager for Node, in the same way that apt and yum are package managers for linux distributions (ubuntu and rhel respectively) 


###  Using node package manager (npm) 
Navigate to the directory which the project is located in
```
npm init 
```

This creates a ```package.json``` with the applications name, launch point (usually ```index.js``` or ```app.js```), dev scripts and also the developer dependencies. 

### Installing dependencies (add ons)
While creating and using web pages using the pre-existing http api’s in the node language, generally it is much easier to use a framework which does the views and routing protocols for you. For nodes case, the most common web framework used is express.

```
npm install --save <dependancy>
```

>**note**  
The addition of ```--save``` will add whatever we intall as a dependancy in our ```package.json``` file.

when a dependancy is installed it is added to the ```packages.json``` file under ```dependancies```







### Hello World 
The most basic Node program, this just prints out ```Hello World``` to the console.
  
First we can create our main file ```app.js```, this will be used in this project and future projects as the start point of applications - the 'launch pad' if you will. 

```app.js```
```javascript
console.log('Hello World');
```




## Running the Program 
### Executing the script manually
The most basic way to run a node program is to execute the script manually
```
node <script name>
```
For the above ```app.js``` file, we can run ```node app.js``` to run the script.

Usually however this is not standard operating procedure when running a node application.  
In our ```package.json``` file, we can see that there are scritps that we can execute: 

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
```

We can add our own scripts, which can start the node application

```json
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app",
  },
```
We can then run ```npm start``` whcih will run the start script - which itself will run ```node app```.



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



# Express - Setting up a simple Server 
To get started with expess, we can set up a simple server that hosts a web page displaying the text "Hello world"

```app.js```
```javascript
var express = require('express'); //app.js requires Express

//Initilise app 
var app = express();

// Home Route 
app.get('/', function(req, res){
  res.send('Hello World');
});
//When a GET function is recived, the application will send the response (in this case "Hello world")


//This will detect any port 3000 traffic and respond with the function defined (in this case, the console prints out the string)
app.listen(3000, function(){
  console.log('server started on port 3000')
});

```

# Templating Engines

One of the main issues with node is that writing HTML and CSS code directly into a javascript ```.get``` function is that it can be hard to tell when the js ends and the HTML begins. 

Templating engines are used to remove HTML code clutter when generating or auto-generating pages, if you have a HTML page that has a generated dev based on the result of a .js file var, congratulations thats technically a templating engine. 

In short, a templating engine can turn this:


```javascript
app.get('/', function(req, res){ //GET request for express 
   res.send("<html><head> <title>Index</title></head><body><h1>Hello World!</h1></body></html>"); // When a GET request is recived, send text
});
```
into this

```index.pug```
```pug
doctype html
html
   head 
      title Index
   body 
      h1 Hello world!
```

> **Note:** Pug was formally known as Jade, some tutorials online still refer to it as such.

**Installing Pug** 
Pug can be installed using the node package manager 
```
npm install --save pug 
```


## Utilising View Engines

### Setting up a views directory 
While we can save our pug code into the root directory of the program at the same level as app.js. This could create problems if we wanted to create a larger program with multiple views, our file structure would be incredebly messy.  
To solve this we can create a ```/views``` directory to store our pug files.

We can use the npm module ```path``` to then allow our app to know where the pug files are. 

```javascript
var path = require('path'); 
```

### Setting the Templating Engine  
To use a templating engine, two functions are needed. 
One to set nodes view engine to the correct templating package
One to show the templating engine where our templates are stored. 


**Adding a template engine**   

```javascript
app.set('view engine', 'pug'); //Sets template engine to pug
app.set('views', path.join(__dirname, 'views'));  //shows template engine where templates are
```

> **Note:**  
>```app.set('views', path.join(__dirname, 'views'))```   
is the same as typing in the directory for views manually i.e.  
  ```app.set('views', '/views')```

The above code allows for pug to use templates that are stored in ```/views```


## Pug Files
Pug uses indentation instead of brackets as a way to organise HTML.
You can either use spaces or tabs, but make sure to be consistant in yoiur usage of either - you cant use both in the same file.

```html
<!DOCTYPE html>
<html>
   <head>
      <title>Library</title>
   </head>
   <body>
      <h1>Books</h1>
   </body>
</html>
```
In pug would be:

```pug
doctype html
html
   head
      title Library
   body
      h1 Books
```

You can also use variables in pug to allow for templated files, for example:

```javascript
// Home Route
app.get('/', function(req, res){
  res.render('index', {
    title: 'Hello' // variable set - titles value is "Hello"
  });
});
```
Your ```views.pug``` file can look like:

```pug
doctype html
html
   head
      title Library
   body
      h1 Books
      h2 #{title}
```

We can also use the code in this pug file to create a completly new route in ```app.js```: 

```javascript
// Add Route
app.get('/book/add', function(req, res){
  res.render('add_book', {
    title:'Add Book'
  })
});
```
add a new pug file called ```add_book.pug```
>**Note**  
Make sure the file name is the same as the name that is called in the ```res.render()``` route - if the files are not called the same value, the server will "fail to lookup view ```filename```"
```pug
doctype html
html
   head
      title Library
   body
      h1 Books
      h2 #{title}
```

### Layouts
One of the main things you may have noticed if you set up two routes with pug files attached is that they have a lot of the same code in the pug file. One of the ways we can organise our designs is through the usage of **layouts**.

We can create a file called ```layout.pug``` to put some of the basic html/pug code that is used in all of our pages.

```layout.pug```
```pug
doctype html
html
   head
      title Library
   body
      block content
      br
      hr
      footer
         p Footer 
```

To use this view file in other .pug files, we can use ```extends.layout```  
The ```block content``` within the layout pug code is an imporant part, as its where we can specify other views to import their code In the ```index.pug``` file we created earlier, we can remove all of the html code except for our titles so that it looks like this:  
```
extends layout

block content
   h2 #{title}
```

### Displaying Variable Data
We can also add control structures such as **if statments** and **loops**. 

While most data from websites come from databases, for the moment, we can replicate this data by just having a static array of data in a route.

```javascript
// Book List Route
app.get('/books', function(req, res){
  let books = [ // We create an array called "books"
    {
      id: 1,
      title: "Book 1",
      author: "Gwent went",
      body: "Star Platinum"
    },
    {
      id: 2,
      title: "Book 2",
      author: "Gwent went",
      body: "Joe mama"
    },
    {
      id: 3,
      title: "Book 3",
      author: "joestar",
      body: "AYAYAYAYA"
    },
  ]
  //Respons with a render of the infomation
  res.render('books', {
    title: 'List of Books',
    books: books // "books" value is the "books" array
  });
});
```

We can use this array as a set of example data that we can display using a pug file:  

```pug
extends layout

block content
   h1 #{title}              
   ul
      each book, i in books 
         li= book.title     
```
The above pug file ```books.pug```   works as such:  
- The ```layout.pug``` file is included, allowing for a header and a footer.    
- The ```block content``` is used, meaning that any indented code within the tag is impoted into the ```layout.pug``` ```content``` block.  
- The Header title is parsed from the response ```render(title: List of Books)```  
- the ```ul`` tag defines an unordered list - meaning instead of numbers, bullet points are used.  
- The each (for) loop means that for each ```book``` in the array ```books```, the page will render the ```book.title``` in a **list** (```li```)  
- The array is parsed into the ```books.pug``` file using ```render(books.books)```, this means that the variable books will render the unorderd list in the ```books.pug``` file.  






















# Old stuff




As well as specifying the template engine, you also have to make sure that the express "```.app```" can find and then use public files, such as images, javascript and most importantly for our templates, css stylesheets. This can be solved by allowing the app to use files that are stored under ```/public```, in a similar fashion to allowing the app to access third party middleware. 

```javascript

app.use(express.static(path.join(__dirname, './public')));

```
> Note - This code needs to be placed after added routes, otherwise the new files cant access ```/public```
```
doctype html
html
   head 
      title Index
   body 
      h1 Hello world!
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


# File Structure
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





















# Routing 
Web frameworks provide resources such as HTML pages, scripts, images, etc. at different routes.

While you can set up routes (as well the entire site) within the app.js file (like most helloworld programs in node), it's better practice to use a specific routing directories to organise your sites structure.

In Express routing functions are defined by ```app.method(path,handler)```

The example routing files in the skeleton project above, ```index.js``` and ```example.js``` are examples of 

## Creating a basic routing file 
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


## Changing data based on URL Parameters  
One of the most common ways applications communicate data between backend and frontend systems is by parsing data transmitted through the URL, known as URL encoding.

Another major part of sites is being able to generate route handlers automatically, such as dashboards for induvidual users.

URL parameters can be set up by putting a colon before a router. For example, having a ```router.get('/Library/:Book', function(req,res)```  means that ```:Book``` will be interpreted as data and not as a destination.

An example of how paramaters can work with both node and the pug template structure: 

```/routes/index.js```
```javascript
router.get('/:name/:address', function(req,res) {
   var name = req.params.name;
   var address = req.params.address;
   res.render('index', {title: name, address## Views / Templates 


One of the main issues with node is that writing HTML and CSS code directly into a javascript ```.get``` function is that it can be hard to tell when the js ends and the HTML begins. 

Templating engines are used to remove HTML code clutter when generating or auto-generating pages, if you have a HTML page that has a generated dev based on the result of a .js file var, congratulations thats technically a templating engine. 

In short, a templating engine can turn this:


```javascript
app.get('/', function(req, res){ //GET request for express 
   res.send("<html><head> <title>Index</title></head><body><h1>Hello World!</h1></body></html>"); // When a GET request is recived, send text
});
```
into this

```index.pug```
```pug
doctype html
html
   head 
      title Index
   body 
      h1 Hello world!
```

One of the most commonly used templating languages is Pug, formally known as Jade. 

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
> Note - This code needs to be placed after added routes, otherwise the new files cant access ```/public```: address});
});
```

```views/index.pug```
```pug 
extends layout

block content
  h1= title
  p Welcome to #{name}
  p Adress: #{address}
```








































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






# MongoBD

Mongodb is a NoSQL database that stores data in JSON like (Javascript Object Notation).


## Installation of MongoDB  

>**Note:** Most of this guide comes from https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/ 

**Adding MongoDB Repositories (Depends on system)**
Depending on the version / distro of linux, MongoDB may not be in the package manger that we are using, if this is the case you will usually get an error stating that "the package is not avalible" or that it "is referanced by another package". 

In this case we can install the official mongodb repository and install the packages from there. 

First we have to import the GPG keys for the mongodb server
```sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927```

After this we can import the mongodb repository details so ```apt``` will know where the packages can be downloaded from. 

```echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list```

after adding the repository details, we can finish off with making sure that all the packages in the repository are up to date.

```sudo apt-get update```

### Installation of the packages  

   
Now we can install the MongoDB Packages   
```sudo apt-get install -y mongodb-org```  
This installes the latest stable version of MongoDB

### Uninstalling Mongodb    

```bash
sudo service mongod stop  
sudo apt-get purge mongodb-org*
```

You also have to remove the data directories
```
sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongodb
```


If you get isses stating that mongodb-org dependancies are not met, you first need to remove the mongodb-org packages as well (using the same commands as above).

## Running MongoDB

**Note**  
>Directories  
If you installed via the package manager, the data directory (place where data is stored) **/var/lib/mongodb** and the log directory **/var/log/mongodb** are created during the installation.  
By default, MongoDB runs using the mongodb user account. If you change the user that runs the MongoDB process, you must also modify the permission to the data and log directories to give this user access to these directories.  

### Configuration (confing) Files
The configuration files can be found under **/etc/mongod.conf**

### Starting Mongodb
You can start the process using:   
```sudo service mongod start```  
You can also use:  
```sudo systemctl start mongodb```

>**Mongod** is the daemon that runs mongodb, this runs all the server tasks, including accepting requests, responding to clients and memory management.    
(deamons are programs that run in the background)  

>**Mongo** is a command line shell that can interact with the client - this can be usueful for system administrators and developers, but is not used if a program connects to a database over its api.

You can check that the process is running using:     
```sudo service mongod status```

### Stopping MongoDB
You can stop the mongod daemon using:  
```sudo service mongod stop```  

### Restarting MongoDB
You can restart the service using:  
```sudo service mongod restart```

If the Process is running, you should be able to see: 
```bash 
Output
● mongodb.service - An object/document-oriented database
   Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: active (running) since Sat 2018-05-26 07:48:04 UTC; 2min 17s ago
     Docs: man:mongod(1)
 Main PID: 2312 (mongod)
    Tasks: 23 (limit: 1153)
   CGroup: /system.slice/mongodb.service
           └─2312 /usr/bin/mongod --unixSocketPrefix=/run/mongodb --config /etc/mongodb.conf

```  

You should now have a local mongodb database running on your system.



## Accessing a MongoDB database using Mongo

>**Note:** Most of this guide comes from https://www.freecodecamp.org/news/learn-mongodb-a4ce205e7739/

Now that we have a database set up on a system / our local system, we can now access it to create new databases. 

if we open a new shell / terminal, we can use mongo to access our new mongod service. 

we can open the mongo mediator by using: 
```mongo```

We can find the current database we are in using:
```db```

We can list the current databases using: 
```show databases```


## Accessing a MongoDB database using a GUI 
We can also connect to a mongodb instance using other software.
One of the most commonly used GUI's for accessing mongodb is their own GUI software **MongoDB Compass** 

> You can download MongoDB Compass at https://www.mongodb.com/download-center/compass?jmp=docs

You can connect to the created local instance by selecting ```fill in connection fields induvidually```, Then entering in the following infomation.  

Hostname: ```localhost```  
Port:  ```27017```  
SRV Record: ```off```  
Authenticaion: ```None```  

If working, you should now see a list of the currrent databases within the mongod service. 




















### Issues I've run into  

**Failed with result "exit code" / error 100**
```
● mongodb.service - An object/document-oriented database
   Loaded: loaded (/lib/systemd/system/mongodb.service; enabled; vendor preset: enabled)
   Active: failed (Result: exit-code) since Mon 2019-11-25 10:11:32 GMT; 1 day 23h ago
     Docs: man:mongod(1)
  Process: 9500 ExecStart=/usr/bin/mongod --unixSocketPrefix=${SOCKETPATH} --config ${CONF} $DAEMON_OPTS (code=exited, sta
 Main PID: 9500 (code=exited, status=100)
Failed with result 'exit-code'.
```



 



**Adjusting Firewall Options**
Even Though the MongoDB server has been set up, it will still only be accessable locally and will not be acceable from other systems.

To allow access to the MongoDB database from anywhere on the internet: 
```sudo ufw allow 27017``` 

This is however not usually a good option as it opens up the database to the *entire internet*.   

A much better way to access the database is to allow the server hosting you application access, then have that open to the internet instead:  
```sudo ufw allow from <other server IP>/32 to any port 27012```

You can then verify your new port access with ```sudo status ufw```

You should now be able to see what has access to what ports:
```bash
Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
27017                      ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
27017 (v6)                 ALLOW       Anywhere (v6)

```

#

