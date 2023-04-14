<script lang="ts">
	import { modalStore } from '@skeletonlabs/skeleton';

	export let parent: any;
    export let card : string;

	const cButton = 'fixed top-4 right-4 z-50 font-bold shadow-xl';
	const cImage = 'max-w-[90%] max-h-[90%] rounded-container-token overflow-hidden shadow-xl';
	const cBase = 'card p-4 w-[340px] shadow-xl space-y-4';
	const cHeader = 'text-2xl font-bold';
    console.log(card)

</script>

<!-- Button -->
<div class="modal-example-form {cBase}">
    <div class="">
        <img class="{cImage} min-w-[50%]" src={$modalStore[0]?.image}/>
    </div>
	<header class={cHeader}>{$modalStore[0]?.title ?? '(title missing)'}</header>
	<article class="max-h-24 overflow-auto">{$modalStore[0]?.body ?? '(body missing)'}</article>

	<!-- prettier-ignore -->
	<footer class="modal-footer">
        <button class="btn variant-filled-primary" on:click={parent.onClose}>Read</button>
        <button class="btn {parent.buttonNeutral}" on:click={parent.onClose}>{parent.buttonTextCancel}</button>
    </footer>
</div>
<!-- <img src={$modalStore[0]?.image} class={cImage} alt="Example" title="Source: {$modalStore[0]?.meta.source}" /> -->