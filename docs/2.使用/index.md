# 使用

## 新建配置文件

新建 `docs`、`.vuepress`文件夹与 `config.js`文件。文件目录结构如下

```text
├─ docs
│  ├─ .vuepress
│  │  └─ config.js
└─ package.json
```

## 配置本主题

进入 `config.js` 添加如下代码

```js
import { defineUserConfig } from "vuepress"
import { theme } from "@ddongui/vuepress-theme-yhkb"

export default defineUserConfig({
    theme: theme(),
})
```

## 添加主页

若是未添加主页 md 文件，会自动生成默认主页样式

```text
├─ docs
|  └─ index.md
```

## 添加其他页

例如本站的文档目录，本主题会自动生成相应的菜单结构，无需额外配置

```text
├─ docs
│  ├─ .vuepress
│  ├─ 安装
|  | └─ index.md
│  ├─ 使用
|  | └─ index.md
```
