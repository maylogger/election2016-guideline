<!DOCTYPE html><html class="no-js" lang="zh-TW"><head><meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><meta charset="utf-8"><meta content="width=device-width, initial-scale=1" name="viewport"><link href="/stylesheets/all.css" media="screen" rel="stylesheet" type="text/css" />
<link href="/vendor/icomoon/style.css" media="screen" rel="stylesheet" type="text/css" /><script src="/vendor/modernizr-custom.js" type="text/javascript"></script><!--[if IE]><link href="/stylesheets/ie.css" media="screen" rel="stylesheet" type="text/css" /><![endif]--><!--[if lt IE 9]><script src="//html5shim.googlecode.com/svn/trunk/html5.js" type="text/javascript"></script><![endif]--><title>競選系列網站 Guideline</title><meta content="競選系列網站 Guideline" name="keywords"><meta content="競選系列網站 Guideline" name="description"><meta content="競選系列網站 Guideline" property="og:title"><meta content="競選系列網站 Guideline" property="og:site_name"><meta content="http://localhost:3000" property="og:url"><meta content="http://localhost:3000/fb.png" property="og:image"><meta content="競選系列網站 Guideline" property="og:description"><meta content="website" property="og:type"><meta content="123456" property="fb:admins"></head><body class="off-canvas"><div class="page"><div class="header"><div class="header-inner"><div class="header-top"><h1 class="logo"><a href="#">點亮台灣設計規範 Web Design Guideline</a></h1><button class="menu-btn"><div class="menu-btn-line"></div></button></div><div class="menu off-canvas-menu"><button class="close-btn"><div class="close-btn-line"></div></button><div class="menu-title">目錄</div><ul class="menu-list"><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#guideline-summary">規範簡介</a></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#principle">設計原則</a><ul class="menu-sub-list"><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#mobile-experience">行動裝置體驗</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#high-dpi">高解析度</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#simple-is-best">簡單易用</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#guideline-is-flexible">規範是活的</a></li></ul></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#color-guideline">色彩規範</a><ul class="menu-sub-list"><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#main-color">主色調</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#dark-color">深色調</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#strong-color">醒目、強調色調</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#rectangle-gradient">矩形漸層</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#circle-gradient">圓形漸層</a></li></ul></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#logo">標誌與文字排列</a></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#website-icon">網站圖示</a></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#icon">台灣縣市圖示</a></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#basic-ui">基礎使用者介面</a></li><li class="menu-list-item"><a class="menu-list-item-title smooth-scroll-link" href="#partial">組合元件</a><ul class="menu-sub-list"><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#article-list">文章列表</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#hero">重點區塊（文章）</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#card">卡片</a></li><li class="menu-sub-list-item"><a class="smooth-scroll-link" href="#member">人物</a></li></ul></li></ul></div><div class="off-canvas-mask"></div></div></div><h1 id="highlightjs">Highlight.js</h1>

<p>Highlight.js — это подсветчик синтаксиса, написанный на JavaScript. Он работает
и в браузере, и на сервере. Он работает с практически любой HTML разметкой, не
зависит от каких-либо фреймворков и умеет автоматически определять язык.</p>

<h2 id="section">Начало работы</h2>

<p>Минимум, что нужно сделать для использования highlight.js на веб-странице — это
подключить библиотеку, CSS-стили и вызывать <a href="http://highlightjs.readthedocs.org/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a>:</p>

<p><code>html
&lt;link rel="stylesheet" href="/path/to/styles/default.css"&gt;
&lt;script src="/path/to/highlight.pack.js"&gt;&lt;/script&gt;
&lt;script&gt;hljs.initHighlightingOnLoad();&lt;/script&gt;
</code></p>

<p>Библиотека найдёт и раскрасит код внутри тегов <code>&lt;pre&gt;&lt;code&gt;</code>, попытавшись
автоматически определить язык. Когда автоопределение не срабатывает, можно явно
указать язык в атрибуте class:</p>

<p>```html</p>
<pre><code class="html">...</code></pre>
<p>```</p>

<p>Список поддерживаемых классов языков доступен в <a href="http://highlightjs.readthedocs.org/en/latest/css-classes-reference.html">справочнике по классам</a>.
Класс также можно предваоить префиксами <code>language-</code> или <code>lang-</code>.</p>

