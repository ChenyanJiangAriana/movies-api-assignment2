import dotenv from 'dotenv';
import express from 'express';
import moviesRouter from './api/movies';
import bodyParser from 'body-parser';
import './db';  
import usersRouter from './api/users';
import genresRouter from './api/genres';
import session from 'express-session';
import passport from './authenticate';
import loglevel from 'loglevel';
import {loadUsers, loadMovies, loadUpcomingMovies,loadTopratedMovies, loadNowplayingMovies, loadPeople} from './seedData';
import upcomingRouter from './api/upcomingMovies';
import topratedRouter from './api/topratedMovies';
import nowplayingRouter from './api/nowplayingMovies';
import peopleRouter from './api/people';

//import swaggerUi from 'swagger-ui-express';import * as swaggerDoucment from './swagger.json';import serverless from 'serverless-http';


dotenv.config();

if (process.env.NODE_ENV === 'test') {
  loglevel.setLevel('warn')
} else {
  loglevel.setLevel('info')
}

if (process.env.SEED_DB === 'true') {
  loadMovies();
  loadUsers();
  loadUpcomingMovies();
  loadNowplayingMovies();
  loadTopratedMovies();
  loadPeople();
}


const errHandler = (err, req, res, next) => {
  /* if the error in development then send stack trace to display whole error,
  if it's in production then just send error message  */
  if(process.env.NODE_ENV === 'production') {
    return res.status(500).send(`Something went wrong!`);
  }
  res.status(500).send(`Hey!! You caught the error 👍👍, ${err.stack} `);
};

const app = express();

const port = process.env.PORT;

app.use(session({
  secret: 'ilikecake',
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
//configure body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(express.static('public'));
// initialise passport​
// Add passport.authenticate(..)  to middleware stack for protected routes​
app.use('/api/movies', passport.authenticate('jwt', {session: false}), moviesRouter);
app.use('/api/upcomingMovies', upcomingRouter);
app.use('/api/nowplayingMovies', passport.authenticate('jwt', {session: false}), nowplayingRouter);
app.use('/api/users', usersRouter);
app.use('/api/genres', genresRouter);
app.use('/api/people',passport.authenticate('jwt', {session: false}), peopleRouter);
//app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoucment)); 
app.use('/api/toprated',passport.authenticate('jwt', {session: false}),topratedRouter);
app.use(errHandler);

let server = app.listen(port, () => {
  loglevel.info(`Server running at ${port}`);
});

module.exports = server