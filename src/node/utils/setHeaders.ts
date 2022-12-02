import { times } from "@ddongui/util";
import { Page } from "@vuepress/core";

export function getHeaders(page: Page<Record<never, never>, Record<string, unknown>, Record<never, never>>) {
    const headers: header[] = [];

    // <h1 id="javase-重学拓展" tabindex="-1"><a class="header-anchor" href="#javase-重学拓展" aria-hidden="true">#</a> JavaSE 重学拓展</h1>\n
    const infos = page.contentRendered.matchAll(/<h(\d)\s+id="(.*?)".*><a.*>.*<\/a>(.*)<\/h\d>/g);

    for (const info of infos) {
        // info[1] => "1"
        // info[2] => "javase-重学拓展"
        // info[3] => " JavaSE 重学拓展"

        const level = parseInt(info[1]);
        const link = "#" + info[2];
        const title = info[3];

        let lastHeader = getLastHeader(headers);

        if (level === 1) {
            lastHeader = headers[headers.length] = headerNull(1);

            lastHeader.level = level;
            lastHeader.link = link;
            lastHeader.title = title;
            lastHeader.children = [];

            /* console.log("headers", headers); */
        } else {
            /* console.log(level); */
            /* let _lastHeader = headerNull(level); */
            if (headers?.[0]?.title === "JavaSE 重学拓展") {
                console.log(level);
                console.log("lastHeader", lastHeader);
            }
            times(1, level + 1, (_level) => {
                //  当上级标题不存在时
                if (lastHeader === undefined) {
                    lastHeader = headers[headers.length] = headerNull(_level);
                }
                lastHeader = setLastHeader(lastHeader.children, level);
            });

            lastHeader.link = link;
            lastHeader.title = title;
        }

        /* console.log(info[1]);
                console.log(info[2]); */
    }
    /* console.log("headers_total", headers); */
    return headers;
}
type header = {
    level: number;
    link: string;
    title: string;
    children: any[];
};

function headerNull(level?: number): header {
    return {
        level: level || -1,
        link: "",
        title: "",
        children: [],
    };
}

function getLastHeader(headers: header[]) {
    return headers[headers.length - 1];
}

function setLastHeader(headers: header[], level: number) {
    return (headers[headers.length] = headerNull(level));
}
/**
 * @return 格式化后的标准link
 * @example
 * ```ts
 * formatLink("Symbol")
 * // symbol
 * formatLink("11.xxx")
 * // _11-xxx
 * ```
 */
function formatLink(link: string) {
    link = link.toLowerCase();

    if (link.match(/[0-9]*/)?.[0]) {
        link = "_" + link;
    }

    link = link.replaceAll(/[\.|\&|\s+]/g, "-");

    return link;
}
/*
    [{
        level: n,
        link: "#x",
        title: "x"
        children: []
    }]
*/
/*
    # 1
    ## 11
    ### 111

    # 2
    ## 22
    ### 222
*/
