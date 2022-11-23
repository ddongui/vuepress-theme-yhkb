import { REG_WINDOWS_ABSOLUTE_HEAD } from "../config";

export function changeTheSrc(rowCode: string) {
    rowCode = rowCode.replace(REG_WINDOWS_ABSOLUTE_HEAD, "/");
    rowCode = rowCode.replaceAll(/\\/g, "/");
    return rowCode;
}
