<template>
  <q-img :src="src" />
</template>

<script setup lang="ts">
interface IProps {
  src: string,
}

defineProps<IProps>()

defineOptions({
  name: 'main-image'
});
</script>

<style scoped lang="scss">

</style>
