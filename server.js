const express = require('express');
const fetch = require('node-fetch');// Python API呼び出し用
const path = require('path'); // パス操作用のモジュール
const app = express();
const port = 3000;

// 🔽 EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// publicフォルダの中身を公開（CSS・画像など）
app.use(express.static('public'));

// 🔽 PythonのFlask APIからデータを取得してEJSに渡す
app.get('/', async (req, res) => {
    try {
      const response = await fetch('http://localhost:5000/api/gifts'); // Flask APIを叩く
      const data = await response.json(); // JSONデータとして取得
  
      // EJSテンプレートにデータを渡して描画
      res.render('index', {
        siteTitle: 'AI-Gifts',
        cards: data // Flaskから受け取った配列をそのまま使う
      });
    } catch (err) {
      console.error('API呼び出しエラー:', err);
      res.status(500).send('ギフトデータの取得に失敗しました');
    }
  });
  
// 🔽 EJSテンプレートを使ってHTMLをレンダリング（ルートパス）
/* 元々のハードコード
app.get('/', (req, res) => {
    res.render('index', {
      siteTitle: 'AI-Gifts',
      cards: [
        {
          image: '/images/lovers.jpg',
          alt: 'For Lovers',
          title: 'For Lovers',
          description: '恋人への特別なプレゼントを厳選'
        },
        {
          image: '/images/family.jpg',
          alt: 'For Family',
          title: 'For Family',
          description: '家族に喜ばれる心温まるギフト'
        },
        {
          image: '/images/business.jpg',
          alt: 'For Business',
          title: 'For Business',
          description: 'ビジネスシーンでも使える上品な贈り物'
        },
        {
          image: '/images/trending.jpg',
          alt: 'Trending Gifts',
          title: 'Trending Gifts',
          description: '今人気のギフトアイディアをチェック'
        }
      ]
    });
  });
  */

// サーバー起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
