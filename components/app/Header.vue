<script lang="ts" setup>
const { t } = useI18n();
</script>

<template>
	<header class="w-full h-12 flex items-center justify-center sticky top-0 bg-default">
		<div
			:style="{ width: '1024px' }"
			class="flex justify-between items-center"
		>
			<UButton
				to="/"
				variant="ghost"
			>
				<NuxtImg
					alt="Webbicho Full Logo"
					class="h-7"
					src="/images/webbicho-green.svg"
				/>
			</UButton>
			<div class="flex gap-2">
				<AppColorModeButton />
				<UButton
					:label="t('header.access')"
					class="font-bold"
					size="xl"
					variant="ghost"
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
