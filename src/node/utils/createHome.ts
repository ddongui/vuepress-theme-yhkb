import { App, createPage } from "@vuepress/core";
// 若首页md文件不存在，创建首页
export async function createHome(app: App) {
    // 如果主页不存在
    if (app.pages.every((page) => page.path !== "/")) {
        // 创建一个主页
        const homepage = await createPage(app, {
            path: "/",
            // 设置 frontmatter
            frontmatter: {
                layout: "Layout",
            },
            // 设置 markdown 内容
            content: `<Home />`,
        });
        // 把它添加到 `app.pages`
        app.pages.push(homepage);
    }
}
