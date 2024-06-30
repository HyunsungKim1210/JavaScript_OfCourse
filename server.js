const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 서빙
app.use(express.static('public'));

// API 엔드포인트 (옵션)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

// 서버 시작
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
