<template>
  <q-drawer
    show-if-above
    bordered
  >
<!--    v-model="true"-->
    <q-toolbar class="aside">
      <q-toolbar-title class="aside_block">
        <main-image class="aside_img" :src="logo" />
      </q-toolbar-title>
    </q-toolbar>
  </q-drawer>
</template>

<script setup lang="ts">
import logo from '../assets/img/logo.svg'
</script>

<style scoped lang="scss">
.aside {
  background: $primary;
  height: 100%;
  padding: 12px 16px;
  @media (min-width: $pc) {
    align-items: flex-start;
  }
  &_img {
    max-width: 152px;
    min-width: 152px;
    width: 100%;
  }
}
</style>
