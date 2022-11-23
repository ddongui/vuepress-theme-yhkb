import { defaultTheme } from "vuepress";
import { theme } from "vuepress-theme-yhkb";

export default {
    theme: theme({
        // 默认主题配置
        navbar: [
            {
                text: "首页",
                link: "/",
            },
        ],
    }),
};
