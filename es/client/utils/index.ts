/**
 *
 * @param path /xxx/xxx/xxx/
 * @return xxx-xxx-xxx
 */
export function pathToIndex(path: string) {
    path = path.slice(1);

    if (path[path.length - 1] === "/") {
        path = path.slice(0, path.length - 1);
    }

    path = path.split("/").join("-");

    return path;
}

export function getHeadersAnchorAndScrollTop(parentEl: HTMLElement) {
    const headersAnchorAndScrollTop: { anchor: string; scrollTop: number }[] = [];

    const headersEl = parentEl.querySelectorAll("h1, h2, h3, h4, h5, h6");

    headersEl.forEach((headerEl) => {
        // +36去修正offsetTop
        headersAnchorAndScrollTop.push({
            anchor: "#" + headerEl.id,
            scrollTop: (headerEl as HTMLElement).offsetTop + 36,
        });
    });

    return headersAnchorAndScrollTop;
}
