<!DOCTYPE html>
<html lang="en">

<head>
  <!-- Basic Page Needs -->
  <meta charset="UTF-8N"><!---
--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--
--><title>BIOMOD TEAM TOKYO　公式ウェブサイト</title>
  <!-- Mobile Specific Metas -->
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- FONT -->
  <link href="https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz" rel="stylesheet"　type="text/css">
  <!-- CSS -->
  <link rel="stylesheet" href="CSS/normalize.css">
  <link rel="stylesheet" href="CSS/skeleton.css">
  <link rel="stylesheet" href="CSS/custom.css">
  <!-- Script -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
  <script src="https://google-code-prettify.googlecode.com/svn/loader/run_prettify.js"></script>
  <link rel="stylesheet" href="github-prettify-theme.css">
  <script src="site.js"></script>
  <script>$(function () {
      $('a[href^="#"]').click(function () {
        var speed = 800;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var nw = $(window).width();
        var kw = 600;
        if (nw > kw) {
          var headerHeight = 180;
        } else {
          var headerHeight = 120;
        }
        var position = target.offset().top - headerHeight; //headerズレ補正
        $('body,html').animate({ scrollTop: position }, speed, 'swing');
        return false;
      });
    });</script>
  <!--Top of Page
-->
  <script>$(function () {
      var pagetop = $('#page_top');
      var speed = 800;
      pagetop.hide();
      $(window).scroll(function () {
        if ($(this).scrollTop() > 190) {
          pagetop.fadeIn();
        } else {
          pagetop.fadeOut();
        }
      });
      pagetop.click(function () {
        $('body,html').animate({ scrollTop: 0 }, speed, 'swing');
        return false;
      });
    });</script>
</head>
<body class="code-snippets-visible"><!--
--><header style="background-color:#040404;">
   <center></div>
    <div class="navbar-spacer"></div>
     <div class="container">
	     <h1 class="docs-header"><font color="white">BIOMOD Team Tokyo 公式ウェブサイト</font></h1>
 　<!-- <img src="images/東大ロゴ.png"> -->
     <div class="container>
      <nav class="navbar">
        <ul class="navbar-item">
	<li class="navbar-item"><a class="square_btn" href="index.html">ホーム</a></li>
	 <li class="navbar-item"><a class="square_btn3" href="biomod.html">BIOMODについて</a></li>
	  <li class="navbar-item"><a class="square_btn" href="project.html">今年のプロジェクト</a></li>
          <li class="navbar-item"><a class="square_btn" href="past.html">去年までのプロジェクト</a></li>
	  <li class="navbar-item"><a class="square_btn" href="kihukin.html">寄付金のお願い</a></li>
     <li class="navbar-item"><a class="square_btn" href="lab.html">藤井研究室について</a></li>
          <li class="navbar-item"><a class="square_btn" href="member.html">メンバー</a></li></ul></nav></div>
   </div>
  </center>
 </header>
 <script type="text/javascript">
    $(function () {
      $("#navigation").tinyNav();
    });
  </script>
  <div class="container"  style="padding-top:3rem;">
    <div class="docs-section" id="Future">
      <h4 class="docs-header">
        <b>はじめに</b>
      </h4>
      <p> 
私たちBIOMOD TEAM TOKYOは主に東京大学の学部生を中心に構成された研究チームです。ミーティングや実験などの定期的な活動に加えてシミュレーションや動画作成などのスキルアップを行い、毎年行われるBIOMOD国内大会と国際大会での発表を目標に日々精力的に活動しています。参加者は分子ロボティクスに興味をもつ学部生で構成されており、その所属は様々な分野に渡ります。（現在は教養学部、理学部、工学部、薬学部、農学部など）一昨年からは生産技術研究所の藤井研究室の研究活動として研究を進めており、実験設備を利用させていただいたり、研究の指導を受けております。
</p> 
<h4 class="docs-header">
        <b>分子ロボット研究の歴史、重要性</b>
      </h4>
	<p>
当団体が研究対象としている分子ロボット工学は、生体分子に関する知見が深まることで展開された新しい学問です。工学だけでなく生物学や情報学など幅広い分野の知識を用いた生命体を模倣したシステム構築を目指し、本が最も高い水準の研究を行なっている分野の内の一つです。
</p>
		       <h4 class="docs-header">
        <b>BIOMODについて</b>
      </h4>
<p>BIOMOD は分子を用いたロボットを設計して組み立て、そのアイデアを競う学部生のデザインコンペティションです。分子ロボット分野における発展と教育を目指し、2011年から開催されています。分子ロボットの特徴としては、DNAやRNA、モータータンパク質等の生体高分子が材料であること、非常に小さなスケールのシステムであることが挙げられます。大会ではこれらの利点を十二分に活かした、自律性ロボットや分子コンピュータ、ナノスケールでの治療法の基盤技術などの研究発表をします。一夏の間にプロジェクトを進め、10月末にサンフランシスコで行われるJamboreeにおいて英語で研究成果を競い合います。大きな特徴として、研究内容だけでなく、作成するHPや動画、プレゼンテーションなど、研究成果を発表するコミュニケーションまでが評価の対象となることが挙げられます。
</p>
  </p>
  </div>
  </div>
  <!-- Top of Page:Button -->
  <div id="page_top">
    <a href="#">Page Top</a>
  </div>
  </div>
<!-- End Document-->
 <footer style="background-color:#EDF7FF;">
	<center> &copy;BIOMOD 2019 Team Tokyo (Mail: biomodtokyo2019&#64;gmail.com)</center>
 </footer>
</body>
</html>
