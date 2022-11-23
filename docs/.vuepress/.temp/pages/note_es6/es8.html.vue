<template><div><h1 id="async" tabindex="-1"><a class="header-anchor" href="#async" aria-hidden="true">#</a> async</h1>
<p><strong>作用</strong></p>
<blockquote>
<ol>
<li>
<p><strong>async</strong> 修饰 <strong>函数</strong> 并且<strong>强制</strong>返回值为 <strong>promise</strong>对象。</p>
</li>
<li>
<p>并且函数内部想要使用 await 关键字，这个函数必须是async函数</p>
</li>
<li>
<p>没有协程概念, (我觉得有写成概念，但是没有，很垃圾)。</p>
</li>
</ol>
</blockquote>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token string">"asd"</span>
    <span class="token comment">// 返回值Promise对象。PromiseStatus = "resolved"  PromiseValue = "asd"</span>
    <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"error"</span><span class="token punctuation">)</span> 
    <span class="token comment">// 返回值Promise对象。 PromiseStatus = "rejectd"  PromiseValue = "Error: error"</span>
    <span class="token keyword">return</span> New <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token string">"成功"</span><span class="token punctuation">)</span>
        <span class="token function">reject</span><span class="token punctuation">(</span><span class="token string">"失败"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> 

<span class="token comment">//res有可能没有值，因为res不会等待fun()执行完成。这可能是fun()内部有异步的请求. 比如setTimeout()函数</span>
<span class="token keyword">const</span> res <span class="token operator">=</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
    <span class="token comment">//</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="await" tabindex="-1"><a class="header-anchor" href="#await" aria-hidden="true">#</a> await</h1>
<p>堵塞 <strong>async函数</strong> 所在的执行处, 直到 所等待<strong>函数内部</strong> <strong>所返回的 Promise对象</strong>的<strong>中异步请求执行完成并且resolve或reject出去</strong>。</p>
<p>条件：</p>
<blockquote>
<ol>
<li>
<p>自己所处的函数必须是asycn函数。</p>
</li>
<li>
<p>所等待的函数必须返回Promise对象</p>
</li>
</ol>
</blockquote>
<p>注意：</p>
<blockquote>
<p>执行的函数会正常执行一遍。 遇到异步函数 会继续进去执行,不会跳过。 async并不是异步函数。setTimeout()、网络请求、等才是</p>
</blockquote>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<ol>
<li>
<p><strong>Promise是用来包装异步操作的，所以仅仅包含同步代码它是异步不了滴。</strong></p>
</li>
<li>
<p><strong>Promise把异步操作包装起来，是为了让你的异步代码看起来更直观更优雅。</strong></p>
</li>
<li>
<p><strong>async函数是用来包装Promise的，所以仅仅包含同步代码它也是异步不了滴。</strong></p>
</li>
<li>
<p><strong>async函数把Promise包装起来，是为了让你的异步代码看起来比Promise还要直观还要</strong>
<strong>优雅，能够做到望文生义......</strong></p>
</li>
</ol>
<h1 id="对象方法的扩展" tabindex="-1"><a class="header-anchor" href="#对象方法的扩展" aria-hidden="true">#</a> 对象方法的扩展</h1>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token comment">// 获取对象所有键</span>
Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> string<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 获取对象所有值</span>
Object<span class="token punctuation">.</span><span class="token function">values</span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> any<span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 获取对象所有键值、 es10新增将二维数组转换为对象</span>
Object<span class="token punctuation">.</span><span class="token function">entries</span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span>string<span class="token punctuation">,</span> any<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token comment">// 获取对象属性的描述</span>
Object<span class="token punctuation">.</span>getOwnPropertyDescriptors<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">></span><span class="token punctuation">(</span>o<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">[</span><span class="token constant">P</span> <span class="token keyword">in</span> keyof <span class="token constant">T</span><span class="token punctuation">]</span><span class="token operator">:</span> TypedPropertyDescriptor<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">[</span><span class="token constant">P</span><span class="token punctuation">]</span><span class="token operator">></span><span class="token punctuation">}</span> <span class="token operator">&amp;</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>x<span class="token operator">:</span> string<span class="token punctuation">]</span><span class="token operator">:</span> PropertyDescriptor <span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// 属性值</span>
        <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"tom"</span><span class="token punctuation">,</span>
        <span class="token comment">// 属性特性</span>
        <span class="token literal-property property">writable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>   <span class="token comment">// 可写的</span>
        <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可配置的</span>
        <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">//  可枚举的</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


