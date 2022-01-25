const JokeController = require('../controllers/joke.controllers');

module.exports = (app) => {
    app.get('/api/jokes', JokeController.findAllJokes);
    app.get('/api/jokes/:_id', JokeController.findOneJoke);
    app.put('/api/jokes/update/:_id', JokeController.updateJoke);
    app.post('/api/jokes/new', JokeController.createNewJoke);
    app.delete('/api/jokes/delete/:_id', JokeController.deleteJoke);
}