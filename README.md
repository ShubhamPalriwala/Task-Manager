# Task-Manager-API #

An API of a Task Manager app has been created here.

User Route  | Request Type | Function
------------- | -------------|---------
/users  | Post | Lets you signup as a new user when you enter your name,email and password in json format
/users/login  | Post | Lets you login after you enter your email and password
/users/logout | Post | Logs you out from the current session
/users/logoutall | Post | Logs you out from all the active sessions
/users/me | Get | Returns your profile
/users/me | Patch | Lets you update your details when entered in JSON format
/users/me/avatar | Post | Lets the user add an image file upto 1 MB as his Profile picture
/users/:id/avatar | Get | Lets you view the avatar of the user id entered
/users/me/avatar | Delete | Lets the user delete their avatar 
/users/me | Delete | Deletes the current profile permanantly


Tasks Route | Request Type | Function
------------- | -------------|---------
/tasks | Post | Lets the user create a new task
/tasks | Get | Return all the tasks entered by the user. Add query parameters such as completed, sortBy, limit(to limit the number of tasks in a page), skip(to skip the first n results) to refine your search
/tasks/:id | Get | Search a specific Task by it's ID
/tasks/:id | Patch | Lets the user update a task description or its status
/tasks/:id | Delete | Lets the usee remove an existing task


Tried to add Sendgrid API but it couldn't work therefore the /emails/account.js file has been commented.
Mongoose Compass has been used here as a Database
