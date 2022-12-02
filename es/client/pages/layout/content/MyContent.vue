<template>
    <dd-container class="content">
        <dd-main class="yhbk-main">
            <div ref="contentEl">
                <Content class="theme-default-content"></Content>
            </div>
        </dd-main>
        <dd-aside class="yhkb-aside-right" right v-if="visibleAside"><aside-right /> </dd-aside>
    </dd-container>
</template>
<script setup lang="ts">
import { DdContainer, DdMain, DdAside } from "ddong-ui";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import AsideRight from "../asideRight/AsideRight.vue";

const emits = defineEmits<{
    (e: "setContentEl", contenEl: HTMLElement): void;
}>();

const visibleAside = ref(useRoute().path !== "/");
const contentEl = ref<HTMLDivElement>();

useRouter().afterEach((to) => {
    visibleAside.value = to.path !== "/";
});

onMounted(() => {
    if (contentEl.value?.firstElementChild) {
        emits("setContentEl", contentEl.value);
    }
});
</script>
<style lang="less" scoped>
.content {
    padding: 1em 2em;
    &:has(.yhkb-home) {
        background-color: var(--home-content-fill);

        // TODO: 不写注释？嗯？
        background: linear-gradient(to bottom, var(--home-content-fill) 10%, var(--fill));
    }

    &:has(.home) {
        padding: 0;
    }

    .yhkb-aside-right {
        transition: transform 0.1s ease-in-out;
        transform-origin: right;
        padding-left: 2em;
    }

    .yhbk-main {
        min-width: -webkit-fill-available;
    }
}
</style>
