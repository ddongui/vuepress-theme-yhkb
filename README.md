# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

# 需求分析

1. 首先显示目录界面，总导航由读取文件产生目录, 也就是主页不需要 md 渲染，直接加载 vue 组件

    - 忽略文件名

2. 单个 md 文件 左侧显示一级目录 右侧显示二级以下的多级目录

3. 用户自定义左侧导航 => 每个对应一个 md 文件。 右侧显示 包括一级目录的多级目录

4. 图片正常显示，从本地到拷贝到 public 下

    - 例如

        - ```
           <img src="G:\notes_web\note_es6\images\13.png">
           <img src="/notes_web/note_es6/images/13.png">

           图片从G:\notes_web\note_es6\images\13.png复制到
           .vuepress\public\notes_web\note_es6\images\13.png
          ```

5. 侧边栏显示大纲 1、2、3、4、n 级别
