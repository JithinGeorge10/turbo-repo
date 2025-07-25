import express from 'express';

const app = express();
const port = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.send('Auth Service Running');
});

app.listen(port, () => {
  console.log(`Auth service listening at http://localhost:${port}`);
}); 