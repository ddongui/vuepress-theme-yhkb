<template><div><h1 id="_1-var-let-const" tabindex="-1"><a class="header-anchor" href="#_1-var-let-const" aria-hidden="true">#</a> 1.var&amp;let&amp;const</h1>
<p><img src="/09_notes/note_es6/images/1.png" alt="1"></p>
<p><strong>const</strong></p>
<p>不可改变其值, 赋值其数组可以在数组追加元素是因为常量存储的是数组地址。地址并没有改变所以可追加元素</p>
<h1 id="_2-解构赋值" tabindex="-1"><a class="header-anchor" href="#_2-解构赋值" aria-hidden="true">#</a> 2.解构赋值</h1>
<p><strong>有迭代器才能解构</strong></p>
<p><strong>数组解构</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"晓晨阳"</span><span class="token punctuation">,</span> <span class="token string">"六嗯那个"</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>v1<span class="token punctuation">,</span> v2<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>对象解构</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> obj <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"赵本山"</span><span class="token punctuation">,</span>
    <span class="token function-variable function">fun</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> name<span class="token punctuation">,</span> fun <span class="token punctuation">}</span> <span class="token operator">=</span> obj<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_3-模板字符串" tabindex="-1"><a class="header-anchor" href="#_3-模板字符串" aria-hidden="true">#</a> 3.模板字符串</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">var</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">啊实
