<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>スムーズスクロール（JS版）</title>
    <style>
        section {
            height: 100vh;
            padding: 20px;
        }
    </style>
</head>
<body>

    <nav>
        <a href="#" class="scroll-link" data-target="section1">セクション1</a>
        <a href="#" class="scroll-link" data-target="section2">セクション2</a>
        <a href="#" class="scroll-link" data-target="section3">セクション3</a>
    </nav>

    <section id="section1" style="background-color: lightcoral;">
        <h2>セクション1</h2>
        <p>ここはセクション1です。</p>
    </section>

    <section id="section2" style="background-color: lightblue;">
        <h2>セクション2</h2>
        <p>ここはセクション2です。</p>
    </section>

    <section id="section3" style="background-color: lightgreen;">
        <h2>セクション3</h2>
        <p>ここはセクション3です。</p>
    </section>

    <script>
        // スムーズスクロールの設定
        document.querySelectorAll('.scroll-link').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault(); // デフォルトのリンク動作を無効化
                const target = document.getElementById(this.getAttribute('data-target')); // 対象のidを取得
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            });
        });
    </script>

</body>
</html>
