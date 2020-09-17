# TrueLayer-Technical-Challenge
An assigment given by [TrueLayer](https://truelayer.com)  as part of the interview process for their technical support engineer role


___

# Details

This assignment revolves around creating a search engine that when given a pokemon name will return it's description in **Shakespearean style**

This assignment requires the use of an API endpoint to retreieve the information about the pokemon

Luckily I was given 2 API'S that will help in the creation of this search engine they are:

* [PokeAPI](https://pokeapi.co/) - This is an API connected to a well built and extensively documented database about pokemon.

* [Shakespearean Translator](https://funtranslations.com/api/shakespeare) - This is an API which converts normal text to Shakespearean style 

___

# Implementation

To implement this search engine, I have decided to use the **"M.E.R.N"** stack to create a web application with a front end, using this stack also allows me to create the project mainly with Javascript. However I do not need a database for this project so I will just be using the following technologies:

* **NodeJS** - Node JS is an open source, cross-platform JavaScript run-time environment that executes JavaScript code server-side. Node.js lets developers use JavaScript for server-side scripting. I used NodeJS along with Express to create my server and handle HTTP requests.
* **ReactJS** - React is a javascript library made by Facebook , it is used to create interactive UIs and design web pages for each state of the application.
* **ExpressJS** - ExpressJs is a web application framework that allows you to create robust APIs and web servers to build websites or web applications with backend functionality.

Although thee three are my main technologies I wll still use other third-party libraries in the implementation of this project they include the following:

* **Axios** - Promise based HTTP client for the browser and node.js
* **Concurrently** - Used to run client server and backend server at the same time
* **Reactstrap** - React component library based off of bootstrap
* **Bootstrap** - - CSS library used along side reactstrap
* **Request** - Used to make HTTP requests from NodeJs
* **Nodemon** - Used for hot reload i.e , restarting application when changes are made  
* **Jest** - Testing library
* **Supertest** - Used to test HTTP Requests


___

# Running Application

Before you use this appliaction, the following must be installed in your device:

**Prerequisites**
* Node >= 8.10 
* npm >= 5.6 
* Integrated Development Environment (I reccommend __Visual Studio Code__)

**These two components are esstential to have before you can run this application. once both components are installed you can follow this process to use the application**

## Cloning

The first step is to clone this repository to a folder on your device to do so you can copy the following link

<p align="center">
<img src="Project\Images\image1.PNG" width="500">
<p>

In visual studio code if you type in "CTRL+SHIFT+P" you will get a list of commands that can be entered search for **"Git:Clone"** and click on this once it's been found

You will them be prompted to enter the link to clone the repository 

<p align="center">
<img src="Project\Images\image2.PNG" width="500">
<p>

Paste the link here and click **"Clone from Github"**

The project will be then be cloned to the loctaion specified on the device and you can continue onto the next step



## Client Configuration

This application requires a number of dependencies that need to be installed before the application can be fully functional.

Once you have cloned the project open the terminal on Visual studio or command line and change directory using the command **"cd"** followed by the path to the following folder


<p align="center">
<img src="Project\Images\image3.PNG" width="500">
<p>

Once you have gotten to this folder run the following command **"npm install"**
This will take a few minutes to install all the dependcies required for the project to run but once it is completed you should be greeted with the following message 

<p align="center">
<img src="Project\Images\imag4.PNG" width="500">
<p>

The application has now ben configured and you can run it

## Application In Use

You must now change directory to the following folder 

<p align="center">
<img src="Project\Images\image5.PNG" width="500">
<p>

You can then run the following command **"npm run both**

This command runs both the backend express server and the react server 

Shortly after you have ran this commmand the webpage should open up in your default browser

<p align="center">
<img src="Project\Images\Image6.PNG" width="500">
<p>

The application has very basic functionality it follows this process

1. **Enter a Pokemon name in the textfiled**
<p align="center">
<img src="Project\Images\image7.PNG" width="700">
<p>

2. **Click the submit button**

3. **The Pokemon's name and decription is shakespearean dialect is displayed in a modal** 

<p align="center">
<img src="Project\Images\image8.PNG" width="500">
<p>


You can repeat this to your heart's content :)


## Testing

As this application is programmmed mainly with Javascript i made use of the javascript testing library **"Jest"**

To stop the applicaton go to the terminal and enter the following **"CTRL+C"**

To run the tests in the terminal in the same directory use the follwoing command **"npm run testAll"**

This command will run all test files in the project they include the following:
 * Users.test.js
 * Pokemon.test.js
 * index.test.js

 I made use of the library **"concurrently"** to run these tests in seperate folders at the same time 

 If you would like to run the backend tests seperately from the frontend tests swicth to the respective folders and run **"npm run test"**

 