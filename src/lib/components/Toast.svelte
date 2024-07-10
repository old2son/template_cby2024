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
		padding: 10px 20px;
		border-radius: 5px;
		transform: translate(-50%, -50%);
		font-size: 22px;
		font-weight: 400;
		color: #fff;
		background-color: rgba(0, 0, 0, 0.9);
	}
</style>
