<template><div><h1 id="扩展运算符-对象" tabindex="-1"><a class="header-anchor" href="#扩展运算符-对象" aria-hidden="true">#</a> 扩展运算符-对象</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>user</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>host<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>port<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>pwd<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token function">connect</span><span class="token punctuation">(</span> <span class="token punctuation">{</span><span class="token literal-property property">host</span><span class="token operator">:</span> <span class="token string">"localhost"</span><span class="token punctuation">,</span> <span class="token literal-property property">port</span><span class="token operator">:</span> <span class="token number">3306</span><span class="token punctuation">,</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">,</span> <span class="token literal-property property">pwd</span><span class="token operator">:</span> <span class="token string">"root"</span><span class="token punctuation">}</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="正则扩展" tabindex="-1"><a class="header-anchor" href="#正则扩展" aria-hidden="true">#</a> 正则扩展</h1>
<h2 id="命名捕获" tabindex="-1"><a class="header-anchor" href="#命名捕获" aria-hidden="true">#</a> 命名捕获</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 正常的正则</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"&lt;a href='http://www.ssss.com'>tom&lt;/a>"</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=["'](.*)["']>(.*)&lt;\/a></span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">//</span>
<span class="token punctuation">[</span>
  <span class="token string">"&lt;a href='http://www.ssss.com'>tom&lt;/a>"</span><span class="token punctuation">,</span>
  <span class="token string">'http://www.ssss.com'</span><span class="token punctuation">,</span>
  <span class="token string">'tom'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">"&lt;a href='http://www.ssss.com'>tom&lt;/a>"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/09_notes/note_es6/images/11.png" alt="11"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 正则扩展</span>
<span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"&lt;a href='http://www.ssss.com'>tom&lt;/a>"</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a href=["'](?&lt;url>.*)["']>(?&lt;text>.*)&lt;\/a></span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> 
<span class="token comment">// </span>
<span class="token punctuation">[</span>
  <span class="token string">"&lt;a href='http://www.ssss.com'>tom&lt;/a>"</span><span class="token punctuation">,</span>
  <span class="token string">'http://www.ssss.com'</span><span class="token punctuation">,</span>
  <span class="token string">'tom'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">"&lt;a href='http://www.ssss.com'>tom&lt;/a>"</span><span class="token punctuation">,</span>
  <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token punctuation">[</span>Object<span class="token operator">:</span> <span class="token keyword">null</span> prototype<span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'http://www.ssss.com'</span><span class="token punctuation">,</span> <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'tom'</span> <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/09_notes/note_es6/images/10.png" alt="10"></p>
<h2 id="正向断言" tabindex="-1"><a class="header-anchor" href="#正向断言" aria-hidden="true">#</a> 正向断言</h2>
<p><code v-pre>(?=拉)</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"JS2222么么555拉拉"</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(\d+)(?=拉)</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [ '555', index: 8, input: 'JS2222么么555拉拉', groups: undefined ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向断言" tabindex="-1"><a class="header-anchor" href="#反向断言" aria-hidden="true">#</a> 反向断言</h3>
<p><code v-pre>(?&lt;=么)</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> <span class="token string">"JS2222么么555拉拉"</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?=么)(\d+)</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// null</span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">(?&lt;=么)(\d+)</span><span class="token regex-delimiter">/</span></span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// [ '555', index: 8, input: 'JS2222么么555拉拉', groups: undefined ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dotall模式" tabindex="-1"><a class="header-anchor" href="#dotall模式" aria-hidden="true">#</a> dotAll模式</h2>
<p>正则语句末尾加 <code v-pre> gs</code>。并且 <code v-pre>.*</code> 后加 <code v-pre>?</code> 禁止贪婪（懒惰模式）</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> str <span class="token operator">=</span> 
<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;main>
  &lt;div>
    &lt;a>撒旦1&lt;/a>
    &lt;p>阿斯顿发生1&lt;/p>
  &lt;/div>
  &lt;div>
    &lt;a>撒旦2&lt;/a>
    &lt;p>阿斯顿发生2&lt;/p>&lt;/div>
  &lt;div>&lt;/div>
  &lt;div>&lt;/div>
&lt;/main></span><span class="token template-punctuation string">`</span></span>
<span class="token keyword">const</span> reg <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">&lt;a>(.*?)&lt;\/a>(.*?)&lt;p>(.*?)&lt;\/p></span><span class="token regex-delimiter">/</span><span class="token regex-flags">gs</span></span>
<span class="token keyword">let</span> res
<span class="token keyword">while</span> <span class="token punctuation">(</span>res <span class="token operator">=</span> reg<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//</span>
<span class="token punctuation">[</span>
  <span class="token string">'&lt;a>撒旦1&lt;/a>\n    &lt;p>阿斯顿发生1&lt;/p>'</span><span class="token punctuation">,</span>
  <span class="token string">'撒旦1'</span><span class="token punctuation">,</span>
  <span class="token string">'\n    '</span><span class="token punctuation">,</span>
  <span class="token string">'阿斯顿发生1'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">'&lt;main>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;a>撒旦1&lt;/a>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;p>阿斯顿发生1&lt;/p>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;a>撒旦2&lt;/a>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;p>阿斯顿发生2&lt;/p>&lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>&lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>&lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'&lt;/main>'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">]</span>
<span class="token punctuation">[</span>
  <span class="token string">'&lt;a>撒旦2&lt;/a>\n    &lt;p>阿斯顿发生2&lt;/p>'</span><span class="token punctuation">,</span>
  <span class="token string">'撒旦2'</span><span class="token punctuation">,</span>
  <span class="token string">'\n    '</span><span class="token punctuation">,</span>
  <span class="token string">'阿斯顿发生2'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token number">69</span><span class="token punctuation">,</span>
  <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token string">'&lt;main>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;a>撒旦1&lt;/a>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;p>阿斯顿发生1&lt;/p>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;a>撒旦2&lt;/a>\n'</span> <span class="token operator">+</span>
    <span class="token string">'    &lt;p>阿斯顿发生2&lt;/p>&lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>&lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'  &lt;div>&lt;/div>\n'</span> <span class="token operator">+</span>
    <span class="token string">'&lt;/main>'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">groups</span><span class="token operator">:</span> <span class="token keyword">undefined</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


