const db = require('../models/db');

exports.getRegisterPage = (req, res) => {
  res.render('register', { title: 'Register Page' });
};

exports.postRegister = (req, res) => {
  const { name, company, department, position, email, phone, attendance, gift, agreement1, agreement2 } = req.body;

  const query = 'INSERT INTO registrations (name, company, department, position, email, phone, attendance, gift, agreement1, agreement2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [name, company, department, position, email, phone, attendance, gift, agreement1 === 'on', agreement2 === 'on'];

  db.query(query, values, (err, results) => {
    if (err) {
      return res.status(500).send('Database error: ' + err);
    }
    res.redirect('/register');
  });
};
