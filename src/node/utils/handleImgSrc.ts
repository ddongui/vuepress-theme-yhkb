import { App } from "@vuepress/core";
import MarkdownIt from "markdown-it";
import { RenderRule } from "markdown-it/lib/renderer";
import { changeTheSrc } from "./changeTheSrc";
import { copyImgToPublic } from "./copyImgToPublic";

/**
 * 将本地绝对路径的图片进行处理，使得打包后可以访问
 */
export function handleImgSrc(app: App, md: MarkdownIt) {
    const imageRenderer = md.renderer.rules.image;

    md.renderer.rules.image = (...args: Parameters<RenderRule>) => {
        // 将token渲染成html => <img src="G:\notes_web\note_es6\images\10.png" alt="10">
        let rowCode = imageRenderer?.(...args);
        if (rowCode) {
            // => G:\notes_web\note_es6\images\10.png
            const src = rowCode.match(/src="(.*?)"/)?.[1];

            if (src && isAbsoluteLocalSrc(src)) {
                // 复制md中绝对路本地径的图片到public目录下
                copyImgToPublic(app, src);
                // 将绝对本地src替换成/开头得绝对路径
                rowCode = changeTheSrc(rowCode);
            }

            return rowCode;
        }

        return "";
    };
}

function isAbsoluteLocalSrc(src: string) {
    const reg = /^[A-Z]/;

    return reg.test(src);
}
