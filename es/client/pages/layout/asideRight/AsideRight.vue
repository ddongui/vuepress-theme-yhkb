<template>
    <div class="aside-right" v-if="items.length !== 0">
        <p class="outline">大纲</p>
        <dd-viewer>
            <dd-flex>
                <dd-slider-block
                    :keys="keys"
                    direction="column"
                    item-long="35.1px"
                    class="slider"
                    :active-key="key"
                ></dd-slider-block>
                <aside-menu :list="items" ref="asideMenu"></aside-menu>
            </dd-flex>
        </dd-viewer>
    </div>
</template>

<script setup lang="ts">
import { usePageData } from "@vuepress/client";
import { ref, watchEffect } from "vue";
import AsideMenu from "../../../components/asideMenu/AsideMenu.vue";
import { DdViewer, DdFlex, DdSliderBlock } from "ddong-ui";
import { flatHeaders } from "./AsideRight.utils";
import { useRouter } from "vue-router";

const items = ref();
const keys = ref<string[]>([]);
const key = ref("0");
const asideMenu = ref<InstanceType<typeof AsideMenu>>();
const menuKey = ref(0);

watchEffect(() => {
    items.value = usePageData().value.headers;
    keys.value = flatHeaders(items.value).map((header) => header.link);
    key.value = keys.value[0];
    menuKey.value++;
});

useRouter().afterEach((to) => {
    key.value = to.hash;
    asideMenu.value?.activate?.(to.hash);
});
</script>

<style scoped lang="less">
.aside-right {
    height: 70vh;
    position: sticky;
    top: 5em;
    min-width: 14em;
    font-size: 13px;

    .outline {
        font-size: 14px;
        font-weight: bold;
    }
    .slider {
        --dd-slider-block-slider-height: 0.5em;
    }
}
</style>
