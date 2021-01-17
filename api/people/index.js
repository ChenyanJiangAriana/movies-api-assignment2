import express from 'express';
import peopleModel from './peopleModel';

const router = express.Router();
 
router.get('/', (req, res, next) => {
  peopleModel.find().then(people => res.status(200).send(people)).catch(next);
});

router.get('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  peopleModel.findByMovieDBId(id).then(people => res.status(200).send(people)).catch(next);
});

// eslint-disable-next-line no-unused-vars
router.get('/:id/movie_credits', (req, res, next) => {
  const id = parseInt(req.params.id);
  getPersonMovie_credits(id)
  .then(credits => res.status(200).send(credits))
  .catch((error) => next(error));
});


export default router;