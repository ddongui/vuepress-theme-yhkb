import { App, Theme } from "@vuepress/core";
import { getDirname, path } from "@vuepress/utils";
import { createHome } from "./utils/createHome";
import { createSiderItems } from "./utils/createSiderItems";
import { getHeaders } from "./utils/setHeaders";
//@ts-ignore
import { defaultTheme } from "@vuepress/theme-default";
import { handleImgSrc } from "./utils/handleImgSrc";
const __dirname = getDirname(import.meta.url);

export default function theme(options: Props): Theme {
    // 返回一个主题函数
    return (app: App) => {
        return {
            name: "vuepress-theme-yhkb",

            plugins: [],

            clientConfigFile: path.resolve(__dirname, "./client"),

            extendsPage(page) {
                // 设置pages的header 1，2，3，n级
                page.data.headers = getHeaders(page) as any;
            },

            extendsMarkdown(md) {
                md.use(() => handleImgSrc(app, md));
            },

            async onInitialized(app) {
                // 创建菜单对象，写入临时文件siderItems.js
                createSiderItems(app);
                // 若首页md文件不存在，创建首页
                createHome(app);
            },
            extends: defaultTheme(),
        };
    };
}

type Props = {
    docsPath: string;
};
