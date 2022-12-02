<template>
    <div class="header">
        <div class="book-catalog">
            <dd-icon color="var(--primary)" class="list-icon" @click="toggle"><List /></dd-icon>
            <router-link to="/"><dd-link color="black">主页</dd-link></router-link>
            <bottom-menu ref="bottomMenuRef" />
        </div>
        <div class="menu">
            <dd-button @click="() => touch()" ghost padding=".1em" color="#000"
                ><dd-icon><component :is="icon"></component></dd-icon
            ></dd-button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { DdIcon, List } from "@ddongui/icon"
import { DdLink, DdButton } from "ddong-ui"
import { ref } from "vue"
import BottomMenu from "../../../components/bottomMenu/BottomMenu.vue"
import { useDarkTheme } from "./Nav"
const bottomMenuRef = ref<InstanceType<typeof BottomMenu>>()

const { icon, touch } = useDarkTheme()

function toggle() {
    bottomMenuRef.value?.toggle()
}
</script>
<style lang="less" scoped>
.header {
    display: flex;
    padding: 1em;
    box-shadow: 0 2px 6px rgba(var(--border-rgb), 0.8);
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
        flex-grow: 2;
    }

    &:deep(.book-catalog) {
        .list-icon {
            display: none;
        }
    }
}
</style>
