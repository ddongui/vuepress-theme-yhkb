<template>
    <div class="aside">
        <aside-menu :list="siderItems" :default-index="pathToIndex(decodeURI(route.path))"></aside-menu>
    </div>
</template>
<script setup lang="ts">
import AsideMenu from "../../../components/menu/Menu.vue";
//@ts-ignore
import { siderItems } from "@temp/siderItems";
import { useRoute } from "vue-router";
import { pathToIndex } from "../../../utils/index";
const route = useRoute();
</script>
<style scoped lang="less">
.aside {
    height: 100%;
}
</style>
