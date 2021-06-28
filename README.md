# Orpyx coding exercise
Please note that we do not want you to spend more than 2 hours on this exercise. 
If it is taking more time or you have some difficulty, let us know and we will adjust the expectations.

## Requirements
* Implement a simple Web service that implements some basic HTTP endpoints for retrieving and storing some records.
* Create a GET endpoint that uses the `orgCode` and sends back the name and creation date of the matching organization.
* Create a POST endpoint to add a new organization, including a creation date (current date).
* Create a PUT endpoint to replace an existing organization with a matching `orgCode`, with the one provided when hitting this endpoint.

## Other notes
* The exercise can be done in any language or framework of your choosing. An option for implementing the above is to use node.js with the Fastify (https://www.fastify.io/) framework.
* The exercise should preferably be completed using the attached JSON file read from, and saved to disk, in lieu of a real database. If your chosen language or framework does not have an easy way to save the records to disk as json file, just keep the organizations object in memory, i.e, It's ok that it resets when restarting the service. 
* For the POST and PUT, the client app provides the `orgCode` and new organization name to the endpoint.
* For the exercise, assume that all records are unique – There is no need to check for or write any logic for duplicates.
* If you choose node.js, you can use node-json-db (https://github.com/Belphemur/node-json-db) that provides a simple "database" using JSON files. Alternatively, use any json parser framework or other library to simplify reading and writing the json file.
* If you make assumptions to simplify any conditions or logic for this exercise, please put a comment in the source code.
* No need for anything related to securing endpoints with authentication, etc.
* No need to implement or integrate any type of database – A simple class or struct with public member variables is fine. Data representation of the organizations is not something we are evaluating.
