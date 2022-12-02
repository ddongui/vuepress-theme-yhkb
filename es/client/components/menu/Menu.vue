<template>
    <dd-menu :label="label" :index="index" ref="MenuVue" :initial-collapsed="!(deep === 1 || !allCollapsed)">
        <template v-for="(item, key) in list">
            <Menu
                v-if="typeof item === 'object'"
                :list="item"
                :label="key"
                :index="key"
                :deep="deep + 1"
                :all-collapsed="allCollapsed"
            ></Menu>
            <router-link v-else :to="item"
                ><dd-item :index="key" class="my-item">{{ formatName(key) }}</dd-item></router-link
            >
        </template>
    </dd-menu>
</template>
<script lang="ts">
export default {
    name: "Menu",
};
</script>
<script setup lang="ts">
import { DdMenu, DdItem } from "ddong-ui";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { pathToIndex } from "../../utils";
import main, { formatName } from "./Menu";

const props = withDefaults(
    defineProps<{
        list: Record<string, any>;
        label?: string;
        index?: string;
        defaultIndex?: string;
        deep?: number;
        allCollapsed?: boolean;
    }>(),
    {
        deep: 0,
        allCollapsed: true,
    }
);

const MenuVue = ref();
const router = useRouter();
/* 当点击目录时更新侧边栏状态 */
if (props.deep === 0) {
    router.afterEach((to) => {
        MenuVue.value?.select(pathToIndex(decodeURI(to.path)));
    });
}
onMounted(() => {
    /* 刷新页面更新侧边栏状态 */
    if (props.deep === 0 && props.defaultIndex) {
        MenuVue.value?.select(props.defaultIndex);
    }
});
</script>
<style lang="less" scoped>
.my-item {
    :deep(.dd-item) {
        &.active {
            color: var(--active-color);
        }
    }
}
</style>