<p>Чтобы отключить подсветку для какого-то блока, используйте класс <code>nohighlight</code>:</p>

<p>```html</p>
<pre><code class="nohighlight">...</code></pre>
<p>```</p>

<h2 id="section-1">Инициализация вручную</h2>

<p>Чтобы иметь чуть больше контроля за инициализацией подсветки, вы можете
использовать функции <a href="http://highlightjs.readthedocs.org/en/latest/api.html#highlightblock-block"><code>highlightBlock</code></a> и <a href="http://highlightjs.readthedocs.org/en/latest/api.html#configure-options"><code>configure</code></a>. Таким образом
можно управлять тем, <em>что</em> подсвечивать и <em>когда</em>.</p>

<p>Вот пример инициализация, эквивалентной вызову <a href="http://highlightjs.readthedocs.org/en/latest/api.html#inithighlightingonload"><code>initHighlightingOnLoad</code></a>, но
с использованием jQuery:</p>

<p><code>javascript
$(document).ready(function() {
  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});
</code></p>

<p>Вы можете использовать любые теги разметки вместо <code>&lt;pre&gt;&lt;code&gt;</code>. Если
используете контейнер, не сохраняющий переводы строк, вам нужно сказать
highlight.js использовать для них тег <code>&lt;br&gt;</code>:</p>

<p>```javascript
hljs.configure({useBR: true});</p>

<p>$(&#39;div.code&#39;).each(function(i, block) {
  hljs.highlightBlock(block);
});
```</p>

<p>Другие опции можно найти в документации функции <a href="http://highlightjs.readthedocs.org/en/latest/api.html#configure-options"><code>configure</code></a>.</p>

<h2 id="web-workers">Web Workers</h2>

<p>Подсветку можно запустить внутри web worker&#39;а, чтобы не подвешивать окно
браузера при работе с большими кусками кода.</p>

<p>В основном скрипте:</p>

<p><code>javascript
addEventListener('load', function() {
  var code = document.querySelector('#code');
  var worker = new Worker('worker.js');
  worker.onmessage = function(event) { code.innerHTML = event.data; }
  worker.postMessage(code.textContent);
})
</code></p>

<p>В worker.js:</p>

<p><code>javascript
onmessage = function(event) {
  importScripts('&lt;path&gt;/highlight.pack.js');
  var result = self.hljs.highlightAuto(event.data);
  postMessage(result.value);
}
</code></p>

<h2 id="section-2">Установка библиотеки</h2>

<p>Highlight.js можно использовать в браузере прямо с CDN хостинга или скачать
индивидуальную сборку, а также установив модуль на сервере. На
<a href="https://highlightjs.org/download/">страница загрузки</a> подробно описаны все варианты.</p>

<p>Обратите внимание, что библиотека не предназначена для использования в виде
исходного кода на GitHub, а требует отдельной сборки. Если вам не подходит ни
один из готовых вариантов, читайте <a href="http://highlightjs.readthedocs.org/en/latest/building-testing.html">документацию по сборке</a>.</p>

<h2 id="section-3">Лицензия</h2>

<p>Highlight.js распространяется под лицензией BSD. Подробнее читайте файл
<a href="https://github.com/isagalaev/highlight.js/blob/master/LICENSE">LICENSE</a>.</p>

<h2 id="section-4">Ссылки</h2>

<p>Официальный сайт билиотеки расположен по адресу <a href="https://highlightjs.org/">https://highlightjs.org/</a>.</p>

<p>Более подробная документация по API и другим темам расположена на
<a href="http://highlightjs.readthedocs.org/">http://highlightjs.readthedocs.org/</a>.</p>

<p>Авторы и контрибьютора перечислена в файле <a href="https://github.com/isagalaev/highlight.js/blob/master/AUTHORS.ru.txt">AUTHORS.ru.txt</a> file.</p>

</div><a class="back-to-top smooth-scroll-link" href="#top">返回頂部</a><script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js" type="text/javascript"></script>
<script src="/vendor/highlight/highlight.pack.js" type="text/javascript"></script>
<script src="/vendor/sticky.min.js" type="text/javascript"></script>
<script src="/vendor/smooth-scroll.js" type="text/javascript"></script>
<script src="/javascripts/all.js" type="text/javascript"></script></body></html>