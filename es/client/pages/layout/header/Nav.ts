import { Sun, Moon } from "@ddongui/icon"
import { Logic } from "@ddongui/util"
import { shallowRef } from "vue"

export function useDarkTheme() {
    const icon = shallowRef(Sun)

    const lightToggle = Logic.newToggle(true)

    lightToggle.on("on", () => {
        icon.value = Sun
        document.documentElement.classList.remove("dark")
    })
    lightToggle.on("off", () => {
        document.documentElement.classList.add("dark")
        icon.value = Moon
    })

    return { icon, touch: lightToggle.touch }
}
