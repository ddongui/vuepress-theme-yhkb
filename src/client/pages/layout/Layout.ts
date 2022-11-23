import { Router } from "vue-router";
import { getHeadersAnchorAndScrollTop } from "../../utils";

export function updateHash(ratio: number, start: number) {
    return (contenEl: HTMLElement | undefined | null | Element, router: Router) => {
        if (contenEl) {
            const headersAnchorAndScrollTop = getHeadersAnchorAndScrollTop(contenEl as HTMLElement);
            const offset = 50;

            for (let i = 0; i < headersAnchorAndScrollTop.length; i++) {
                const pre = headersAnchorAndScrollTop[i - 1];
                const temp = headersAnchorAndScrollTop[i];
                const next = headersAnchorAndScrollTop[i + 1];

                if (temp.scrollTop - start > 0) {
                    if (Math.abs(temp.scrollTop - start) < offset) {
                        router.push({ hash: temp.anchor });
                    } else {
                        router.push({ hash: pre.anchor });
                    }
                    break;
                } else if (next === undefined) {
                    router.push({ hash: temp.anchor });
                }
            }
        }
    };
}
