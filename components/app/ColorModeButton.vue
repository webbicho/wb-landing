<script setup lang="ts">
const colorMode = useColorMode();

const isDark = computed({
	get() {
		return colorMode.value === 'dark';
	},
	set(_isDark) {
		colorMode.preference = _isDark ? 'dark' : 'light';
	}
});
</script>

<template>
	<ClientOnly v-if="!colorMode?.forced">
		<UButton
			:icon="isDark ? 'i-lucide-sun' : 'i-lucide-moon'"
			:aria-label="isDark ? 'Activate light mode' : 'Activate dark mode'"
			color="neutral"
			variant="ghost"
			size="xl"
			@click="isDark = !isDark"
		/>
		<template #fallback>
			<div class="size-8" />
		</template>
	</ClientOnly>
</template>
