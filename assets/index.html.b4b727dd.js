import{_ as e,o as n,c as s,e as a}from"./app.f40100d4.js";const i={},d=a(`<h1 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h1><h2 id="新建配置文件" tabindex="-1"><a class="header-anchor" href="#新建配置文件" aria-hidden="true">#</a> 新建配置文件</h2><p>新建 <code>docs</code>、<code>.vuepress</code>文件夹与 <code>config.js</code>文件。文件目录结构如下</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  │  └─ config.js
└─ package.json
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置本主题" tabindex="-1"><a class="header-anchor" href="#配置本主题" aria-hidden="true">#</a> 配置本主题</h2><p>进入 <code>config.js</code> 添加如下代码</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;vuepress&quot;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> theme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@ddongui/vuepress-theme-yhkb&quot;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">theme</span><span class="token operator">:</span> <span class="token function">theme</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加主页" tabindex="-1"><a class="header-anchor" href="#添加主页" aria-hidden="true">#</a> 添加主页</h2><p>若是未添加主页 md 文件，会自动生成默认主页样式</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
|  └─ index.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="添加其他页" tabindex="-1"><a class="header-anchor" href="#添加其他页" aria-hidden="true">#</a> 添加其他页</h2><p>例如本站的文档目录，本主题会自动生成相应的菜单结构，无需额外配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>├─ docs
│  ├─ .vuepress
│  ├─ 安装
|  | └─ index.md
│  ├─ 使用
|  | └─ index.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),t=[d];function c(r,o){return n(),s("div",null,t)}const p=e(i,[["render",c],["__file","index.html.vue"]]);export{p as default};
