import express from 'express';

const app = express();
const port = process.env.PORT || 3002;

app.get('/', (req, res) => {
  res.send('Dashboard Service Running');
});

app.listen(port, () => {
  console.log(`Dashboard service listening at http://localhost:${port}`);
}); 