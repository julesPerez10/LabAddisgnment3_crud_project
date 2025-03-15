import express from 'express';
import fs from 'fs';

const app = express();
const PORT = 3000;

app.use(express.json());

const readData = () => JSON.parse(fs.readFileSync('./data/items.json'));
const writeData = (data) => fs.writeFileSync('./data/items.json', JSON.stringify(data, null, 2));

app.get('/items', (req, res) => {
  res.json(readData());
});

app.post('/items', (req, res) => {
  const data = readData();
  const newItem = req.body;
  newItem.id = data.length + 1;
  data.push(newItem);
  writeData(data);
  res.status(201).json(newItem);
});

app.put('/items/:id', (req, res) => {
  const data = readData();
  const index = data.findIndex(item => item.id === parseInt(req.params.id));
  data[index] = {...data[index], ...req.body};
  writeData(data);
  res.json(data[index]);
});

app.delete('/items/:id', (req, res) => {
  let data = readData();
  data = data.filter(item => item.id !== parseInt(req.params.id));
  writeData(data);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});