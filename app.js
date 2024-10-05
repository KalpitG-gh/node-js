const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Basic Calculator</h1>
    <form method="GET" action="/calculate">
      <input type="number" name="num1" placeholder="Number 1" required/>
      <input type="number" name="num2" placeholder="Number 2" required/>
      <select name="operation">
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
        <option value="divide">Divide</option>
      </select>
      <button type="submit">Calculate</button>
    </form>
  `);
});

app.get('/calculate', (req, res) => {
  const num1 = parseFloat(req.query.num1);
  const num2 = parseFloat(req.query.num2);
  const operation = req.query.operation;

  let result;

  switch(operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }

  res.send(`Result: ${result}`);
});

app.listen(port, () => {
  console.log(`Calculator app listening at http://localhost:${port}`);
});
