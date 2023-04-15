<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';
	import { fetchMangaDetail, type MangaDetail } from './FetchData';

	export let parent: any;
	export let mangaId: string;
	let MangaDetail: MangaDetail;
	let isLoading: boolean = false;

	const cImage = 'max-w-[90%] max-h-[90%] rounded-container-token overflow-hidden shadow-xl';
	const cBase = 'card p-4 w-[340px] shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';

	onMount(async () => {
		isLoading = true;
		MangaDetail = await fetchMangaDetail(mangaId);
		isLoading = false;
	});
</script>

<div class="modal-example-form {cBase}">
	{#if !isLoading}
		<div class="">
			<img class="{cImage} min-w-[50%]" alt="Manga Cover" src={$modalStore[0]?.image} />
		</div>
		<header class={cHeader}>{$modalStore[0]?.title ?? '(title missing)'}</header>
		<span class="chip variant-soft hover:variant-filled">
			{#if MangaDetail == undefined}
				<span>No Rating</span>
			{:else}
				<span>{MangaDetail.rating ?? 'No Rating'}</span>
			{/if}
		</span>
		<article class="max-h-24 overflow-auto">
			Summary : {$modalStore[0]?.body ?? 'No Desc'}
		</article>

		<!-- prettier-ignore -->
		<footer class="modal-footer">
        <button class="btn variant-filled-primary" on:click={parent.onClose}>Read</button>
        <button class="btn variant-ringed-secondary-error" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
    </footer>
	{:else}
		<p>Loading</p>
	{/if}
</div>
