# 安装

## 首先安装 vuepress

1. 初始化项目

```bash:no-line-numbers
npm init
```

2. 将 VuePress 安装为本地依赖

```bash:no-line-numbers
npm install -D vuepress@next
```

3. 在 `package.json` 中添加一些 scripts

```json
{
    "scripts": {
        "docs:dev": "vuepress dev docs",
        "docs:build": "vuepress build docs"
    }
}
```

## 安装引航知识库主题插件

1. 安装插件到本地

```bash
npm install -D @ddongui/vuepress-theme-yhkb
```
