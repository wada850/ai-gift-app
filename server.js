const express = require('express');
const app = express();
const port = 3000;

// publicフォルダの中身を公開（HTMLとかCSSとか）
app.use(express.static('public'));

// サーバー起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
