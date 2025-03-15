import express from 'express';
import items from './data/items.json' with { type: 'json' };


const app = express();
const PORT = 3000;

app.get('/items', (req, res) => {
  res.json(items);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});