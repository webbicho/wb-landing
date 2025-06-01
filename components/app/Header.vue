<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
	<header class="w-full h-12 flex items-center justify-center sticky">
		<div
			class="flex justify-between items-center"
			:style="{ width: '1024px' }"
		>
			<UButton
				to="/"
				variant="ghost"
			>
				<NuxtImg
					src="/images/webbicho-green.svg"
					alt="Webbicho Full Logo"
					class="h-7"
				/>
			</UButton>
			<div class="flex gap-2">
				<AppColorModeButton />
				<UButton
					:label="t('header.access')"
					variant="ghost"
					class="font-bold"
					size="xl"
				/>
				<UButton
					:label="t('header.getStarted')"
					class="font-bold"
					size="xl"
				/>
			</div>
		</div>
	</header>
</template>