打实的</span><span class="token template-punctuation string">`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_4-箭头函数" tabindex="-1"><a class="header-anchor" href="#_4-箭头函数" aria-hidden="true">#</a> 4.箭头函数</h1>
<p>this是静态的。指向函数在声明时指向的地址</p>
<h1 id="_5-展开运算符-数组" tabindex="-1"><a class="header-anchor" href="#_5-展开运算符-数组" aria-hidden="true">#</a> 5.展开运算符-数组</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"王太利"</span><span class="token punctuation">,</span> <span class="token string">"小样"</span><span class="token punctuation">]</span>
<span class="token keyword">const</span> arr2 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"曾以"</span><span class="token punctuation">,</span> <span class="token string">"零花"</span><span class="token punctuation">]</span>

<span class="token keyword">const</span> arr3 <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token operator">...</span>arr<span class="token punctuation">,</span> <span class="token operator">...</span>arr2<span class="token punctuation">]</span> <span class="token comment">// ["王太利", "小样","曾以", "零花"]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_6-symbol" tabindex="-1"><a class="header-anchor" href="#_6-symbol" aria-hidden="true">#</a> 6.symbol</h1>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> <strong>介绍</strong></h2>
<p>与string的不同</p>
<p><img src="/09_notes/note_es6/images/2.png" alt="2"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token string">"123"</span><span class="token punctuation">;</span>

a <span class="token operator">===</span> b<span class="token punctuation">;</span>  <span class="token comment">//返回true。两者在常量区引用同一个字符串</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/09_notes/note_es6/images/4.png" alt="4"></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"标识"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">///Symbol("标识")</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">Symbol</span><span class="token punctuation">(</span><span class="token string">"标识"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">///Symbol("标识")</span>

a <span class="token operator">!==</span> b<span class="token punctuation">;</span>  <span class="token comment">//a和b持有的是两块内存的引用</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="迭代器" tabindex="-1"><a class="header-anchor" href="#迭代器" aria-hidden="true">#</a> 迭代器</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> v <span class="token keyword">of</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="_7-生成器函数" tabindex="-1"><a class="header-anchor" href="#_7-生成器函数" aria-hidden="true">#</a> 7.生成器函数</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token operator">*</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>介绍</strong></p>
<p><img src="/09_notes/note_es6/images/5.png" alt="5"></p>
<p><strong>传参</strong></p>
<p><img src="/09_notes/note_es6/images/6.png" alt="6"></p>
<h2 id="实例" tabindex="-1"><a class="header-anchor" href="#实例" aria-hidden="true">#</a> 实例</h2>
<p><img src="/09_notes/note_es6/images/7.png" alt="7"></p>
<h1 id="_8-promise" tabindex="-1"><a class="header-anchor" href="#_8-promise" aria-hidden="true">#</a> 8.Promise</h1>
<p><strong>基础</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> p <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> num <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">ceil</span><span class="token punctuation">(</span>Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>num <span class="token operator">></span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"success: "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用p的第一个回调函数</span>
  <span class="token punctuation">}</span> 
  <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"error: "</span> <span class="token operator">+</span> num<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 调用p的第二个回调函数</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

p<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>
  <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="/09_notes/note_es6/images/8.png" alt="8"></p>
<p><strong>返回值</strong></p>
<p><img src="/09_notes/note_es6/images/9.png" alt="9"></p>
<h1 id="_9-集合" tabindex="-1"><a class="header-anchor" href="#_9-集合" aria-hidden="true">#</a> 9.集合</h1>
<h2 id="set" tabindex="-1"><a class="header-anchor" href="#set" aria-hidden="true">#</a> Set</h2>
<p><code v-pre>new Set&lt;T&gt;()</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">成员</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">readonly <strong>size</strong>: number</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>add</strong>(value: T): this</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>delete</strong>(value: T): boolean</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>has</strong>(value: T): boolean</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>clear</strong>(): void</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>forEach</strong> ()</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> Map</h2>
<p>接收一个二维数组，自动转为键值对形式</p>
<p><code v-pre>new Map&lt;K, V&gt;()</code></p>
<table>
<thead>
<tr>
<th style="text-align:left">成员</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">readonly <strong>size</strong>: number</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>set</strong>(key: K, value: V): this</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>delete</strong>(key: K): boolean</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>has</strong>(key: K): boolean</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>clear</strong>(): void</td>
<td></td>
</tr>
<tr>
<td style="text-align:left"><strong>forEach</strong> ()</td>
<td></td>
</tr>
</tbody>
</table>
<p><strong>实例</strong></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>strings<span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">log</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [ [ '0', '1' ], [ '1', '2' ], [ '2', '3' ] ]</span>
  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>strings<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">fun</span><span class="token punctuation">(</span><span class="token string">"1"</span><span class="token punctuation">,</span> <span class="token string">"2"</span><span class="token punctuation">,</span> <span class="token string">"3"</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment">// Map(3) { '0' => '1', '1' => '2', '2' => '3' }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_10-数值扩展" tabindex="-1"><a class="header-anchor" href="#_10-数值扩展" aria-hidden="true">#</a> 10.数值扩展</h1>
<p><strong>二进制</strong> <code v-pre>0b + number</code></p>
<p><strong>八进制</strong> <code v-pre>0o + number</code></p>
<p><strong>十六进制</strong> <code v-pre>0x + number|string</code></p>
<h2 id="number类" tabindex="-1"><a class="header-anchor" href="#number类" aria-hidden="true">#</a> Number类</h2>
<p><code v-pre>Number.EPSILON</code> 巨小的数值</p>
<p><code v-pre>Number.isFinite</code> 是否是有限数</p>
<p><code v-pre>Number.isNaN</code>  值是否为NaN</p>
<p><code v-pre>Number.isInteger</code> 是否为整数</p>
<p><code v-pre>Number.parseInt</code> 将字符串转换为整数</p>
<h2 id="math类" tabindex="-1"><a class="header-anchor" href="#math类" aria-hidden="true">#</a> Math类</h2>
<p><code v-pre>Math.trunc</code> 将小数部分抹去</p>
<p><code v-pre>Math.sign</code> 正数返回1，零返回0， 负值返回-1</p>
<h1 id="_11-对象扩展" tabindex="-1"><a class="header-anchor" href="#_11-对象扩展" aria-hidden="true">#</a> 11.对象扩展</h1>
<h2 id="object类" tabindex="-1"><a class="header-anchor" href="#object类" aria-hidden="true">#</a> Object类</h2>
<p><code v-pre>Object.is</code>  判断两个值是否相等</p>
<p><code v-pre>Object.assign</code>  对象合并</p>
<p><code v-pre>Object.setProtoTypeOf</code></p>
<p><code v-pre>Object.getProtoTypeOf</code></p>
<h1 id="_12-模块化" tabindex="-1"><a class="header-anchor" href="#_12-模块化" aria-hidden="true">#</a> 12.模块化</h1>
<p><strong>导出</strong>与<strong>导入</strong></p>
<p><code v-pre>main.js</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 分别暴露</span>
<span class="token keyword">export</span> <span class="token keyword">const</span> v1 <span class="token operator">=</span> <span class="token string">"test"</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">fun1</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token comment">// 全部导入</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> name <span class="token keyword">from</span> <span class="token string">"main.js"</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token comment">// {v1, fun1}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 统一暴露</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>v1<span class="token punctuation">,</span> fun1<span class="token punctuation">}</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span>v1<span class="token punctuation">,</span> fun1<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"main.js"</span> <span class="token comment">// 解构赋值导入</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>v1 <span class="token keyword">as</span> v2 <span class="token punctuation">,</span> fun1 <span class="token keyword">as</span> fun2<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"main.js"</span> <span class="token comment">//别名</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 默认暴露</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token string">"任意类型变量或函数"</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token keyword">default</span> <span class="token keyword">as</span> name<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"main.js"</span>
<span class="token keyword">import</span> name <span class="token keyword">from</span> <span class="token string">"main.js"</span> <span class="token comment">//针对默认暴露</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>index.html</code>  中<strong>导入</strong></p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>main.js<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


