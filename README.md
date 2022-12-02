## [the online docs](https://ddongui.github.io/vuepress-theme-yhkb/)

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
