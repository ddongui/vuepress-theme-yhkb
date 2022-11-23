import { defineClientConfig, usePageData, usePageHead, usePageHeadTitle, useSiteData } from "@vuepress/client";
import Layout from "./pages/layout/Layout.vue";
import NotFound from "./pages/notFound/NotFound.vue";
import Home from "./pages/home/Home.vue";
import "ddong-ui/es/style.css";
import "./styles/index.less";

export default defineClientConfig({
    enhance({ app, router, siteData }) {
        app.component("Home", Home);
    },
    setup() {
        /* console.log(usePageData().value); */
    },
    layouts: {
        Layout,
        NotFound,
    },
});
