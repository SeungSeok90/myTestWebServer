const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// 정적 파일 제공
app.use(express.static(path.join(__dirname, 'public')));

// 라우터 설정
const mainRoutes = require('./routes/mainRoutes');
const registerRoutes = require('./routes/registerRoutes');
const adminRoutes = require('./routes/adminRoutes');

// View Engine 설정
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 미들웨어 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 사용
app.use('/', mainRoutes);
app.use('/register', registerRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
