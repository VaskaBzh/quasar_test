<template>
	<q-icon class="header_logo" alt="logo" :name="`img:${href}`" />
</template>

<script setup lang="ts">
interface IProps {
	href: string,
}

defineProps<IProps>()

defineOptions({
	name: 'main-icon'
});
</script>

<style scoped lang="scss">

</style>
