<script lang="ts">
	import { onMount } from 'svelte';
	import { AppBar, AppRail, AppRailTile, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import MainPage from '../lib/mainPage.svelte';
	import { writable, type Writable } from 'svelte/store';

</script>

<AppShell>
	<svelte:fragment slot="header">
		<AppBar
			shadow="shadow-lg"
			gridColumns="grid-cols-3"
			slotDefault="place-self-center"
			slotTrail="place-content-end"
		>
			<svelte:fragment slot="lead">
				<div class="container">
					<h1>MikiMang</h1>
				</div>
			</svelte:fragment>
			<svelte:fragment slot="trail">
				<button type="button" class="btn-icon variant-ghost-primary"
				
					></button
				>
				<button type="button" class="btn variant-ghost-primary">Github</button>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<svelte:fragment slot="sidebarLeft">
		<div class="h h-full p-4 w-52 bg-fuchsia-500">Halo Madoo</div>
	</svelte:fragment>

	<!-- Router Slot -->
	<MainPage />
	<!-- ---- / ---- -->
	<svelte:fragment slot="pageFooter">Created By FigoMager <br /> Powered By Svelte</svelte:fragment>
</AppShell>
