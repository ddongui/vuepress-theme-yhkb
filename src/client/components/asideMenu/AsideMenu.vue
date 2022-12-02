<template>
    <dd-menu ref="menu" not-animation class="yhkb-aside-menu">
        <template v-for="item in list">
            <a :href="item.link" :style="{ display: item.title ? 'block' : 'none' }">
                <dd-item :index="item.link" :key="item">{{ item.title }}</dd-item>
            </a>
            <AsideMenu v-if="item.children" :list="item.children" :depth="depth"></AsideMenu>
        </template>
    </dd-menu>
</template>

<script setup lang="ts">
import { DdMenu, DdItem } from "ddong-ui";
import { onMounted, ref } from "vue";

const menu = ref<any>();

const props = withDefaults(
    defineProps<{
        list: Record<any, any>;

        depth?: number;
    }>(),
    {
        depth: 0,
    }
);

const exposed = {
    activate: (link: string) => {},
};

onMounted(() => {
    if (menu.value?.select) exposed.activate = menu.value?.select;
});

defineExpose(exposed);
</script>
<style scoped lang="less">
.yhkb-aside-menu {
    &:deep(.dd-item) {
        &:hover,
        &.active {
            color: var(--primary);
        }
    }
}
</style>
