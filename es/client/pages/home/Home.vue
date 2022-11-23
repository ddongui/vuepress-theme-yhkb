<template>
    <div class="yhkb-home">
        <div class="content">
            <h1>
                <dd-icon color="var(--primary)"><Book /></dd-icon>
                <span>学习笔记</span>
            </h1>
            <home-menu class="menu" :list="siderItems" :all-collapsed="false"></home-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
import HomeMenu from "../../components/menu/Menu.vue";
import { siderItems } from "@temp/siderItems";
import { DdIcon, Book } from "@ddongui/icon";
</script>
<style lang="less" scoped>
.yhkb-home {
    .content {
        max-width: 40em;
        margin: 0 auto;
        padding: 2em;
        background-color: var(--fill);
        h1 {
            display: flex;
            align-items: center;
            gap: 0.5em;
        }
        .menu {
            padding: 1em;
        }
    }
}
</style>
