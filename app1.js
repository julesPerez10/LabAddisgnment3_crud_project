import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Group Members:</h1><p>Julian and Carlos </p>');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});