const express = require('express');
const path = require('path'); // パス操作用のモジュール
const app = express();
const port = 3000;

// 🔽 EJSをテンプレートエンジンとして設定
app.set('view engine', 'ejs');

// 🔽 EJSテンプレートのファイルを入れる views フォルダを指定
app.set('views', path.join(__dirname, 'views'));

// publicフォルダの中身を公開（CSS・画像など）
app.use(express.static('public'));

// 🔽 EJSテンプレートを使ってHTMLをレンダリング（ルートパス）
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

// サーバー起動
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
