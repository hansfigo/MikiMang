<script lang="ts">
	import { onMount } from 'svelte';
	import { fetchData, type Manga, type MangaTitle } from './FetchData.svelte';
	import {
		Modal,
		modalStore,
		type ModalSettings,
		type ModalComponent
	} from '@skeletonlabs/skeleton';
	import MangaModal from '../lib/MangaModal.svelte';
	let mangaList: Manga[] = [];
	let isLoading: boolean = false;
	let query: string;

	onMount(async () => {
		mangaList = await fetchData('https://api.consumet.org/meta/anilist-manga/madoka');
	});

	async function searchMangaData() {
		isLoading = true;
		mangaList = await fetchData(`https://api.consumet.org/meta/anilist-manga/${query}`);
		isLoading = false;
		query = '';
	}

	function modalTrigger(title: string, img: string, desc: string) {
		const d: ModalSettings = {
			title : title,
			type: 'component',
			image : img,
			body : desc,
			// Pass the component registry key as a string:
			component: 'modalComponentOne'
		};
		modalStore.trigger(d);
	}

	// import ModalComponentOne from '...';
	// import ModalComponentTwo from '...';

	const modalComponentRegistry: Record<string, ModalComponent> = {
		// Custom Modal 1
		modalComponentOne: {
			// Pass a reference to your custom component
			ref: MangaModal,
			// Provide a template literal for the default component slot
			props : {card : 'card'},
			slot: '<p>Skeleton</p>'
		}

		// Custom Modal 2

		// ...
	};
</script>

<Modal components={modalComponentRegistry} />
<div class="container h-full mx-auto mt-10 flex justify-center items-center">
	<div class="flex flex-col gap-12 container">
		<div class="space-y-5">
			<h1>All Your Manga Info In One Place</h1>
			<p>
				Dive into the fascinating world of manga with our comprehensive collection of information on
				the hottest titles, artists, and trends.
			</p>
			<div class="input-group input-group-divider grid-cols-[auto_1fr_auto] h-10">
				<div class="input-group-shim">
					<svg
						width="15"
						height="15"
						viewBox="0 0 15 15"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						><path
							d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
							fill="currentColor"
							fill-rule="evenodd"
							clip-rule="evenodd"
							data-darkreader-inline-fill=""
							style="--darkreader-inline-fill:currentColor;"
						/></svg
					>
				</div>
				<input bind:value={query} type="search" placeholder="Search..." />
				<button on:click={searchMangaData} class="variant-filled-secondary">Submit</button>
			</div>
		</div>
		<div class="flex flex-wrap gap-12 justify-center ">
			{#if isLoading == false}
				{#each mangaList as manga}
					<div
						on:click={() => modalTrigger(manga.title.romaji, manga.image, manga.description)}
						class="card overflow-hidden variant-glass-surface card-hover w-52"
					>
						<div class=" bg-red-200">
							<img class=" min-w-full" src={manga.image} alt="" srcset="" />
						</div>
						<section class="p-4">{manga.title.romaji}</section>
						<footer class="flex flex-wrap card-footer gap-2">
							{#each manga.genres as genre}
								<span class="chip variant-soft-primary">{genre}</span>
							{/each}
						</footer>
					</div>
				{/each}
			{:else}
				<p>Loading</p>
			{/if}
		</div>
	</div>
</div>
