import { heads } from "@ddongui/util";
import { App } from "@vuepress/core";
import { fs, path } from "@vuepress/utils";
import { REG_WINDOWS_ABSOLUTE_HEAD } from "../config";
/* import path from "path"; */
/**
 * 将图片从本地路径复制到public目录下
 * @param absoluteLocalSrc 图片的绝对本地路径
 * @example
 * copyImgToPublic(app,"G:\notes_web\note_es6\images\13.png")
 * 在public目录下出现 "notes_web\note_es6\images\13.png" 文件
 */
export function copyImgToPublic(app: App, absoluteLocalSrc: string) {
    // => D:/07_project/vue/06_ddui/packages/plugins/vuepress-theme-yhkb/docs/.vuepress/public
    const destAbsolutePath = path.resolve(getPublicPath(app), toRelativePath(absoluteLocalSrc));
    try {
        // 创建目录
        fs.mkdirsSync(path.resolve(getPublicPath(app), getReletiveImgDir(toRelativePath(absoluteLocalSrc))));
        // 复制文件
        fs.copyFileSync(absoluteLocalSrc, destAbsolutePath);
    } catch (err) {
        console.log(err);
    }
}
// 获取public目录
function getPublicPath(app: App) {
    return app.dir.public();
}
// 将img得相对路径目录
function getReletiveImgDir(relativeImgPath: string) {
    return heads(relativeImgPath.split("\\")).join("/");
}
// 将图片得绝对路径转为相对路径
function toRelativePath(absoluteLocalSrc: string) {
    // windows
    return absoluteLocalSrc.replace(REG_WINDOWS_ABSOLUTE_HEAD, "");
}
