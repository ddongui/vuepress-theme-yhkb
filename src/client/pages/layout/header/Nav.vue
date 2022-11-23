<template>
    <div class="header">
        <div class="book-catalog">
            <dd-icon color="var(--primary)" class="list-icon" @click="toggle"><List /></dd-icon>
            <router-link to="/"><dd-link color="black">目录大纲</dd-link></router-link>
            <bottom-menu ref="bottomMenuRef"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import { DdIcon, List } from "@ddongui/icon";
import { DdLink } from "ddong-ui";
import { ref } from "vue";
import BottomMenu from "../../../components/bottomMenu/BottomMenu.vue";
const bottomMenuRef = ref<InstanceType<typeof BottomMenu>>();

function toggle() {
    bottomMenuRef.value?.toggle();
}
</script>
<style lang="less" scoped>
.header {
    padding: 1em;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
    a {
        font-size: 14px;
        font-weight: bold;
    }
    .book-catalog {
        display: flex;
        align-items: center;
        gap: 1em;
        font-weight: bold;
        cursor: default;
    }

    &:deep(.book-catalog) {
        .list-icon {
            display: none;
        }
    }
}
</style>
