const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const users = []; // ইন-মেমোরি ইউজার লিস্ট

app.post('/register', (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ message: 'Email already exists' });
  users.push({ name, email, password, points: 0 });
  res.json({ message: 'Registered' });
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (!user) return res.status(401).json({ message: 'Invalid credentials' });
  res.json({ message: 'Login successful', user });
});

app.post('/add-point', (req, res) => {
  const { email } = req.body;
  const user = users.find(u => u.email === email);
  if (user) {
    user.points++;
    res.json({ points: user.points });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.post('/withdraw', (req, res) => {
  const { email, name, number, upi, screenshot } = req.body;
  const user = users.find(u => u.email === email);
  if (user && user.points >= 12500) {
    user.points -= 12500;
    console.log(`Withdraw request: ${name}, ${number}, ${upi}, Points: 12500`);
    res.json({ message: 'Withdraw request sent' });
  } else {
    res.status(400).json({ message: 'Not enough points' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
