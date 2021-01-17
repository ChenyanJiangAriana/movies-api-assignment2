# agile-assignment-2

Agile assignment 2 final version 
# Assignment 2 - Web API.

Name: Chenyan Jiang

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API **THAT WERE NOT IN THE LABS** ......,
 
 + Feature 1 -  get a list of nowplaying movies
 + Feature 2 -  get single nowplaying movie detailed information
 + Feature 3 -  get a list of upcoming movies
 + Feature 4 -  get one upcoming movie and show its detailed information
 + Feature 5 -  get a list of people which is actor in film
 + Feature 6 -  get one actor's detail information
 + etc
 + etc

## Installation Requirements

"nodemon": "^2.0.6",
"express": "^4.17.1",
"express-session": "^1.17.1",
"jsonwebtoken": "^8.5.1",
"loglevel": "^1.7.1",
"mongoose": "^5.11.7",
"passport": "^0.4.1",
"passport-jwt": "^4.0.0"

In package.json, the dependency softwares and their version are recorded. 

Then run the code in terminal to install

```bat
npm install
```

## API Configuration
REMEMBER: DON'T PUT YOUR OWN USERNAMES/PASSWORDS/AUTH KEYS IN THE README OR ON GITHUB, just placeholders as indicated below:

```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=TMDBAPIKEY
mongoDB=MongDBURl
SEED_DB=true
SECRET=JWTSECRET
```


## API Design
Give an overview of your web API design, perhaps similar to the following: 

|  |  GET | POST | PUT | DELETE
| -- | -- | -- | -- | -- 
| /api/movies |Gets a list of movies | N/A | N/A |
| /api/movies/{movieid} | Get a Movie | N/A | N/A | N/A
| /api/movies/{movieid}/reviews | Get all reviews for movie | Create a new review for Movie | N/A | N/A  
| ... | ... | ... | ... | ...

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/)).


## Security and Authentication
Give details of authentication/ security implemented on the API(e.g. passport/sessions). Indicate which routes are protected.

## Integrating with React App

Describe how you integrated your React app with the API. Perhaps link to the React App repo and give an example of an API call from React App. For example: 

~~~Javascript
export const getMovies = () => {
  return fetch(
     '/api/movies',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  )
    .then(res => res.json())
    .then(json => {return json.results;});
};

~~~Javascript


## Extra features

. . Briefly explain any non-standard features, functional or non-functional, developed for the app.  

## Independent learning.

. . State the non-standard aspects of React/Express/Node (or other related technologies) that you researched and applied in this assignment . .  



# Assignment 2 - Agile Software Practice.

Name: ChenyanJiang

## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

+ Get /api/movies - returns an array of movie objects.
+ Get /api/movies/:id - returns detailed information on a specific movie.
+ Put /api/movies/:id - update a specific movie. The request payload includes the some/all of the following movie properties to be updated: title, genre list, release date.
+ Post /api/movies - add a new movie to the database.
+ etc.
+ etc.  

## Error/Exception Testing.

.... From the list of endpoints above, specify those that have error/exceptional test cases in your test code, the relevant test file and the nature of the test case(s), e.g.

+ Post /api/movies - test when the new movie has no title, invalid release date, empty genre list. Test adding a movie without prior authentication. See tests/functional/api/movies/index.js 

## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ http://agile-assignment.herokuapp.com/ - Staging deployment
+ https://movies-api-production.herokuapp.com/ - Production

.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][stagingapp]

+ Production app overview 

[ , , , screenshot here . . . ]

[If an alternative platform to Heroku was used then show the relevant page from that platform UI]

## Feature Flags (If relevant)

... Specify the feature(s) in your web API that is/are controlled by a feature flag(s). Mention the source code files that contain the Optimizerly code that implement the flags. Show screenshots (with appropriate captions) from your Optimizely account that prove you successfully configured the flags.


[stagingapp]: ./img/stagingapp.png