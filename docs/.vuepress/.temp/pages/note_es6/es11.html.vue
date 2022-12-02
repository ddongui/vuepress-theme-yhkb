<template><div><h1 id="私有属性" tabindex="-1"><a class="header-anchor" href="#私有属性" aria-hidden="true">#</a> 私有属性</h1>
<p>私有属性前缀为#</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Person</span> <span class="token punctuation">{</span>
  name
  #age

  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name
    <span class="token keyword">this</span><span class="token punctuation">.</span>#age <span class="token operator">=</span> age
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> girl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">"tom"</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>girl<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Person { name: 'tom' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="promise方法" tabindex="-1"><a class="header-anchor" href="#promise方法" aria-hidden="true">#</a> Promise方法</h1>
<p>参数是一组包含Promise实例的数组，返回值是一个新的Promise实例</p>
<p><code v-pre>allSettled()</code></p>
<p>参数的状态<strong>不影响</strong> 新Promise的状态</p>
<p><strong>实例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"success p1"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> p2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"success p2"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> res <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">allSettled</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/09_notes/note_es6/images/12.png" alt="12"></p>
<p><code v-pre>all()</code></p>
<p>参数的状态<strong>影响</strong> 新Promise的状态</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> res <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">[</span>p1<span class="token punctuation">,</span> p2<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="/09_notes/note_es6/images/13.png" alt="13"></p>
<h1 id="matchall方法" tabindex="-1"><a class="header-anchor" href="#matchall方法" aria-hidden="true">#</a> matchAll方法</h1>
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

<span class="token keyword">const</span> res <span class="token operator">=</span> str<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>reg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>res<span class="token punctuation">]</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//</span>
<span class="token punctuation">[</span>
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
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
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
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="动态import" tabindex="-1"><a class="header-anchor" href="#动态import" aria-hidden="true">#</a> 动态import</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// hello.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"hello"</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// main.js</span>
<span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">"hello.js"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">module</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    module<span class="token punctuation">.</span><span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="大整形" tabindex="-1"><a class="header-anchor" href="#大整形" aria-hidden="true">#</a> 大整形</h1>
<p><code v-pre>n</code> 后缀表示 bigint。用于大数值的运算</p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> n <span class="token operator">=</span> <span class="token number">111n</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> n<span class="token punctuation">)</span> <span class="token comment">// bigint</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">BigInt</span><span class="token punctuation">(</span><span class="token number">111</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 111n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="全局对象" tabindex="-1"><a class="header-anchor" href="#全局对象" aria-hidden="true">#</a> 全局对象</h1>
<p><code v-pre> globalThis</code></p>
<p>在 Node.js 中，它们都无法获取，必须使用 <code v-pre>global</code>。</p>
</div></template>


