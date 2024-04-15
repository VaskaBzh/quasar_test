<template>
  <q-layout view="lHh Lpr lFf">
<!--    <q-header elevated>-->
<!--      <q-toolbar>-->
<!--        <q-btn-->
<!--          flat-->
<!--          dense-->
<!--          round-->
<!--          icon="menu"-->
<!--          aria-label="Menu"-->
<!--          @click="toggleLeftDrawer"-->
<!--        />-->

<!--        <q-toolbar-title>-->
<!--          Quasar App-->
<!--        </q-toolbar-title>-->

<!--        <div>Quasar v{{ $q.version }}</div>-->
<!--      </q-toolbar>-->
<!--    </q-header>-->
    <main-header />
    <main-aside />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
// import { ref } from 'vue';
import MainHeader from 'components/MainHeader.vue';
import MainAside from 'components/MainAside.vue';

defineOptions({
  name: 'main-layout'
});


// const leftDrawerOpen = ref(false);
//
// function toggleLeftDrawer () {
//   leftDrawerOpen.value = !leftDrawerOpen.value;
// }
</script>
