import { omit } from "@ddongui/util";
/**
 * 打平headers
 */
export function flatHeaders(headers: MarkdownItHeader[]) {
    const _flatHeaders: Omit<MarkdownItHeader, "children">[] = [];

    headers.forEach((header) => {
        if (header.title !== "") _flatHeaders.push(omit(header, "children"));

        flatHeaders(header.children).forEach((header) => {
            if (header.title !== "") _flatHeaders.push(header);
        });
    });

    return _flatHeaders;
}

type MarkdownItHeader = {
    /**
     * The level of the header
     *
     * `1` to `6` for `<h1>` to `<h6>`
     */
    level: number;
    /**
     * The title of the header
     */
    title: string;

    /**
     * Link of the header
     *
     * Typically using `#${slug}` as the anchor hash
     */
    link: string;
    /**
     * The children of the header
     */
    children: MarkdownItHeader[];
};
