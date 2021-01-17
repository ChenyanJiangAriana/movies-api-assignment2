# Assignment 2 - Web API.

Name: Chenyan Jiang

## Features.

...... A bullet-point list of the ADDITIONAL features you have implemented in the API

 + Feature 1 -  get a list of nowplaying movies
 + Feature 2 -  get single nowplaying movie detailed information
 + Feature 3 -  get a list of upcoming movies
 + Feature 4 -  get one upcoming movie and show its detailed information
 + Feature 5 -  get a list of people which is actor in film
 + Feature 6 -  get one actor's detail information
 + Feature 7 -  get user's favorite movies and watch list 
 + Feature 8 -  post user's favorite movies and watch list 

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
Configuration that needs to take place before running the API.

+ creating an ``.env`` file. in 'movies-api' file.
```bat
NODE_ENV=development
PORT=8080
HOST=localhost
TMDB_KEY=tmdbKey
mongoDB=mongodb+srv://admin:mypassword@cluster0.smkbs.mongodb.net/databasename?retryWrites=true&w=majority
SEED_DB=true
SECRET=JWTSecret
HEROKU_API_KEY=YOURKEY
HEROKU_APP_NMAE_STAGING=agile2-movies-api-staging
```
+ creating an ``.babelrc`` file. in 'movies-api' file.
```bat
{
  "presets": [
      "@babel/preset-env" 

    ],
    "plugins": [
      ["@babel/transform-runtime"]
  ]
}
```
+ creating an ``.gitignore`` file. in 'movies-api' file.
```bat
/node_modules
.DS_S*
/**/.DS_S*
/build
.env
/.vscode
```




## API Design
Give an overview of your web API design 

If you have your API design on an online platform or graphic, please link to it (e.g. [Swaggerhub](https://app.swaggerhub.com/apis/ChenyanJiangAriana/movie-api/1.0.0-oas3#/))
![][swagger_1]
![][swagger_2]
![][swagger_3]
![][swagger_4]
![][swagger_5]

## Security and Authentication
+ the  session is implemented in the middleware of index.js
~~~Javascript
app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));
~~~

+ the router is protected with passportJWT e.g.
~~~Javascript
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);

app.use('/api/upcomingMovies',passport.authenticate('jwt', {session: false}), upcomingRouter);

app.use('/api/people',passport.authenticate('jwt', {session: false}), peopleRouter);

app.use('/api/nowplayingMovies', passport.authenticate('jwt', {session: false}), nowplayingRouter);

~~~



## Integrating with React App

Add below port into the bottom of the ``package.json`` in my Movies Application

```bat
,
  "proxy": "http://localhost:8080"
```
and change  ``tmdb-api.js`` with own new API 
~~~Javascript
export const login = (username, password) => {
  return fetch('/api/users', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

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

export const signup = (username, password) => {
  return fetch('/api/users?action=register', {
      headers: {
          'Content-Type': 'application/json'
      },
      method: 'post',
      body: JSON.stringify({ username: username, password: password })
  }).then(res => res.json())
};

export const getPopulerPerson = () => {
  return fetch(
     '/api/persons',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};

export const getUpcomingMovies = () => {
  return fetch(
     '/api/upcoming',{headers: {
       'Authorization': window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
~~~



# Assignment 2 - Agile Software Practice.

Name: ChenyanJiang

## Target Web API.

...... Document the Web API that is the target for this assignment's CI/CD pipeline. Include the API's endpoints and any other features relevant to the creation of a suitable pipeline, e.g.

| Get /api/movies                      | returns an array of movie objects                           |
| :----------------------------------- | ----------------------------------------------------------- |
| Get /api/movies/:id                  | returns detailed information on a specific movie            |
| Get /api/users/                      | returns an array of users                                   |
| Post /api/users?action=register      | add a new user to database                                  |
| Post /api/users/:username/favourites | add a movie to favourite list                               |
| Post /api/users/:username/watchlist  | add a movie to watchlist                                    |
| Get /api/upcomingMovies/:id          | returns detailed information on a specific upcomingmovie.   |
| Get /api/upcomingMovies              | returns an array of upcomingmovie objects.                  |
| Get /api/nowplayingMovies            | returns an array of nowplayingmovie objects.                |
| Get /api/nowplayingMovies/:id        | returns detailed information on a specific nowplayingmovie. |

| Get /api/people             | returns an array of people objects                          |
| --------------------------- | ----------------------------------------------------------- |
| Get /api/people/:id         | returns detailed information on a specific person.          |
| Get /api/people/:id/credits | returns an array of combined credits of a specific peroson. |



## Error/Exception Testing.

| GET /movies/:id                 | test when the id is invalid                  | tests/functional/api/movies.index.js                         |
| ------------------------------- | -------------------------------------------- | ------------------------------------------------------------ |
| POST /api/users?action=register | test when the password is too simple         | Test the user table after posting. See tests/functional/api/users.index.js |
| POST /api/users/user1/favourite | test when the movie is invalid and repeated. | tests/functional/api/users.index.js                          |
| POST /api/users/user1/watchlist | test when the movie is repeated.             | tests/functional/api/users.index.js                          |
| GET /upcomingMovies/:id         | test when the id is invalid.                 | tests/functional/api/upcomingMovies.index.js                 |
| GET /nowplayingMovies/:id       | test when the id is invalid.                 | tests/functional/api/nowplayingMovies.index.js               |
| GET /people/:id                 | test when the person id is invalid           | tests/functional/api/people.index.js                         |
| GET /people/:id/credits         | test when the person id is invalid           | tests/functional/api/people.index.js                         |

## Continuous Delivery/Deployment.

..... Specify the URLs for the staging and production deployments of your web API, e.g.

+ https://agile-assignment.herokuapp.com/ - Staging deployment
+ https://agile-assignment-production.herokuapp.com/ - Production

.... Show a screenshots from the overview page for the two Heroku apps e,g,

+ Staging app overview 

![][stagingapp]

+ Production app overview 

![][productionapp]



[stagingapp]: ./public/heroku.png
[productionapp]:./public/heroku_production.png
[swagger]: ./public/swagger_main.png
[swagger_1]:./public/swagger_1.png
[swagger_2]:./public/swagger_2.png
[swagger_3]:./public/swagger_3.png
[swagger_4]:./public/swagger_4.png
[swagger_5]:./public/swagger_5.png