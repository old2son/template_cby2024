<script>
	import { fly } from 'svelte/transition';

	export let message = '';
	export let duration = 250;
	export let visible = false;
</script>

{#if visible}
	<div class="toast" transition:fly={{ duration, y: -100 }}>
		{message}
	</div>
{/if}

<style>
	.toast {
		position: fixed;
		top: 50%;
		left: 50%;
		z-index: 10;
		padding: 0.8rem 1.2rem;
		border-radius: 0.5rem;
		transform: translate(-50%, -50%);
		font-size: 1rem;
		font-weight: 400;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.9);
	}
</style>
