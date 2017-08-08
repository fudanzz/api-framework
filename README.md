api framework based on node/express




Demo app

Data-model:

Author
Post
Category

Relationship
Author—>post
Post—>category

Persistence
Mongo db

Api: crud

Biz scenario:
User login
User post blog
User update blog(category, content)
User delte blog
User get all blogs

Project structure:

server
	-api
         -auth
         -middleware
         -utils 
         -config
Index.js


// framework code go through

****Index.js***** 

- [x] Prepare logger
- [x] prepare config
- [x] Prepare main app
- [x] start the app


****config folder****
Config.js  :  global config and load specific config based on environment setting
Development.js : specific env setting
Testing.js
Production.js

****middleware folder****
middleware.js : design common middleware

Morgan
Bodyparser
Cors
Method-override

****util folder****
Logger.js


****api folder****
Server.js:  

- [x] Set up data source
- [x] Set up middleware
- [x] Set up api router
- [x] Set up error handling

Model
Controller
Router

****auth folder****
Auth middle
Controller
Router