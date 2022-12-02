<template>
    <dd-drawer class="bottom-menu-wrapper" v-model:visible="visible" from="bottom" long="60vh" :delay="100">
        <dd-viewer height="100%">
            <Menu :list="siderItems" class="bottom-menu" :default-index="defaultIndex"></Menu>
        </dd-viewer>
    </dd-drawer>
</template>

<script setup lang="ts">
import { DdDrawer, DdViewer } from "ddong-ui"
import { computed, ref } from "vue"
import Menu from "../menu/Menu.vue"
import { siderItems } from "@temp/siderItems"
import { useRoute } from "vue-router"
import { pathToIndex } from "../../utils"

const visible = ref(false)
function toggle() {
    visible.value = true
}
const route = useRoute()
const defaultIndex = computed(() => pathToIndex(decodeURI(route.path)))
defineExpose({ toggle })
</script>

<style scoped lang="less">
.bottom-menu-wrapper {
    /* .bottom-menu {
        margin: 0 10em 0 5em;
    } */
}
</style>
