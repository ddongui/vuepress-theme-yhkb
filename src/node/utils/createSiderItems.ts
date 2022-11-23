import { setDeepMap, mapToObj } from "@ddongui/util";
import { App } from "@vuepress/core";
/**
 * 创建菜单对象，写入临时文件siderItems.js
 */
export function createSiderItems(app: App) {
    const siderItems = new Map<string, Map<any, any> | string>();
    // 规格化路径
    app.pages.forEach((page) => {
        const path = decodeURI(page.path);
        if (!is404(path)) {
            const paths = formatPaths(path);

            setDeepMap(siderItems, paths, path);
        }
    });
    // 写入临时文件
    app.writeTemp(
        "siderItems.js",
        `
        export const siderItems = ${JSON.stringify(mapToObj(siderItems))}
    `
    );
}

type SiderItem = {};

/**
 * @param paths 字符串 /demo/demo/
 * @returns [demo,demo]
 */
function formatPaths(paths: string) {
    let _paths = paths.split("/").slice(1);

    if (_paths[_paths.length - 1] === "") {
        _paths = _paths.slice(0, _paths.length - 1);
    }

    return _paths;
}

function is404(path: string) {
    return path === "/404.html";
}
