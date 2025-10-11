    // ...existing code...
    // サイドナビボタンでセクションにスムーズスクロール
    document.querySelectorAll('.side-nav-btn').forEach(btn => {
        btn.addEventListener('click', e => {
            const target = document.querySelector(btn.dataset.target);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
// このファイルは、さらにサイトをインタラクティブにしたい場合に使います。
// 例えば、スクロールに合わせて要素がフワッと表示されたり、
// グラフをクリックすると詳細が表示されたりといった演出が可能です。

// --- プロトタイプのサンプル：DNA風アニメーションの描画（簡易版） ---
// 実際のプロジェクトでは、より複雑なライブラリを使うことが多いです。

document.addEventListener('DOMContentLoaded', () => {
    console.log("BIOMOD 2025 サイトへようこそ！");

    // スクロール時に要素をフェードインさせる
    const fadeinSections = document.querySelectorAll('.fadein-section');
    const fadeinOnScroll = () => {
        fadeinSections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.classList.add('visible');
            }
        });
    };
    window.addEventListener('scroll', fadeinOnScroll);
    fadeinOnScroll(); // 初回実行

    // 段階的フェードイン（トップページ用）
    setTimeout(() => {
        document.querySelectorAll('.staged-fadein').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);

    // 例：ナビゲーションのリンクをクリックしたら、スムーズにスクロールする
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            // ...existing code...
        });
    });

    // ...existing code...
});