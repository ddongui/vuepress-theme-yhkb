import { injectThenProvide } from "@ddongui/util";

export default function main() {
    /* const count = injectThenProvide("counte", 0, (count) => count + 1);

    console.log(count); */

    return {
        /* count */
    };
}

export function formatName(name: string) {
    if (name.match(/.html/)) {
        return name.replace(/.html/, "");
    }

    return name;
}
