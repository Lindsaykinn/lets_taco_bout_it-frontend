This application is a "Taco Rating App" using a Ruby on Rails backend and JavaScript/CSS/HTML frontend

---
USER STORY: 
-  As a user, I can add tacos and associate them to a restaurant.
- A user can create a restaurant, create a taco, delete a restaurant, delete a taco.
- The application houses favorite tacos to try.
---
## *Checklist*

## PART 1: Planning and Building a Rails API

**BEFORE YOU CODE**

 - [X] 1. Check project requirements in JavaScript READMEs
 - [X] 2. Ideate! What do you want to build?
Choose a domain you're familiar with!
Choose a domain you care about
 - [X] 3. Wireframing
    - Write down your models, their attributes, and their associations.
 - [X] 4. Design your MVP = 'Minimum Viable Product' vs. what are my 'stretch goals'    
    - Stretch goals - bonus features you want but don't need
---
### **PROJECT SET UP**

- [X] 5.  GENERATE RAILS API
- [X] 6.  CREATE GITHUB REPO
- [X] 7.  CREATE BRANCH FOR BUILDING OUT MODELS, KEEPING YOUR MASTER BRANCH CLEAN
NOW WE'RE READY TO CODE (BUT JUST OUR MODELS — NO CONTROLLERS OR SERIALIZERS YET)
  - example: `git co -b <branch_name>`
  - when you go to merge, first push your changes to the branch. Then go to the github repo. You will see an option at the top to `Compare & pull request`. Click on this --> `Create pull request` --> `Merge pull request` --> `Confirm merge` --> `Delete branch`
  - then type `git co master` in terminal
  - then type `git pull` in terminal
  - now the *local* master has the updates

---
### **READY TO CODE (BUT JUST OUR MODELS — NO CONTROLLERS OR SERIALIZERS YET)**
- [x] 8.  Build your models
  - Migrations
  - Model classes
  - Associations
- [x] 9. Test your models and associations in the console
  - Create some seed data
  - Adjust migrations as needed
---
## PART 2: Routes, Controllers, Serializers
- [X] 1. Name spaced routes - namespaced
- [X] 2. Controllers rendering JSON based on routes
- [X] 3. Fast JSON Serializer
---
## PART 3: DOM Manipulation, Events, and Fetch using Rails API
*JS MANTRA: When some event happens, I want to make what kind of fetch and then manipulate the DOM in what way?*
---
**Initial Setup**

- [X] 1. Create separate directory for frontend
- [X] 2. Create index.html file with script tag connecting your index.js. Ex: <script type="text/javascript" src="index.js"></script>
- [X] 3. Create index.js, console.log("in index.js"), and check for the logged message in your dev tools to confirm the index.html <> index.js connection was established.
- [X] 4. Initialize a git repo for frontend repository.
---
**Connect your API to your frontend!**

- [X] 5. Think about the JS mantra and answer this question: When the DOM Content is Loaded, I want to make a GET fetch and then manipulate the DOM in what way (usually render the data)?
- [X] 6. Create DOMContentLoaded event listener and console.log("loaded") as the event handler to confirm we've properly set up the listener.
- [X] 7. We're eventually going to make a call to the index route of our API (ex: localhost:3000/tacos). Run your rails server and visit that end point in the browser to confirm the expected JSON data is present.
- [X] 8. We can see the JSON data in the browser but in order to access it in our frontend, we'll need to setup Cross Origin Resource Sharing (CORS)
  * In order to do this we'll need to do a couple things:
  * Navigate to your Gemfile and uncomment gem 'rack-cors' then bundle install. You can read more about CORS in the PART 3 notes and here.
  * Inside of config/initializers/cors.rb uncomment the CORS code and update origins 'example.com' to origins '*'

- [X] 9. Commit and push this code!
---
**Receive (GET) data from the server**

- [X] 10. GET request
  *   Create a new branch for GET implementation.
  *   Create your get____ function (ex: function getTacos()) that will make a call to your index endPoint in your API, make your GET request inside the function and console.log the json data, then call your get___ function in the DOMContentLoaded event listener.
  *   Once you have confirmed your GET request is returning the JSON you were expecting, use that data to update the DOM.(see PART 3 notes for example)
  *   Once working: Commit and push this code! Then merge branch to master.
---
**Submit (POST) data to the server**

- [X] 11. POST request
  * Create a new branch for POST implementation.
  * Create form
  * Create submit event listener
  * Create submit event handler to handle form data
  * Create post_____ function
  * Manipulate the DOM with "posted" JSON data
  * Once working: Commit and push this code! Then merge branch to master.
  
- [X] 12.  git pull on the master branch to get working GET and POST functionality.
Refactor to make your code more DRY

- [X] 13. Make sure you're not repeating yourself unnecessarily in your code. Ex: Create a render function you can use in both your "read" and "create" functions.

- [X] 14. Build out any additional features using the JS Mantra: Event, Fetch, and DOM Manipulation flow as a guide.
---
**PART 4: OOJS Refactor**

- [X] 1. IMPORTANT: Create a separate branch for your OOJS Refactor
  
- [X] 2. Create a JS Class (ex: class Taco)
  
- [X] 3. Link to the new JS file in your index.html (ex: <script src="javascript/models/taco.js"></script>)
  
- [X] 4. Create a constructor that pushes all instances of this into an empty array (See part 4 notes for example)
  
- [X] 5. Refactor render functionality by creating a render function in your JS class
  
- [X] 6. For future use, create a static method in your JS class that finds an object based on it's id. (In the PART 4 notes we see how this would be useful for 'update/PATCH' functionality)

---

**Bonus**
- Leverage a CSS framework to improve the styling of your application
  - Easiest to implement: Bulma
  - Most popular: Bootstrap
  - Also good: Semantic UI
  - Not bootstrap: Materialize

**Confirm**
- [X] You have a large number of small Git commits
- [X] Your commit messages are meaningful
- [X] You made the changes in a commit that relate to the commit message
- [X] You don't include changes in a commit that aren't related to the commit message

**Stretch Goals**
* add user authentication and authorization
  * name
  * email
  * password_digest
- [X] image to tacos
* likes to tacos


