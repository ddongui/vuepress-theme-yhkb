<template>
    <dd-container height="100vh">
        <dd-header :style="{ zIndex: 1 }">
            <Nav></Nav>
        </dd-header>
        <dd-aside width="18em" class="yhkb-aside-left">
            <dd-viewer height="100%">
                <Aside></Aside>
            </dd-viewer>
        </dd-aside>
        <dd-main class="my-main">
            <dd-viewer height="100%" @movingY="onMovingY" ref="viewer">
                <MyContent @setContentEl="(el) => (contentEl = el)" />
            </dd-viewer>
        </dd-main>
    </dd-container>
</template>
<script setup lang="ts">
import Nav from "./header/Nav.vue";
import Aside from "./aside/Aside.vue";
import MyContent from "./content/MyContent.vue";

import { DdContainer, DdAside, DdHeader, DdMain, DdViewer } from "ddong-ui";
import { Debounce } from "@ddongui/util";
import { ref } from "vue";
import { updateHash } from "./Layout";
import { useRouter } from "vue-router";
import { nextTick } from "process";

let contentEl = ref<HTMLElement>();
const router = useRouter();

const onMovingY = Debounce(
    (ratio: number, start: number) => updateHash(ratio, start)(contentEl.value?.firstElementChild, router),
    0
);

const viewer = ref();
useRouter().afterEach((to, from) => {
    if (to.path !== from.path) {
        console.log(viewer.value?.move);
        viewer.value?.move?.(0, 0);
    }
});
</script>
<style lang="less" scoped>
.my-main {
    overflow: hidden;
}
.yhkb-aside-left {
    border-right: 2px solid rgb(var(--border-rgb));

    overflow: hidden;
}
</style>
