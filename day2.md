WHAT ARE THE DIFFERENT TYPES OF HTTP REQUESTS ?

The Http stands for (Hypertext Transfer Protocol) 
The most commonly used HTTP request methods are 

GET, POST, PUT, PATCH, and DELETE

GET : GET request is used to read the data from a web server
GET returns an HTTP status code of ststus (200) if the data is
successfully retrieved from the server.

POST : POST request is used to send data (file, form data) to the
server if it successful it returns an HTTP status code of 201.

PUT : A PUT request is used to modify the data on the server It 
replaces the entire content at a particular location with data 
that is passed in the body.

PATCH : PATCH: PATCH is similar to PUT request, but the only 
difference is, it modifies a part of the data. It will only 
replace the content that you want to update.

DELETE : A DELETE request is used to delete the data on the
server at a specified location.

EXPLAIN THE CONCEPT OF MIDDLEWARE IN NODE.JS ?

The middleware in node. js is a function that will have all the 
access for requesting an object, responding to an object, and 
moving to the next middleware function in the application 
request-response cycle.

Basically are 2 types 

GLOBAL MIDDLEWARE, LOCAL MIDDLEWARE

GLOBAL MIDDLEWARE :
The middlewares consist the 3 arrguments 
app.get('/', (req, res, next) => {}, 
if want to use globally for every api then apply the (use())

app.use(Home).

LOCAL MIDDLEWARE :
The middlewares consist the 3 arrguments 
app.get('/', (req, res, next) => {}, 
it can only used for selected api's in the data

EXPLAIN CORS ?

CORS Stands for Cross-Origin Resource Sharing (CORS)
For the securety perpose the Browser not allows the data to the third party sites.

But by the use of CORS module we can access othe data intentially to the third party websites when there needed the data 

WHAT IS EXPRESS. HOW IT HELPS TO CREATE A BACKEND APPLICATIONS ?

It is an Back-End Web Application framework for the Node.js
It is designed for Building web applications and Api's
It makes it easier to organize your application’s functionality 
with middleware and routing.
 
We can install it with npm, have Node.js and npm installed.
Using npm init command to create a package.json file for project.
npm init -y 
npm install express 

EXPLIAN MIN 5 STATUS CODES GET USED IN BACK-END DEVLOPMENT ?

400 : 'Bad Request' response status code indicates that the server 
       cannot process the request due to something that is client error
       Ex : request syntax, invalid request, request routing. 

401: 'Unauthorized' The client request has not been completed because it lacks 
      valid authentication credentials for the requested resource.

404: 'Page Not Found' error is a Hypertext Transfer Protocol standard response 
      code that indicates the server was unable to find what was requested.

408: 'Request Timeout' Response status code means that the server would like 
      to shut down this unused connection.

429:  'Too Many Requests' Too Many Requests response status code indicates the 
       user has sent too many requests in a given amount of time

DIFFERENCE BETWEEN HTTP AND HTTPS ?

Both of these are protocols using which the information of a particular 
website is exchanged between Web Server and Web Browser.

HTTP :
HTTP stands for HyperText Transfer Protocol.
http is a protocol for data transfer over the Web
HTTP is considered to be insecure the data
HTTP Works at Application Layer 
HTTP does not require any certificates 
HTTP speed is faster than HTTPS  
HTTP does not use data hashtags to secure data

HTTPS :
HTTPS stands for HyperText Transfer Protocol Secure.
HTTP is considered to be secure the data
HTTPS works at Transport Layer
HTTPS needs SSL Certificates 
HTTPS speed is slower than HTTP
while HTTPS will have the data before sending it and return it to its original state on the receiver side.