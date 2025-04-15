from flask import Flask, jsonify
import json

app = Flask(__name__)

@app.route('/api/gifts')
def recommend_gifts():
    # 実際はAIロジックで動的に出す
    gifts = [
        {"name": "花束", "image": "https://example.com/flower.jpg", "desc": "感謝を伝える定番ギフト"},
        {"name": "チョコレート", "image": "https://example.com/choco.jpg", "desc": "甘いもので癒しを"}
    ]
    
    # JSONレスポンスのエンコーディングを修正
    return app.response_class(
        response=json.dumps(gifts, ensure_ascii=False),  # ensure_ascii=False に変更
        status=200,
        mimetype='application/json'
    )

if __name__ == '__main__':
    app.run(port=5000)
