const express = require('express');
const cors = require('cors');
const tricks = require('./tricks');
const app = express();

app.use(express.json());
app.use(cors());

app.set('port', 3001);

app.locals.title = 'Sick Trick Wish List API';
app.locals.tricks = tricks

app.get('/api/v1/tricks', (req, res) => {
  return res.json(app.locals.tricks)
});

app.post('/api/v1/tricks', (req, res) => {
  const {stance, name, obstacle, tutorial} = req.body;

  if (!stance || !name || !obstacle || !tutorial ) {
    return res.status(422).json({
      error: 'Expected format { stance: <String>, name: <String>, obstacle: <String>, tutorial: <String> }. You are missing a required parameter.'
    })
  }

  const newTrick = {id: app.locals.tricks.length + 1, stance, name, obstacle, tutorial};

  app.locals.tricks = [...app.locals.tricks, newTrick];

  return res.status(201).json(newTrick)
})

app.delete('/api/v1/tricks/:id', (req, res) => {
  const {id} = req.params;
  const parsedId = parseInt(id);
  const match = app.locals.tricks.find(trick => parseInt(trick.id) === parsedId);

  if (!match) {
    return res.status(404).json({ error: `No trick found with an id of ${id}.` })
  }

  const updatedTricks = app.locals.tricks.filter(trick => parseInt(trick.id) !== parsedId);
  app.locals.tricks = updatedTricks

  return res.status(202).json(app.locals.tricks)
})

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});