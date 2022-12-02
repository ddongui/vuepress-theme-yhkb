<template><div><h1 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h1>
<h2 id="首先安装-vuepress" tabindex="-1"><a class="header-anchor" href="#首先安装-vuepress" aria-hidden="true">#</a> 首先安装 vuepress</h2>
<ol>
<li>初始化项目</li>
</ol>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> init
</code></pre></div><ol start="2">
<li>将 VuePress 安装为本地依赖</li>
</ol>
<div class="language-bash" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> vuepress@next
</code></pre></div><ol start="3">
<li>在 <code v-pre>package.json</code> 中添加一些 scripts</li>
</ol>
<div class="language-json line-numbers-mode" data-ext="json"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">"docs:dev"</span><span class="token operator">:</span> <span class="token string">"vuepress dev docs"</span><span class="token punctuation">,</span>
        <span class="token property">"docs:build"</span><span class="token operator">:</span> <span class="token string">"vuepress build docs"</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装引航知识库主题插件" tabindex="-1"><a class="header-anchor" href="#安装引航知识库主题插件" aria-hidden="true">#</a> 安装引航知识库主题插件</h2>
<ol>
<li>安装插件到本地</li>
</ol>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-D</span> @ddongui/vuepress-theme-yhkb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div></template>


