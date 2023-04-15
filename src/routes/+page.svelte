<script lang="ts">
	import { AppBar, AppShell, LightSwitch } from '@skeletonlabs/skeleton';
	import MainPage from '../lib/mainPage.svelte';

	const navbarBtm = 'sm:block'
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
				<div>

				</div>
				<button type="button" class="btn variant-ghost-primary hidden {navbarBtm}"><a href="/about">About</a></button>
				<button type="button" class="btn variant-ghost-primary hidden {navbarBtm}">Github</button>
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<MainPage />
	<svelte:fragment slot="pageFooter">
		<div class="flex mt-20 tex justify-center items-center">
			<p>Created By FigoMager 👨‍💻<br /> Powered By Svelte ⚡</p>
			<div />
		</div></svelte:fragment
	>
</AppShell>
