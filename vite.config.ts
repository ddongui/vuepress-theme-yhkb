import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
// import dts from "vite-plugin-dts";
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: {
                index: resolve(__dirname, "src/index.ts") /* , client: resolve(__dirname, "src/client/index.ts") */,
            },
            formats: ["es"],
        },
        rollupOptions: {
            output: [{ format: "es", dir: "es" }],
            external: ["vue", "@vuepress/client", "@vuepress/core", "@vuepress/utils", "@vuepress/theme-default"],
        },
        terserOptions: {
            compress: {
                drop_console: true,
            },
        },
    },
    preview: {},
});
