

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
   res.render('index', {title: name, address: address});
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






































## Views / Templates 


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












# Vagrant 
Vagrant allows for virtualization of linux systems within a computer, allowing for projects to work within their own containerized environment (basically it means that you know what dependencies are installed onto a system) 

## Installation 
Download the vagrant packages from the [vagrant website](https://www.vagrantup.com/downloads.html) and move the files to your preffered directory location (if you dont know where this, a good starting location is /opt)

Add vagrant to the PATH using ```Export PATH=$PATH:/opt/vagrant```

> **Note** You can commonly run across issues if vagrant is not updated, if this happens, simply download thje latest version of vagrant and unzip the file in the same location as the old version of vagrant (```/opt/vagrant```). You can check the version of vagrant using ```vagrant version```

### What is PATH?
PATH allows vagrant to be run from various projects, without having to find / import the executibles into the project first. Programs that are stored in the path directories (like ```/usr/bin```) can be accessed anywhere. 

This means that you can use the “vagrant” cmd anywhere on your linux system. 
> To add the program permanently (on ubuntu), add the path to ```/etc/environment``` by modifying the file, adding ```:/opt/vagrant``` to the end of file (inside the quotation marks).

### Installing a Virtulisation Software 
To use vagrant, a pre-esixting virtulisation software needs to be installed. In our case, we can use virtualbox a common virtulisation software.

```
sudo apt-get install virtualbox
```

### Setting up a Vagrant VM 
One of the great things about vagrant is the ability to pull pre-existing, user generated repos of common operating systems to virtulise, these are known as vagrant boxes

In the project file use:
```
vagrant init hasicorp/prescise64
//or for a more updated ubuntu build, use 
vagrant init ubuntu/xenial64
```
This generates a .vagrant file in the project that contains the infomation used to set up the vm in the future - similar to a .git file

#### Boot up and Connection 
To boot up the VM, use ```vagrant up```
To connect to the VM, use ```vagrant ssh```

You are now using a bash shell script in another virtual computer

Default vagrant boxes are usually set up with a vagrant and the root account by default. You can access the root account using ```- su``` but you will first need to set a password usign ```sudo passwd root```. 

If the current VM does not have the most up to date software, we can use ```do-release-upgrade``` to update the version of the vagrent box to the latest version released.

Another issue is that in some boxes, software that is normally on linux systems can be 'stuck' at version 1.0, below is a list of commands to update the software: 

* pip (python packages): ```curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py```



One of the cool things about vagrant VM's is that any file that is stored in the same project directory that that .vagrant file is in, is accessable within the VM under the ```/vagrant``` directory.  

 > **Common Vagrant Commands**  
    ```destroy```:        stops and deletes all traces of the vagrant machine  
    ```status ```:        outputs status Vagrant environment  
    ```halt   ```:        stops the vagrant machine  
    ```help   ```:        shows the help for a subcommand  
    ```init   ```:        initializes a new Vagrant environment by creating a Vagrantfile  
    ```reload ```:        restarts vagrant machine, loads new Vagrantfile configuration  
    ```resume ```:        resume a suspended vagrant machine  
    ```ssh    ```:        connects to machine via SSH  
    ```up     ```:        starts and provisions the vagrant environment  



#### Outside Connections 
Vagrant will not normally allow outside connections to the VM withoug going through proper channles (ssh / http access). This can be an issue if you want to use the VM to act as a LAMP stack or a database host.

This can be changed in the Vagrantfile, located in the directory you set up the vagrant VM in 
```
#config.vm.network "private_network", ip: "192.168.33.10" 
to 
config.vm.network "private_network", ip: "192.168.33.10" 
```
However even though we can now ping the vm, we still can access it via mysql, this is due to the firewall not allowing us through 

Port forwarding vagrant to allow communication with own computer / database 

#### Issues i've run into 
> VM hangs on ```ssh auth method``` on bootup  
This is due to the vm failing to port forward its ssh port (2222), while vagrant usually automatically port forwards the ssh port, this can sometimes fail. To solve this issue, we need to add the port forwarding manually into the Vagrantfile.
```ruby
  # Create a forwarded port mapping which allows access to a specific port
  # within the machine from a port on the host machine. In the example below,
  # accessing "localhost:8080" will access port 80 on the guest machine.
  # NOTE: This will enable public access to the opened port
  # config.vm.network "forwarded_port", guest: 80, host: 8080
    config.vm.network "forwarded_port", guest: 22, host: 2222, host_ip: "127.0.0.1", id: 'ssh'

```

One of the main things to know is that vagrant runs ontop of virtualbox, if you have vagrant, you will have virtualbox. If we open up the virtualbox GUI, we can see the VM's that have currently been created. One of the main issues with multiple vm's ruinning is the fact that sometimes ports can collide, leading to vm's being unable to connect to either public or private networks.

> **Note:** To decomission a vagrant VM you must use ```vagrant destroy``` to remove the VM and any possibility that it could cause port collisions. 


Default mysql port is 3306
Deafult Mongo port is 27017

Once we have done this, we can connect to the mysql server but are denied access to the root account, we can get around this by creating a new user and giving him permissions











# Setting up the server 

>**Note:** This isnt needed on vagrant systems, but make sure to at least have a firewall on production systems.

Access the Root account    
```ssh root@serverip```  

Add another user to the account for database usage  
```adduser user```

Give a user sudo access (root / superuser)  
```usermod -aG sudo user```


Adding a firewall to allow limited access to the server   
>**Note:** Uncomplicated FireWall (ufw) is installed by default on ubuntu but may need to be installed on other systems.  

Check application list 
```ufw app list```  

Make sure that ssh connections are allowed 
```ufw allow OpenSSH```

## Enable the firewall 
```ufw enable -y```

```ufw status``` to see what apps are allowed 
You should be able to see the active ssh connections that are allowed, and also  

Enabeling access for regular users 
If the Root account uses a password, you can normally access the account using ```ssh user@server_address```

# MongoBD

Mongodb is a NoSQL database that stores data in JSON like (Javascript Object Notation).




**Adding MongoDB Repositories (Depends on system)**
Depending on the version / distro of linux, MongoDB may not be in the package manger that we are using, if this is the case you will usually get an error stating that "the package is not avalible" or that it "is referanced by another package". 

In this case we can install the official mongodb repository and install the packages from there. 

First we have to import the GPG keys for the mongodb server
```sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927```

After this we can import the mongodb repository details so ```apt``` will know where the packages can be downloaded from. 

```echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list```

after adding the repository details, we can finish off with making sure that all the packages in the repository are up to date.

```sudo apt-get update```

## Installation of MongoDB

While MongoDB is included in the latest ubuntu/rhel linux repositories, the most updated files can be found in the latest updated repositories.  
```sudo apt update```   

Now we can install the MongoDB Packages   
```sudo apt-get install -y mongodb```  

You can start the process using 
```sudo systemctl start mongodb```

You can check that the process is running using:   
```sudo systemctl status mongodb```

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

If the database hasnt been able to start, you can start it using:    
```sudo systemctl start mongodb```

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
This is due to the 


If all else fails:  
**Uninstalling Mongodb**  

```bash
sudo service mongod stop
sudo apt remove mongodb
sudo apt purge mongodb
sudo apt autoremove
```
If you get isses stating that mongodb-org dependancies are not met, you first need to remove the mongodb-org packages as well (using the same commands as above).








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



